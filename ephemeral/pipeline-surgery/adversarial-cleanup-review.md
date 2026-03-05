# Adversarial Cleanup Review — Red-Team Pipeline Breakage Report
Date: 2026-02-25
Reviewer: adversarial-reviewer (Opus)
Scope: All files modified in Wave 1 cleanup fixes

---

## Executive Summary

I found **7 exploitable vulnerabilities**, **3 structural weaknesses**, and **2 newly-introduced attack vectors** in the fixed pipeline. Overall the fixes are directionally correct — they close the most egregious loopholes — but several remain gameable by a lazy, distracted, or adversarial builder/orchestrator. The most severe: GR-63 can be passed with a 100-character template that requires zero genuine experiential work, and BV-02 can be completely bypassed via a trivially renamed section header.

---

## FINDING 1: GR-63 IS GAMEABLE WITH A MINIMAL-EFFORT TEMPLATE (SEVERITY: HIGH)

### The Attack

The new GR-63 requires these conditions to PASS:
1. `hasLegibility`: regex `/legib|read|text|font|arm.?s?\s*length/i`
2. `hasVisualClarity`: regex `/chart|diagram|table|visual|label|annotation|component/i`
3. `hasStructuralRef`: regex `/zone|section|header|footer|Z[1-9]|S[1-9]|nav|hero|sidebar/i`
4. `hasMinLength`: `text.length >= 100`

A lazy builder can construct a PASSING string with zero actual assessment:

```html
<!-- EXPERIENTIAL-CHECK: All text is readable across every section. Every table and chart label is visible. The header and footer zones maintain legibility. No issues found with any component annotation throughout. -->
```

That is **exactly 194 characters**, triggers all 4 regex groups, and contains **zero specific findings, zero screenshot references, zero element-level observations**. It is a template a Sonnet builder could memorize and paste verbatim on every build without ever looking at the page.

### Why `hasNegativeFinding` Does Not Help

Note: `hasNegativeFinding` is computed but **never checked in the pass condition** (line 811):
```javascript
pass: hasLegibility && hasVisualClarity && hasStructuralRef && hasMinLength
```

The `hasNegativeFinding` flag is populated but does not contribute to PASS/FAIL. A builder that reports "everything is fine" with no negative observations passes identically to one that reports actual failures. This directly undermines the entire purpose of the experiential check — the finding was supposed to catch builders who SKIP the assessment.

### Recommendation

Either:
- (A) Add `hasNegativeFinding` to the pass condition (forces builder to report at least one imperfection — every real page has at least one), OR
- (B) Add a `hasSpecificEvidence` check requiring at least one concrete element reference (e.g., "bar chart in S3", "H2 in the header") — not just category names like "table" or "header", OR
- (C) Raise minLength to 250+ (harder to game with a template) and require at least 2 distinct structural references (right now, a single "section" mention satisfies hasStructuralRef)

---

## FINDING 2: GR-63 FAIL DOES NOT ACTUALLY TRIGGER REFINE IN ALL CODE PATHS (SEVERITY: HIGH)

### The Bug

In the verdict logic (lines 844-849):

```javascript
let verdict = 'PROCEED_TO_PA';
if (identityFail > 0 && !allIdentityFailsMechanical) verdict = 'REBUILD';
else if (identityFail > 0 && allIdentityFailsMechanical) verdict = 'REFINE';
else if (perceptionFail > 0 || !allPerceptionPass) verdict = 'REFINE';
else if (experientialFail) verdict = 'REFINE';  // GR-63 REQUIRED
else if (recommendedFail > 0) verdict = 'REFINE';
```

The `else if` chain means GR-63's REFINE is ONLY reached if:
- Zero non-mechanical identity failures
- Zero perception failures

This is correct for the priority ordering. However, **if identity or perception gates ALSO fail**, the verdict is already REBUILD or REFINE, so GR-63 failure is effectively absorbed/hidden. The `summary.experiential.GR63` field will show the status, but the orchestrator must explicitly check it SEPARATELY from the verdict — the verdict alone does not communicate "GR-63 failed."

More critically: GR-63 is listed as REQUIRED in GR-48's `REQUIRED_GATES` array (line 1379). But GR-48 only checks gate PRESENCE, not gate RESULT. So:
- GR-63 runs and FAILS → verdict = REFINE (maybe, if nothing else failed first)
- GR-48 checks: is "GR-63" in allResults? YES → GR-48 PASSES
- The coverage gate does not enforce that required gates PASSED, only that they RAN.

### Attack Vector

A builder that skips the experiential check but happens to have all identity and perception gates pass WILL get REFINE. But a builder whose page also has identity issues goes to REBUILD for the identity issues, and the experiential failure is invisible in the verdict — the orchestrator might fix only the identity issues and re-run, never addressing the experiential gap.

### Recommendation

The summary should explicitly flag GR-63 status as a separate field that the orchestrator checks independently of the main verdict. Alternatively, log a warning when experientialFail is true but the verdict was already set to REBUILD/REFINE for other reasons.

---

## FINDING 3: BV-02 CAN BE ENTIRELY BYPASSED VIA MISSING SECTION HEADER (SEVERITY: HIGH)

### The Attack

BV-02's scoping regex (line 76):
```javascript
const bgSectionMatch = briefText.match(/(?:Zone\s*Backgrounds?|Background\s*(?:Colors?|Hex)|Backgrounds?\s*per\s*Zone)([\s\S]*?)(?=^#+\s|\n---|\n\*\*[A-Z]|$)/im);
const bgSectionText = bgSectionMatch ? bgSectionMatch[0] : briefText; // fallback to full text
```

If the brief has no section matching the regex, it falls back to scanning the **entire brief**. The note field warns about this, but the gate still PASSES as long as no adjacent hex pairs in the full text have delta < 15. This is actually the STRICTER behavior.

BUT — the real exploit is the **inverse**: a brief assembler could name the section something like "**Color Strategy**" or "**Palette Definitions**" or "**Zone Tones**" — none of which match the regex. The fallback then scans the full brief, where hex values from borders (`#E83025`), text colors (`#3D3D3D`), and background colors are all interleaved. Adjacent hex values like `#E83025` (red) and `#3D3D3D` (dark gray) have enormous deltas and will never trigger the < 15 check. Meanwhile, the actual background hex values might be scattered non-adjacently, never getting compared pairwise.

More concretely: if the brief lists backgrounds as:
```
**Color Strategy:**
- Text: #3D3D3D
- Zone 1 bg: #FEFCF3
- Border: #E83025
- Zone 2 bg: #FBF8F0
- Accent: #5B8A9B
- Zone 3 bg: #F9F5EC
```

The pairwise comparisons would be:
- #3D3D3D vs #FEFCF3 = delta 193 (PASS)
- #FEFCF3 vs #E83025 = delta 198 (PASS)
- #E83025 vs #FBF8F0 = delta 200 (PASS)
- #FBF8F0 vs #5B8A9B = delta 93 (PASS)
- #5B8A9B vs #F9F5EC = delta 87 (PASS)

Meanwhile Zone 1 (#FEFCF3) vs Zone 2 (#FBF8F0) has delta = only **3** — imperceptible. But these two values are never compared because they are not adjacent in the document.

### Recommendation

BV-02 should:
1. FAIL (not just warn) if no "Zone Backgrounds" section is found, OR
2. Extract ALL hex values, cluster by context (explicit "zone" or "background" labels), and compare only those, OR
3. Require the brief template to enforce a specific section name for backgrounds

---

## FINDING 4: PA-GUARDRAILS.MD STILL CONTAINS PIPELINE VOCABULARY (SEVERITY: MEDIUM)

### The Evidence

Searching pa-guardrails.md for pipeline vocabulary:

- **Line 1** (title): "Scoring Thresholds" — the word "threshold" appears
- **Line 5** (split note): "tiers, channels, mechanisms, anti-patterns, thresholds" — all vocabulary words present IN THE DESCRIPTION OF THE SPLIT ITSELF
- **Line 96**: "Mechanism counts" — in the "do not provide" list
- **Line 100**: "Tier 5 expected scores" — in the "do not provide" list
- **Line 103**: "this should have 12 mechanisms" — in the rationale

The pipeline vocabulary appears in the meta-description (line 5) and in the "what not to provide" enumeration (lines 96-103). These are NOT in instructional context — they are in the "do NOT do this" framing. However, an LLM auditor reading this file will still encounter and potentially be primed by:
- The CONCEPT of "mechanisms" (even if told not to think about them)
- The CONCEPT of "tiers" (even if told not to evaluate them)
- The SPECIFIC NUMBER "12 mechanisms" (line 103)

### Assessment

This is a **partial contamination** vector. The ironic-process theory (Wegner, 1987) suggests that telling someone "do not think about 12 mechanisms" makes them think about 12 mechanisms. The fresh-eyes principle is weakened but not destroyed — the auditor is told NOT to use these concepts, which is better than being told TO use them.

### Recommendation

Rewrite the "do not provide" list to avoid mentioning specific numbers or technical terms:
- Instead of "Mechanism counts" → "Quantitative build targets"
- Instead of "Tier 5 expected scores" → "Expected scoring outcomes"
- Instead of "12 mechanisms" → "any specific count of design techniques"
- Remove line 5's enumeration of moved vocabulary, or move it to a non-auditor-facing comment

---

## FINDING 5: CIRCUIT BREAKER ALLOWS UNLIMITED CONTEXT INJECTION (SEVERITY: MEDIUM)

### The Attack

The fresh-eyes exception in artifact-orchestrator.md (lines 471-480) is narrowly scoped in THEORY:

> "ONLY BLOCKING-USABILITY findings from the orchestrator's own experiential scan"
> "ONLY the specific observation, framed as 'verify or contradict'"
> "NOT gate results, NOT pipeline vocabulary, NOT architectural context"

But there is NO enforcement mechanism. The scoping is stated as prose rules that the orchestrator must follow. An adversarial or distracted orchestrator could:

1. Tag any observation as "BLOCKING-USABILITY" (there is no definition of what qualifies beyond "completely illegible" or "inaccessible")
2. Frame extensive architectural context as a "specific observation": *"The orchestrator observed that the page's multi-coherence framework deploys only 2 channels at the S3-S4 boundary, whereas the brief specified 4+ channels. Verify or contradict this finding."*
3. Include multiple "BLOCKING-USABILITY" findings, each seeding different aspects of pipeline knowledge

The execution tracker (P3A+-5) records whether the pre-seeding happened, but does not constrain WHAT was pre-seeded. There is no word limit, no vocabulary filter, no structural constraint.

### Recommendation

Add constraints:
1. Maximum 2 sentences per BLOCKING-USABILITY finding
2. Finding must reference a VISIBLE element ("the third bar chart label") not a pipeline concept
3. Finding must be answerable with YES/NO ("Can you read this label?") not with analysis

---

## FINDING 6: EXPERIENTIAL PASS ORDERING HAS A SUBTLE CONTAMINATION PATH (SEVERITY: MEDIUM)

### The Verification

In pa-deployment.md, the ordering is:
- Section 0: Experiential Pass Protocol (lines 20-116)
- Section 1: 9-Auditor Deployment Architecture (lines 119+)
- Section 2: Screenshot Pre-Capture Pattern (lines 226+)
- Section 3: Fresh-Eyes Principle (lines 310+)
- Section 4: Priority Override (lines 346+)

Section 0 IS in primacy position — this is correct.

However, the MANIFEST.md Appendix E prompt template (line 1096-1134) embeds the experiential pass INSIDE the auditor prompt at position 0, which is the correct enforcement point.

**The contamination path:** The prompt template at line 1120 says:
```
## 1. QUESTION ANSWERS — Your specialty: {SPECIALTY}
```

The `{SPECIALTY}` variable (e.g., "Impression + Emotion", "Readability + Typography") gives the auditor a LENS before they start answering questions. While the experiential pass comes BEFORE questions, the specialty label appears in the question section header. An auditor reading "Your specialty: Spatial + Proportion" will unconsciously filter their experiential pass through that lens. This is a minor contamination — the specialty is needed for questions — but it means the experiential pass is not truly "ROLE-NEUTRAL" as claimed in line 1105.

### Recommendation

Either:
- Move `{SPECIALTY}` to AFTER the question list (so the auditor encounters questions without a framing label), OR
- Accept this as a known minor contamination and document it

---

## FINDING 7: GR-48 CHECKS GATE PRESENCE, NOT GATE SUCCESS (SEVERITY: MEDIUM)

### The Analysis

GR-48 (line 1373-1419) checks:
```javascript
const missingRequired = REQUIRED_GATES.filter(id => !collectedGateIds.has(id));
```

It verifies that all 19 required gates RAN. It does NOT verify they PASSED. This means a pipeline run where GR-01 through GR-15 all FAIL can still get GR-48: PASS — because all gates ran.

The purpose of GR-48 is coverage completeness, not pass completeness. This is architecturally correct (the verdict logic in runGateRunner handles pass/fail routing). But it creates a confusing output: a gate result file showing 15 FAIL + 1 PASS (GR-48) might mislead an orchestrator into thinking "well, GR-48 passed, so coverage is fine."

### Recommendation

Add a `failedRequiredCount` field to GR-48's measured output so the orchestrator sees "19/19 ran, 15/19 FAILED" at a glance. This is a reporting improvement, not a logic change.

---

## FINDING 8: NEW ATTACK VECTOR — GR-64 USABILITY FIX-1 CHECK IS EASILY GAMED (SEVERITY: MEDIUM)

### The Bug

GR-64 (lines 1564-1611) checks whether the weaver's Fix #1 addresses usability when 3+ auditors flagged it. The check:

```javascript
const USABILITY_FIX_TERMS = [
  /readab/i, /legib/i, /font.?size/i, /contrast/i,
  /text\s+size/i, /line.?height/i, /usab/i, /accessib/i
];
const fixOneMatch = weaverReport.match(/(?:Fix\s*#?\s*1[.:]\s*|...)(.*?)(?=...)/is);
const fixOneText = fixOneMatch ? fixOneMatch[1].trim() : '';
const usabilityInFixOne = fixOneText.length > 0 && USABILITY_FIX_TERMS.some(p => p.test(fixOneText));
```

A weaver could write:
> Fix #1: Improve readability. (Then proceed to list an actual non-usability fix.)

The word "readability" triggers the regex, and GR-64 PASSES. The actual fix content is irrelevant — only the presence of a keyword matters.

Furthermore, the Fix #1 regex extraction (`fixOneMatch`) captures everything between "Fix #1:" and "Fix #2" or paragraph break. If the weaver structures their report differently (e.g., numbered list without "Fix" prefix), the extraction fails entirely and `fixOneText` is empty, causing GR-64 to FAIL even if Fix #1 genuinely addresses usability.

### Recommendation

GR-64 is inherently limited as a text-matching heuristic. Accept this limitation and document it, or add structural requirements to the weaver prompt template (e.g., "Fixes must be formatted as `Fix #N: [CATEGORY] — description`" where CATEGORY is MECHANICAL/STRUCTURAL/COMPOSITIONAL).

---

## FINDING 9: MECHANICAL EXCEPTION INCLUDES GR-07 BUT GR-07 IS "RECOMMENDED" NOT "IDENTITY" (SEVERITY: LOW)

### The Code

Line 839: `const mechanicalIdentityGates = ['GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-10'];`

GR-07 (No Pure Black/White) is in the `mechanicalIdentityGates` array. But GR-07 is listed as RECOMMENDED, not REQUIRED, in the REQUIRED_GATES array (line 1374). And in the verdict logic, GR-07 is checked separately via `recommendedGates` (line 830).

Including GR-07 in `mechanicalIdentityGates` means: if GR-07 fails AND other identity gates fail, the `allIdentityFailsMechanical` calculation includes GR-07. But GR-07 is not in `identityGates` (line 823 lists only GR-01 through GR-10 minus GR-07... wait, actually GR-07 IS missing from identityGates: `['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10']`).

So GR-07 failure is NOT counted in `identityFail`. It is only counted in `recommendedFail`. The mechanical exception array includes GR-07, but it will never actually be checked against `failedIdentity` because failedIdentity only contains gates from identityGates (which excludes GR-07).

This is dead code — harmless but confusing. It suggests someone intended GR-07 to be an identity gate but excluded it from the identity gate list.

### Recommendation

Remove GR-07 from `mechanicalIdentityGates` to avoid confusion, since it is never reached via that path.

---

## FINDING 10: pa-guardrails.md REFERENCES "Section 11" THAT DOES NOT EXIST (SEVERITY: LOW)

### The Evidence

In artifact-orchestrator.md line 472:
> "EXPLICIT EXCEPTION to the fresh-eyes principle (pa-deployment.md Section 3, pa-guardrails.md Section 11)"

pa-guardrails.md has sections 1 through 6. There is no Section 11. The reference should be to pa-guardrails.md Section 6 (Fresh-Eyes Principle).

This is a stale reference that survived the split — the original monolithic pa-guardrails had more sections.

### Recommendation

Fix the reference to "pa-guardrails.md Section 6".

---

## SUMMARY TABLE

| # | Finding | Severity | Exploitable By | Fix Effort |
|---|---------|----------|---------------|------------|
| 1 | GR-63 gameable with template string | HIGH | Lazy/distracted builder | SMALL: add hasNegativeFinding to pass condition or raise minLength |
| 2 | GR-63 FAIL absorbed by identity/perception failures | HIGH | Orchestrator oversight | SMALL: add explicit GR-63 status to verdict note |
| 3 | BV-02 bypassed by renamed section header | HIGH | Brief assembler (intentional or accidental) | MEDIUM: fail if no section found, or enforce header name |
| 4 | pa-guardrails.md contains pipeline vocabulary in "do not" framing | MEDIUM | Ironic-process priming of auditors | SMALL: rewrite to avoid specific terms |
| 5 | Circuit breaker allows unlimited context injection | MEDIUM | Adversarial orchestrator | SMALL: add word limit and vocabulary constraint |
| 6 | Experiential pass contaminated by specialty label | MEDIUM | Structural — cannot fully prevent | SMALL: move specialty label or document |
| 7 | GR-48 reports presence not success | MEDIUM | Misleading orchestrator | SMALL: add failedRequiredCount |
| 8 | GR-64 Fix #1 check is keyword-gameable | MEDIUM | Adversarial weaver | MEDIUM: accept limitation or add structural format |
| 9 | GR-07 in mechanicalIdentityGates is dead code | LOW | N/A — harmless | TRIVIAL: remove from array |
| 10 | Stale "Section 11" reference | LOW | Confusing reference | TRIVIAL: fix reference |

---

## ATTACK VECTORS CREATED BY THE FIXES (New in This Cleanup)

### New Vector A: GR-63 Minimum-Effort Template

The GR-63 gate did not exist before this cleanup. By creating it with regex-only validation, the fix introduced a new gameable surface. Before: builders had no experiential check at all (bad). After: builders have a check they can pass with a memorized template (marginally better, but creates false confidence).

### New Vector B: BV-02 Scoping Fallback Creates Silent False Passes

The scoping of BV-02 to "Zone Backgrounds" sections is new. The fallback to full-text scanning when the section is missing creates a path where background delta violations are HIDDEN by interleaved non-background hex values. Before: BV-02 scanned everything (strict but noisy). After: BV-02 either scans the right section (correct) or scans everything while REPORTING it as a warning (correct behavior, but the gate still PASSES with potentially invalid comparisons).

---

## OVERALL ASSESSMENT

The fixes close the most critical loopholes from the original pipeline (missing experiential enforcement, unscoped background checks, polluted auditor guardrails). The direction is correct. However, the implementations are FIRST-PASS quality — they need hardening against adversarial inputs.

**Top 3 recommendations by impact:**

1. **Add `hasNegativeFinding` to GR-63 pass condition** — forces builders to report at least one specific observation, raising the bar from "paste a template" to "actually look at the page"
2. **Make BV-02 FAIL when Zone Backgrounds section is missing** — forces brief assembler to use the standardized section name
3. **Fix stale pa-guardrails.md Section 11 reference** — trivial fix, prevents downstream confusion

---

*End of adversarial review. Red team: adversarial-reviewer. Target: Wave 1 cleanup fixes.*
