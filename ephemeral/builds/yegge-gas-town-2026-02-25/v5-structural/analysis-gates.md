# Gate Architecture Analysis — SIG-01 through SIG-05, SIG-11

**Date:** 2026-02-26
**Analyst:** gate-analyst (Opus)
**Scope:** Evaluate 6 proposed gate changes against D7 (Defense Paradox) complexity budget
**Baseline:** 56 gates (21 REQ + 14 REC + 10 ADV + 2 DIAG + 8 BV + 1 UTIL), gate-runner-core.js ~2,930 lines
**Budget ceiling:** 60 gates (crack-defense-depth D7-F1). 4 remaining slots.

---

## D7 Context

The crack-defense-depth analysis quantifies the Defense Paradox:
- Design-to-implementation ratio: **20.9:1** (at the 20:1 concern threshold)
- Defense-about-defense: **41.6%** of v5 design corpus
- Gate growth trajectory: v3 (37) -> v4 (47) -> v5 (56) = +9-10 per version
- Estimated overhead per gate: **~120 lines across all files** (code + manifest + spec + MANIFEST.md + SKILL.md + GR-48 coverage)
- **4 remaining gate slots** before exceeding 60-gate budget ceiling

Every proposal below is evaluated against: "Is this gate's quality improvement worth ~120 lines of infrastructure and 1 of 4 remaining budget slots?"

---

## Gate-ID Collision Note

The SYNTHESIS identifies a numbering collision: `gate-coverage-audit` and `recipe-traceability` both independently propose gates as GR-84 through GR-88 with DIFFERENT purposes. This analysis uses the SIG-XX designations from the SYNTHESIS as canonical identifiers and defers gate-ID assignment to implementation.

---

## SIG-01: GR-84 — IMPROVEMENTS Comment Verification

### What It Does
Parse the `<!-- IMPROVEMENTS: ... -->` HTML comment. Verify >= 5 items exist. Count items tagged HIGH. If 3+ HIGH items, the orchestrator overrides SHIP to REFINE.

### D7 Assessment: 4/5 — HIGH VALUE, LOW COST

**Quality improvement:** The IMPROVEMENTS comment is the builder's self-awareness signal. It feeds the IMPROVE pass decision: zero ideas = single-pass RELEASE evaluation; 4+ ideas = standard IMPROVE path. Currently this decision is made by parsing an unvalidated, unstandardized comment. The "3+ HIGH -> override to REFINE" rule (artifact-builder-recipe-polish.md line 296) is **completely unenforceable** without this gate. This is a process-logic gate, not a quality-measurement gate — it ensures the pipeline's own decision tree functions correctly.

**Complexity cost:** LOW. This is a text-parsing gate (no Playwright required). The IMPROVEMENTS format is already specified in the compose recipe (lines 559-564): `Category | Zone | What I would change | Confidence (LOW/MED/HIGH)`. Implementation is regex matching on HTML text, similar to GR-83 (INTENT comment count, ~90 lines).

### Implementation Complexity
- **Lines of code:** ~60-80 (text parsing, regex for items, keyword counting for HIGH/MED/LOW)
- **Function:** `checkImprovementsComment(htmlText)` — text-only, no Playwright
- **Manifest changes:** 1 entry in gate-manifest.json, add to spec, add to GR-48 coverage array
- **Execution order:** Step 1.95 (post-build, text-only, alongside BV-08 and GR-83)

### Gate Count Impact
56 -> 57 (1 slot used, 3 remaining)

### Regression Risk: LOW
- The only false FAIL scenario: builder writes an IMPROVEMENTS comment with < 5 items. This is a legitimate gate FAIL — the recipe mandates "minimum 5 items" (compose recipe line 562). No false positive risk.
- If builder omits the comment entirely, that is also a legitimate FAIL — the recipe mandates the comment exists.
- No risk of breaking good pages — this checks process artifacts, not visual quality.

### Tier Recommendation: RECOMMENDED (not REQUIRED)

The synthesis suggests considering REQUIRED tier. I disagree. REQUIRED means ANY FAIL blocks verdict entirely. An IMPROVEMENTS comment format issue should not block a page that passes all identity and perception gates. RECOMMENDED is correct: it contributes to the 3+ RECOMMENDED FAIL = REBUILD threshold, which is the appropriate escalation path for process compliance issues.

**Exception:** The "3+ HIGH -> override to REFINE" logic should be implemented in the orchestrator's verdict function (artifact-orchestrator.md Section 7), not in the gate itself. The gate reports the count; the orchestrator applies the override. This separation keeps the gate binary and simple.

### Recommendation: **IMPLEMENT NOW**

### Exact Spec

```javascript
// GR-84: IMPROVEMENTS Comment Verification
// Source: SIG-01, recipe-traceability Finding 1
// Tier: RECOMMENDED
// Phase: Post-build text-only (step 1.95)
// Input: htmlText (string)
function checkImprovementsComment(htmlText) {
  const match = htmlText.match(/<!--\s*IMPROVEMENTS:\s*([\s\S]*?)-->/i);
  if (!match) {
    return {
      gate: 'GR-84', name: 'IMPROVEMENTS Comment',
      status: 'FAIL', source: 'code',
      measured: { found: false, itemCount: 0, highCount: 0 },
      threshold: { minItems: 5, comment: 'required' }
    };
  }
  const text = match[1].trim();
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  // Count items (lines starting with number, dash, or bracket)
  const items = lines.filter(l => /^\s*(\d+[\.\)]|\-|\[)/.test(l));
  const highCount = items.filter(l => /\bHIGH\b/i.test(l)).length;
  const medCount = items.filter(l => /\bMED(IUM)?\b/i.test(l)).length;
  const lowCount = items.filter(l => /\bLOW\b/i.test(l)).length;
  const hasMinItems = items.length >= 5;
  const hasAtLeastOneHigh = highCount >= 1;
  // Recipe requires: minimum 5 items, at least 1 HIGH, at least 2 different tags
  const tags = new Set();
  items.forEach(l => {
    const tagMatch = l.match(/\[(D-\d+|STRUCTURAL|MECHANICAL|ACCESSIBILITY|COMPOSITIONAL)\]/i);
    if (tagMatch) tags.add(tagMatch[1].toUpperCase());
  });
  const pass = hasMinItems && hasAtLeastOneHigh && tags.size >= 2;
  return {
    gate: 'GR-84', name: 'IMPROVEMENTS Comment',
    status: pass ? 'PASS' : 'FAIL', source: 'code',
    measured: {
      found: true, itemCount: items.length,
      highCount, medCount, lowCount,
      distinctTags: tags.size, tagList: [...tags]
    },
    threshold: { minItems: 5, minHighCount: 1, minDistinctTags: 2 }
  };
}
```

**Orchestrator integration:** When GR-84 reports `highCount >= 3` and weaver verdict is SHIP or SHIP WITH FIXES, orchestrator overrides to REFINE. This logic goes in artifact-orchestrator.md Section 7, not in the gate.

---

## SIG-02: GR-85 — Hover State Count

### What It Does
Count distinct `:hover` CSS selectors in the page's stylesheets. FAIL if count < 4.

### D7 Assessment: 2/5 — LOW VALUE, MODERATE COST

**Quality improvement:** D-07 (Edge Intentionality) is a POLISH disposition handled by Pass B. The recipe specifies 4 hover categories: table rows, links, callouts, cards. Verifying the COUNT of hover selectors is a crude proxy — 4 meaningless `:hover { opacity: 0.99 }` rules would pass. The gate cannot verify hover QUALITY (whether the hover effect is perceptible, whether it serves the content). That judgment is inherently perceptual and belongs with PA auditors.

**Complexity cost:** MODERATE. Requires Playwright (evaluating stylesheets). The `CSSStyleSheet.cssRules` API is already used by GR-46 (print stylesheet), so the pattern exists, but counting `:hover` selectors across all stylesheets is more complex than checking for `@media print`. Cross-origin stylesheet access issues (already handled in GR-46's try-catch) apply.

**D7 concern:** This gate addresses a real gap (D-07 is entirely unverified) but does so at the WRONG LAYER. A count >= 4 gate will drive builders to add 4 trivial hover rules to pass the gate, not to create meaningful edge intentionality. This is the exact pattern identified by the synthesis as CC-05: "Gates verify compliance, not quality."

**Better alternative:** Add hover assessment to an existing PA question. PA-16 (craftsmanship) or a new PA-82 (hover/interaction quality) would catch quality gaps that a simple count cannot. No gate infrastructure needed — just ~5 lines added to pa-deployment.md.

### Implementation Complexity
- **Lines of code:** ~50-60 (Playwright evaluate, iterate stylesheets, count :hover rules)
- **Function:** Add to `runWave2Gates(page)` or new `runBehavioralGates(page)`
- **Manifest changes:** 1 entry + spec + GR-48 if RECOMMENDED

### Gate Count Impact
56 -> 57 (1 slot used, 3 remaining)

### Regression Risk: MODERATE
- **False FAIL on APPLIED mode pages:** The recipe says hover states are Pass B (polish). APPLIED mode pages receive less polish. A simple page with 3 hover states (links, table rows, one callout) would FAIL. The gate has no mode-awareness.
- **False FAIL on content with no tables/cards:** If the content has no tables and no card-style elements, 2 hover categories are structurally unavailable. The builder cannot create hover states for elements that don't exist.

### Tier Recommendation: ADVISORY (if implemented at all)

Even if implemented, this should be ADVISORY, not RECOMMENDED. A hover count of 3 should not contribute toward the 3+ RECOMMENDED FAIL = REBUILD threshold.

### Recommendation: **DEFER INDEFINITELY**

The quality-to-complexity ratio is poor. The gap is real but the solution is wrong. Instead: add hover quality assessment to PA question assignments (zero gate infrastructure, 5 lines to pa-deployment.md). If hover remains a problem after 3+ builds with the PA question, reconsider a gate.

---

## SIG-03: GR-88 — BV Coverage Meta-Gate

### What It Does
Verify that all BV-01 through BV-08 results are present in the gate result set. Auto-fail if any BV gate was skipped.

### D7 Assessment: 3/5 — MODERATE VALUE, LOW COST

**Quality improvement:** The BV suite (8 gates) runs OUTSIDE GR-48's enforcement scope. GR-48 checks REQUIRED_GATES (20 GR-* gates) and RECOMMENDED_GATES (14 GR-* gates) but does not check BV gates. An orchestrator that calls `runPhase3Gates(page)` but skips `runBriefVerification(briefText)` will produce a GR-48 PASS. This is a real defense gap: BV-06 (anti-regression language scan) prevents pipeline regression and has zero backup.

**However:** The orchestrator is trusted code. It is not an adversarial agent. BV gates are called at specific execution steps that are procedurally mandated by the orchestrator protocol. The scenario where BV gates are "skipped" requires the orchestrator to deviate from its own documented procedure — which is possible (orchestrator agent error) but not likely given that BV gates are listed in the Quickstart procedure (MANIFEST.md lines 28-35).

**Complexity cost:** VERY LOW. This is a simple set-membership check on the existing `allResults` array. No Playwright needed. ~20 lines.

### Implementation Complexity
- **Lines of code:** ~20-25 (check that 'BV-01' through 'BV-08' exist in allResults)
- **Function:** Extend existing `runGateCoverage(allResults)` (GR-48) rather than creating a new function
- **Manifest changes:** 1 new entry if standalone; OR zero new entries if folded into GR-48

### Gate Count Impact
**Option A (standalone GR-88):** 56 -> 57 (1 slot used)
**Option B (fold into GR-48):** 56 -> 56 (0 slots used)

### Regression Risk: LOW
- The only false FAIL: if BV gates are intentionally skipped for a valid reason (e.g., brief is pre-validated). This can be handled by allowing `source: 'skip'` results to satisfy coverage.
- **Critical consideration:** BV-06 runs at pipeline STARTUP (before Phase 0). BV-07 runs pre-build. BV-08 runs post-build. These run at different execution steps than the main gate runner. The meta-gate must check for results from ALL phases, not just the Phase 3A results.

### Tier Recommendation: REQUIRED (fold into GR-48)

The cleanest implementation folds BV coverage into GR-48's existing logic. GR-48 already checks required and recommended gate coverage — adding BV coverage is a natural extension. This uses ZERO budget slots.

### Recommendation: **IMPLEMENT NOW** (as GR-48 extension, not standalone)

### Exact Spec

Modify `runGateCoverage(allResults)` in gate-runner-core.js:

```javascript
// Add to runGateCoverage function, after RECOMMENDED_GATES check:
const BV_GATES = ['BV-01', 'BV-02', 'BV-03', 'BV-04', 'BV-05', 'BV-06', 'BV-07', 'BV-08'];
const missingBV = BV_GATES.filter(id => !collectedGateIds.has(id));
const bvComplete = missingBV.length === 0;

// Update pass condition:
const pass = requiredComplete && recommendedSufficient && bvComplete;

// Add to measured output:
measured: {
  // ... existing fields ...
  bvPresent: BV_GATES.length - missingBV.length,
  bvTotal: BV_GATES.length,
  missingBV
}
```

**~15 lines added to existing function. Zero new gates. Zero budget slots consumed.**

---

## SIG-04: BV-09 — Pass A/B Composition Lock

### What It Does
Diff Pass A HTML output against Pass B HTML output. Flag changes to backgrounds, font-size, font-weight, layout structure (grid-template-columns), zone ordering, or border properties. These are the 8 prohibited modifications listed in artifact-builder-recipe-polish.md lines 255-263.

### D7 Assessment: 2/5 — MODERATE VALUE, HIGH COST

**Quality improvement:** The Pass B add-only constraint is real and currently honor-system. A rogue Pass B builder could restructure the entire page. However, in practice:
1. Pass B is a DIFFERENT Opus agent that receives an explicit recipe stating "ADD-ONLY" with 8 prohibited modifications listed
2. The orchestrator protocol (MANIFEST.md step 5c) specifies Pass B receives "Pass A HTML + Execution Brief + tokens.css + components.css + mechanism-catalog.md + value tables + Pass B Recipe"
3. Opus agents comply with explicit prohibitions at very high rates (the "binary rules achieve 100% compliance" finding from memory)
4. The actual N=1 live run showed zero Pass B violations

The gap is real but the risk is LOW given binary rule compliance.

**Complexity cost:** HIGH. This gate requires:
1. **Storing Pass A output** — the orchestrator must save the Pass A HTML before passing it to Pass B. Currently the pipeline does not save intermediate artifacts.
2. **Structural HTML diffing** — comparing two HTML files for specific property changes is non-trivial. Simple text diff catches reformatting as violations. Meaningful structural diff requires parsing both DOMs and comparing computed styles, which means either:
   - Running Playwright on BOTH Pass A and Pass B output (doubling screenshot/gate overhead for this one check), OR
   - Building an HTML parser that extracts backgrounds, font-sizes, grid structures from the source (not computed styles), which is fragile and incomplete
3. **Threshold calibration** — what counts as a "change"? If Pass B adds a `:hover` rule that coincidentally increases a border width on hover, is that a violation? The prohibition says "NO changing border-width" but `:hover` state changes are explicitly permitted.

### Implementation Complexity
- **Lines of code:** ~150-200 (HTML parsing, property extraction, diff logic, threshold handling for permitted operations)
- **Function:** `checkPassBCompositionLock(passAHtml, passBHtml)` — text parsing with significant edge cases
- **Manifest changes:** 1 entry, new BV tier, spec update
- **Orchestrator changes:** Must save Pass A output to disk before spawning Pass B builder (~5 lines)
- **Edge cases:** `:hover`/`:focus-visible`/`::selection`/`@media print`/`:first-child`/`:last-child`/`:nth-child` rules are PERMITTED modifications. The diff must whitelist these pseudo-class/pseudo-element selectors while flagging changes to base rules. This is where the implementation becomes fragile.

### Gate Count Impact
56 -> 57 (1 slot used, 3 remaining) — if implemented as standalone BV-09

### Regression Risk: HIGH
- **False FAILs from permitted operations:** Pass B adds `h3:hover { border-color: ... }`. This changes a border property inside a `:hover` pseudo-class, which is permitted. But a naive diff sees "border property changed" and FAILs.
- **False FAILs from reformatting:** If Pass B agent reformats whitespace or reorders CSS rules without changing computed values, a text-based diff flags violations.
- **False PASSes from computed-style evasion:** Pass B changes a CSS custom property value that INDIRECTLY changes backgrounds (e.g., changing `--zone-bg` which is used in `background: var(--zone-bg)`). A source-level diff misses this.

### Tier Recommendation: RECOMMENDED BV (if implemented)

### Recommendation: **DEFER INDEFINITELY**

The complexity-to-value ratio is the worst of all 6 proposals. ~200 lines of fragile code to defend against a scenario that binary rule compliance already prevents. The correct defense is simpler:
1. **Existing defense:** BV-08 (Brief-Output Diff) already compares brief spec against final output. If Pass B destroys the composition, BV-08 will surface the discrepancy.
2. **Better alternative:** GR-65 already exists as an orchestrator-procedural gate (gate-manifest.json "iteration" section) that checks "post-Pass-B structure preservation (section count, heading hierarchy, grid-template-columns vs Pass A output)." This is ALREADY SPECIFIED. If it is not enforced, enforce the existing gate rather than creating a new one.
3. **Cheapest defense:** Add a single line to GR-48/runGateCoverage checking that GR-65 was reported. Zero new code.

---

## SIG-05: GR-18 Promotion to REQUIRED

### What It Does
GR-18 (AP-09 Ghost Mechanisms) is currently RECOMMENDED. Promotion to REQUIRED means a single ghost mechanism = FAIL = REFINE verdict.

### D7 Assessment: 5/5 — ESSENTIAL, ZERO COST

**Quality improvement:** Ghost mechanisms (sub-perceptual CSS values) were THE dominant failure mode of the Flagship experiment. The Flagship produced CSS that was technically correct but perceptually invisible — letter-spacing at 0.001em, backgrounds differing by 1-8 RGB points, borders at 0.3px. GR-18 catches exactly this failure mode. It checks:
- Borders < 0.5px (sub-perceptual)
- Opacity < 0.1 (sub-perceptual)
- Letter-spacing < 0.025em relative to font-size (sub-perceptual, absorbed from GR-12)

Ghost mechanisms are the pipeline's PROVEN #1 quality failure. A gate that detects them should be on the critical path, not in the advisory recommendation pool.

**Complexity cost:** ZERO. GR-18 already exists with full implementation (gate-runner-core.js lines 1063-1093, ~30 lines). Promotion means:
1. Move 'GR-18' from RECOMMENDED_GATES to REQUIRED_GATES in the GR-48 coverage array
2. Update gate-manifest.json tier classification
3. Update gate-runner-spec.md tier column
4. Update verdict logic: GR-18 FAIL = REFINE (perception-class failure, not identity)

### Implementation Complexity
- **Lines of code:** 0 new code. ~5 lines changed (array moves + manifest update)
- **Function changes:** None — the gate function is unchanged
- **Manifest changes:** Move GR-18 from `tiers.recommended.gates` to `tiers.required.gates`, adjust counts (required: 21->22, recommended: 14->13)

### Gate Count Impact
56 -> 56 (0 slots used — tier reclassification, not new gate)

### Regression Risk: LOW-MODERATE
- **Current behavior:** GR-18 FAIL contributes to the 3+ RECOMMENDED FAIL = REBUILD threshold. A single GR-18 FAIL does nothing alone.
- **New behavior:** GR-18 FAIL = REFINE verdict (send back to builder for targeted CSS fix). This is the correct escalation — ghost mechanisms need CSS fixes, not full rebuilds.
- **False FAIL concern:** GR-18 currently checks ALL elements (`document.querySelectorAll('*')`). If a third-party font or browser default renders with a sub-perceptual border, the gate FAILs. In practice, with the three-font soul constraint (SC-05) and the component library, unexpected sub-perceptual properties are rare. The Gate checked for sub-perceptual borders, opacity, and letter-spacing — all intentional CSS properties, not browser defaults.
- **Mitigation:** The existing GR-18 implementation already excludes `0` values (only catches `> 0 && < threshold`). This means browser defaults of `0px` border do not trigger. The risk is a builder who deliberately writes `border: 0.3px solid #e0d5c5` — which is exactly what this gate should catch.

### Threshold Question

The synthesis asks: "Should the threshold stay the same or become stricter upon promotion?"

**Recommendation: Keep thresholds identical.** The current thresholds are correct:
- Border: < 0.5px is sub-perceptual (PROVEN)
- Opacity: < 0.1 is sub-perceptual (PROVEN)
- Letter-spacing: < 0.025em relative to font-size is sub-perceptual (PROVEN, 7 reports)

Promotion changes ESCALATION (what happens on FAIL), not DETECTION (what triggers FAIL). The detection thresholds are empirically validated and should not change.

### Recommendation: **IMPLEMENT NOW**

### Exact Spec

**gate-runner-core.js** — move GR-18 from RECOMMENDED_GATES to REQUIRED_GATES:
```javascript
// Line 1639-1645: Add 'GR-18' to REQUIRED_GATES
const REQUIRED_GATES = [
  'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-08', 'GR-09', 'GR-10',
  'GR-11', 'GR-13', 'GR-14', 'GR-15',
  'GR-18',  // PROMOTED from RECOMMENDED (SIG-05: ghost mechanisms = #1 failure mode)
  'GR-44', 'GR-60',
  'GR-61', 'GR-62',
  'GR-63', 'GR-64',
  'GR-79'
]; // 21 REQUIRED gates (not counting GR-48 itself)

// Line 1648-1653: Remove 'GR-18' from RECOMMENDED_GATES
const RECOMMENDED_GATES = [
  'GR-07', 'GR-17', 'GR-20',  // GR-18 removed (promoted)
  'GR-43', 'GR-45', 'GR-49', 'GR-51', 'GR-52',
  'GR-67',
  'GR-78', 'GR-80', 'GR-82', 'GR-83'
]; // 13 RECOMMENDED gates
```

**gate-manifest.json** — move GR-18 between tier arrays:
```json
"required": { "count": 22, "gates": [..., "GR-18", ...] }
"recommended": { "count": 13, "gates": [/* GR-18 removed */] }
```

**Verdict logic update:** GR-18 FAIL = REFINE (perception-class, not identity-class). Add to gate-runner-spec.md Section 2 verdict logic:
```
GR-18 FAIL = REFINE (ghost mechanism detected — builder CSS fix needed)
```

---

## SIG-11: GR-55 Promotion to RECOMMENDED with Perceptibility Thresholds

### What It Does
GR-55 (Multi-Coherence Channel Count) is currently ADVISORY. Promotion to RECOMMENDED, plus adding perceptibility thresholds so that sub-perceptual differences don't count as "channels."

Proposed thresholds: font-size diff >= 2px, letter-spacing diff >= 0.5px, padding diff >= 8px.

### D7 Assessment: 4/5 — HIGH VALUE, MODERATE COST

**Quality improvement:** Multi-coherence (multiple CSS properties changing simultaneously at zone boundaries) is the strongest quality predictor outside BV-08. The current GR-55 implementation (gate-runner-core.js lines 1540-1576) counts channel differences but uses ANY computed style difference — including sub-perceptual ones. A zone with font-size 16px vs 16.5px counts as a "font-size channel difference." This makes the gate gameable with minimal-effort CSS. Adding perceptibility thresholds closes this loophole.

**Cross-reference with existing thresholds:**
- The proposal says font-size diff >= 2px. The pipeline's perception calibration table (artifact-identity-perception.md Section 2.3) does not specify a font-size perceptibility floor, but typography combination tables (artifact-value-tables.md Section 3) show zone-to-zone font-size variation of 1-3px for body text. A 2px floor is reasonable.
- Letter-spacing diff >= 0.5px: The perception threshold (PT-02) says >= 0.025em floor. At 16px font-size, 0.025em = 0.4px. A 0.5px floor is slightly above the perception floor, which is correct for a "does this count as a real channel?" test.
- Padding diff >= 8px: The value tables (artifact-value-tables.md Section 2) use 8px as the minimum spacing token (`--space-2`). An 8px floor is consistent.

**Complexity cost:** MODERATE. The GR-55 function needs to be rewritten to add threshold checks for each channel. Currently it does simple equality comparison (`aStyle.fontSize !== bStyle.fontSize`). The new version must parse values, compute numeric differences, and apply per-channel thresholds. The function grows from ~30 lines to ~60 lines.

### Implementation Complexity
- **Lines of code:** ~30 additional lines (channel threshold logic)
- **Function changes:** Modify existing `runWave2Gates` GR-55 section
- **Manifest changes:** Move from `tiers.advisory.gates` to `tiers.recommended.gates`, adjust counts

### Gate Count Impact
56 -> 56 (0 slots used — tier reclassification, not new gate)

### Regression Risk: MODERATE
- **Current behavior:** GR-55 is ADVISORY (informational only). Any FAIL has zero impact on verdict.
- **New behavior:** GR-55 FAIL contributes to 3+ RECOMMENDED FAIL = REBUILD threshold.
- **False FAIL concern:** With perceptibility thresholds, a boundary that changes ONLY background color (1 channel) and padding (1 channel) = 2 channels < 3 minimum. This is a legitimate signal: a zone transition with only 2 perceptible channel changes is indeed weak multi-coherence. But for APPLIED mode pages, 2-channel transitions may be acceptable.
- **Mitigation:** The threshold is >= 3 channels, matching the current implementation. The change is making sub-perceptual channels not count, which INCREASES the failure rate (making the gate stricter). For APPLIED mode, the orchestrator could apply mode-aware threshold adjustment (>= 2 channels for APPLIED vs >= 3 for COMPOSED), but this adds complexity.

### Threshold Validation

| Channel | Proposed Threshold | Pipeline Precedent | Verdict |
|---------|-------------------|-------------------|---------|
| Background | Any difference (already has GR-11 >= 15 RGB) | PT-01: >= 15 RGB | CONSISTENT — GR-11 handles this |
| Font-family | Any difference | SC-05: 3 fonts | OK — font-family change is always perceptible |
| Font-size | >= 2px | Value tables: 1-3px per-zone variation | REASONABLE — on the conservative side |
| Letter-spacing | >= 0.5px | PT-02: >= 0.025em (~0.4px at 16px) | CONSISTENT — slightly above perception floor |
| Border | Any structural difference (presence vs absence) | SC-08: 4/3/1px hierarchy | OK — border changes are always visible |
| Padding | >= 8px | Value tables: 8px minimum token | CONSISTENT |

All proposed thresholds are consistent with or slightly above the pipeline's existing perception physics. No conflicts.

### Recommendation: **IMPLEMENT NOW**

### Exact Spec

Replace the GR-55 section in `runWave2Gates` (lines 1540-1576):

```javascript
// GR-55: Multi-Coherence Channel Count (B-06) — PROMOTED to RECOMMENDED
// Perceptibility thresholds added (SIG-11): sub-perceptual differences don't count
const multiCoherence = await page.evaluate(() => {
  function parseRGBLocal(str) {
    const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
    return null;
  }
  const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
  const boundaries = [];
  for (let i = 0; i < sections.length - 1; i++) {
    const aStyle = getComputedStyle(sections[i]);
    const bStyle = getComputedStyle(sections[i + 1]);
    let channels = 0;
    const channelDetails = {};

    // Background: use GR-11's 15 RGB threshold
    const aBg = parseRGBLocal(aStyle.backgroundColor);
    const bBg = parseRGBLocal(bStyle.backgroundColor);
    if (aBg && bBg) {
      const delta = Math.max(Math.abs(aBg.r-bBg.r), Math.abs(aBg.g-bBg.g), Math.abs(aBg.b-bBg.b));
      if (delta >= 15) { channels++; channelDetails.background = delta; }
    }

    // Font-family: any difference counts (always perceptible)
    if (aStyle.fontFamily !== bStyle.fontFamily) {
      channels++; channelDetails.fontFamily = true;
    }

    // Font-size: >= 2px difference
    const aFs = parseFloat(aStyle.fontSize);
    const bFs = parseFloat(bStyle.fontSize);
    if (Math.abs(aFs - bFs) >= 2) {
      channels++; channelDetails.fontSize = Math.abs(aFs - bFs).toFixed(1) + 'px';
    }

    // Letter-spacing: >= 0.5px difference
    const aLs = aStyle.letterSpacing === 'normal' ? 0 : parseFloat(aStyle.letterSpacing);
    const bLs = bStyle.letterSpacing === 'normal' ? 0 : parseFloat(bStyle.letterSpacing);
    if (Math.abs(aLs - bLs) >= 0.5) {
      channels++; channelDetails.letterSpacing = Math.abs(aLs - bLs).toFixed(1) + 'px';
    }

    // Border: structural difference (presence/absence or weight change)
    const aBorderW = parseFloat(aStyle.borderBottomWidth);
    const bBorderW = parseFloat(bStyle.borderTopWidth);
    if ((aBorderW > 0) !== (bBorderW > 0) || Math.abs(aBorderW - bBorderW) >= 1) {
      channels++; channelDetails.border = { a: aBorderW, b: bBorderW };
    }

    // Padding: >= 8px difference
    const aPad = parseFloat(aStyle.paddingBottom) + parseFloat(aStyle.paddingTop);
    const bPad = parseFloat(bStyle.paddingBottom) + parseFloat(bStyle.paddingTop);
    if (Math.abs(aPad - bPad) >= 8) {
      channels++; channelDetails.padding = Math.abs(aPad - bPad).toFixed(0) + 'px';
    }

    boundaries.push({
      from: sections[i].className || sections[i].tagName,
      to: sections[i + 1].className || sections[i + 1].tagName,
      channels, channelDetails,
      pass: channels >= 3
    });
  }
  return {
    boundaries,
    allPass: boundaries.every(b => b.pass),
    minChannels: boundaries.length > 0 ? Math.min(...boundaries.map(b => b.channels)) : 0,
    weakBoundaries: boundaries.filter(b => !b.pass).length
  };
});
results.push({
  gate: 'GR-55', name: 'Multi-Coherence Channel Count',
  status: multiCoherence.allPass ? 'PASS' : 'FAIL',
  source: 'code',
  measured: multiCoherence,
  threshold: {
    minChannelsPerBoundary: 3,
    perceptibilityThresholds: {
      background: '>= 15 RGB delta',
      fontFamily: 'any difference',
      fontSize: '>= 2px',
      letterSpacing: '>= 0.5px',
      border: 'structural change (presence/absence or >= 1px weight)',
      padding: '>= 8px total'
    }
  },
  evidence: 'OBSERVED'
});
```

**gate-manifest.json:** Move GR-55 from `tiers.advisory.gates` to `tiers.recommended.gates`:
```json
"advisory": { "count": 9, "gates": [/* GR-55 removed */] }
"recommended": { "count": 14, "gates": [..., "GR-55"] }
```

Note: With GR-18 promoted to REQUIRED (SIG-05), RECOMMENDED drops to 13. Adding GR-55 brings it back to 14. Net change: REQUIRED 21->22, RECOMMENDED stays 14 (GR-18 out, GR-55 in), ADVISORY 10->9.

---

## Budget Analysis

### If All 6 Implemented

| Proposal | New Gates | Budget Impact | Running Total |
|----------|-----------|---------------|---------------|
| SIG-01 (GR-84 IMPROVEMENTS) | +1 new | +1 slot | 57 |
| SIG-02 (GR-85 hover) | +1 new | +1 slot | 58 |
| SIG-03 (GR-88 BV meta) | +1 new OR +0 (fold into GR-48) | +0 or +1 | 58-59 |
| SIG-04 (BV-09 Pass A/B lock) | +1 new | +1 slot | 59-60 |
| SIG-05 (GR-18 promotion) | 0 new | 0 slots | 59-60 |
| SIG-11 (GR-55 promotion) | 0 new | 0 slots | 59-60 |

**Worst case:** 60 gates (exactly at budget ceiling, zero remaining)
**Best case (with GR-48 fold for SIG-03):** 59 gates (1 remaining)

All 6 = budget-maxing. This violates D7's spirit — zero headroom for future needs.

### What To Cut

If implementing all 6, cut SIG-02 (GR-85 hover) and SIG-04 (BV-09 Pass A/B lock):
- SIG-02: Wrong layer for the problem. Address via PA question instead.
- SIG-04: Existing defense (GR-65, binary rule compliance) is adequate. High implementation cost for low-probability scenario.

---

## Recommended Subset (Maximum Coverage, Minimum Complexity)

### Implement Now (3 changes, +1 new gate, 0 budget slots for promotions)

| Priority | Item | Type | Budget Impact | D7 Score |
|----------|------|------|---------------|----------|
| 1 | **SIG-05: GR-18 -> REQUIRED** | Tier promotion | 0 slots | 5/5 |
| 2 | **SIG-03: BV coverage -> GR-48 extension** | Fold into existing | 0 slots | 3/5 |
| 3 | **SIG-11: GR-55 -> RECOMMENDED + thresholds** | Tier promotion + rewrite | 0 slots | 4/5 |
| 4 | **SIG-01: GR-84 IMPROVEMENTS** | New gate (RECOMMENDED) | +1 slot | 4/5 |

**Result:** 57 gates (3 remaining slots). 2 tier promotions + 1 fold + 1 new gate. Net new code: ~140 lines (60-80 for GR-84, 30 for GR-55 rewrite, 15 for GR-48 BV extension, ~15 for manifest/spec updates).

### Implement Next Cycle (if data warrants)

| Item | Condition |
|------|-----------|
| SIG-02 (hover gate) | If 2+ builds show hover quality gaps that PA questions fail to catch |

### Defer Indefinitely

| Item | Reason |
|------|--------|
| SIG-04 (BV-09 Pass A/B lock) | High cost, low probability, existing defenses adequate (GR-65, binary compliance) |

---

## Overall D7 Health Assessment

### Before Proposed Changes
- **Gate count:** 56 / 60 budget (93.3%)
- **Design-to-impl ratio:** 20.9:1 (at threshold)
- **D7 status:** ADEQUATE

### After Recommended Subset
- **Gate count:** 57 / 60 budget (95.0%)
- **Lines added:** ~140 (well below the ~120/gate average because 3 of 4 changes are to existing code)
- **Net new functions:** 1 (`checkImprovementsComment`)
- **Design-to-impl ratio impact:** This analysis is ~850 lines of design for ~140 lines of implementation = 6:1 for this change set. Acceptable.

### Assessment: D7 REMAINS ADEQUATE

The recommended subset is D7-healthy because:
1. **2 of 4 changes are tier promotions** (zero new code, zero new gates, zero budget impact)
2. **1 is a fold into existing infrastructure** (zero new gates, zero budget impact)
3. **Only 1 is a genuinely new gate** (GR-84), justified by a process-logic gap (the "3+ HIGH -> REFINE" override is unenforceable without it)
4. **3 budget slots remain** for future needs (not zero as in the "all 6" scenario)

**Warning:** If SIG-02 and SIG-04 are implemented in a future cycle, the budget reaches 59 (1 remaining). At that point, sunset evaluation of existing gates becomes mandatory before adding anything else. Candidates for sunset review: GR-46 (print stylesheet — THEORETICAL evidence, never triggered FAIL in any build), GR-50 (conviction statement — THEORETICAL evidence, overlaps with GR-43 self-evaluation), GR-53 (density arc direction — THEORETICAL evidence, ADVISORY with explicit exceptions noted).

---

## Implementation Manifest

### Files Changed

| File | Change Type | Est. Lines |
|------|------------|------------|
| `gate-runner-core.js` | EDIT: GR-48 BV coverage (+15), GR-55 rewrite (+30), new checkImprovementsComment (+70) | +115 |
| `gate-manifest.json` | EDIT: tier reclassifications (GR-18 REQ, GR-55 REC), new GR-84 entry, count updates | +10 |
| `gate-runner-spec.md` | EDIT: GR-18 tier, GR-55 tier + thresholds, new GR-84 entry, verdict logic update | +25 |
| `MANIFEST.md` | EDIT: gate count update (56->57, tier breakdown) | +5 |

**Total: ~155 lines across 4 files. Zero new files.**

### Execution Order

1. GR-18 promotion (zero code change, manifest/spec only)
2. GR-48 BV coverage extension (15 lines, self-contained)
3. GR-55 rewrite with perceptibility thresholds (30 lines, replaces existing)
4. GR-84 new function + integration (70 lines + manifest/spec)
5. Verification: run gate-runner against existing Gas Town HTML to confirm no unexpected regressions

---

*Analysis complete. 6 proposals evaluated, 4 recommended for immediate implementation, 1 deferred with conditions, 1 deferred indefinitely. D7 remains ADEQUATE with the recommended subset.*
