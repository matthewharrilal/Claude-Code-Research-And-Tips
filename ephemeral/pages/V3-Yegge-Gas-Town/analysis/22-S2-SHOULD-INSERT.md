## SECTION 2: TIER 2 -- SHOULD

> 30 items. Implementation phases A-I (subtract first, then fix, then add).
> Items grouped by target file for implementation clarity.
> Each item includes: What/Where/How/Format rules/Anti-loss/Propagation/Pre-conditions/Post-verification/Budget.

---

### GROUP A: gate-runner-core.js (6 items)

---

#### SHOULD-01: Gate-Runner Subtraction Plan (PREREQUISITE) [ADV-07a]

- **What:** Remove or consolidate gates to free capacity BEFORE any gate additions. The adversarial review identifies this as THE most important prerequisite, completely absent from the master enrichment list. Without it, ME-003/014/040 cannot be safely added to gate-runner-core.js.

- **Where:**
  - `gate-runner-core.js` (multiple gate consolidations per File 14 surgery plan)

- **How:** This is implemented by the File 14 surgery plan sections GS-01A through GS-01D:
  - GS-01A: Consolidate GR-05+GR-07 = +32 freed
  - GS-01B: Remove GR-12, merge into GR-18 = +15 freed
  - GS-01C: Trim GR-21 verbose code = +8 freed
  - GS-01D: Trim GR-22 verbose code = +5 freed
  - **Total freed: 60 lines** (not 150 as adversarial estimated -- the 150 figure referenced GR-33-42 which use old SC-XX naming from a different gate system per buddy-adversarial finding 7A)

- **Format rules:** Subtraction. No new concepts, no new gates. Pure compression of existing code.

- **Anti-loss mechanisms:** M-19, M-13 -- all gate changes require coordinated multi-location updates. The File 14 surgery plan provides exact old->new diffs for each consolidation.

- **Propagation cascades:** Per File 14 satellite updates: GR-48 arrays, gate-manifest.json, gate-runner-spec.md, verdict summary arrays. All specified in GS-01A-sat1 through GS-04A-exact4.

- **Pre-conditions:** MUST be done BEFORE any gate additions (ME-003 GR-60, ME-014 GR-61, ME-040 GR-62). This is PHASE A -- nothing else starts until this completes.

- **Post-verification:** (1) gate-runner-core.js stays at 1,436 lines (net zero after additions consume freed space). (2) All GR-48 arrays match gate-manifest.json. (3) Verify by running gate-runner on test HTML.

- **Budget impact:** +60 freed lines (consumed by GR-60 addition and other gate changes). Net 0 for gate-runner-core.js per File 14.

- **In current 8-change plan?** NO (but it is the PREREQUISITE for the entire gate surgery)

- **Sources:** audit-05-08.md (ADV-07a), audit-14-17.md (File 14 sections GS-01A through GS-01D), 09-buddy-adversarial.md (finding 7A gate naming mismatch)

---

#### SHOULD-02: Split GR-05 (Warm Palette) into GR-05a/GR-05b by Opacity Threshold [ME-010]

- **What:** Split the single GR-05 warm palette gate into two sub-gates. GR-05a checks visible colors (opacity >= 0.3) and stays REQUIRED. GR-05b checks sub-perceptual colors (opacity < 0.3) and is downgraded to ADVISORY. Sub-perceptual tints at ~20 RGB points and 4% opacity currently cause REQUIRED failures for invisible color differences.

- **Where:**
  - `gate-runner-core.js` L234-277 (GR-05 function body)
  - `gate-runner-core.js` L1332 (REQUIRED_GATES array)
  - `gate-runner-core.js` L753 (identityGates filter)
  - `gate-manifest.json` L19-24 (required.gates, required.count)
  - `gate-manifest.json` L37-40 (advisory.gates, advisory.count)
  - `gate-manifest.json` L56 (verdictLogic.REBUILD)
  - `gate-manifest.json` L62-76 (executionOrder)
  - `gate-manifest.json` L140-147 (totalGateCount)
  - `gate-runner-spec.md` L69 (GR-05 row), L17-20 (categorization), L23 (total count), L149-151 (summary table), L180 (tier totals)
  - `MANIFEST.md` L98, L142, L245, L276
  - `EXECUTION-TRACKER-TEMPLATE.md` L158, L165
  - `artifact-orchestrator.md` verdict decision tree

- **How:** Per File 14 surgery plan (GS-01A), this is CONSOLIDATED with the GR-07 downgrade (ME-024, a COULD item) into a single merged function. The consolidated approach deletes GR-05 (L234-277, 43 lines) and GR-07 (L309-342, 33 lines) -- 76 lines total. Replaces with a single 44-line merged gate producing three result objects: GR-05a (visible cold, REQUIRED), GR-05b (sub-perceptual, ADVISORY), and GR-07 (pure B/W visible-text-only, RECOMMENDED). The new code uses a single `querySelectorAll('*').forEach`, `parseRGB` with alpha, `effectiveVisibility > 20` threshold for cold split, and `hasText` filter for pure B/W.

  **Old (L234-277, 43 lines):** Full GR-05 function checking all colors against isCold() heuristic as single REQUIRED gate

  **New (44 lines):** Merged function producing 3 result objects:
  ```
  // Single DOM pass: classify each color as visible-cold (GR-05a), sub-perceptual-cold (GR-05b), or pure-BW-text (GR-07)
  querySelectorAll('*').forEach(el => {
    const rgb = parseRGB(getComputedStyle(el).color);
    const alpha = parseAlpha(getComputedStyle(el).color);
    const vis = effectiveVisibility(alpha, rgb);
    if (vis > 20 && isCold(rgb)) { coldVisible.push({el, rgb}); }     // GR-05a
    else if (vis <= 20 && isCold(rgb)) { coldSub.push({el, rgb}); }    // GR-05b
    if (hasText(el) && isPureBW(rgb)) { pureBW.push({el, rgb}); }      // GR-07
  });
  results.push({gate:'GR-05a', status: coldVisible.length===0?'PASS':'FAIL', ...});
  results.push({gate:'GR-05b', status: coldSub.length===0?'PASS':'ADVISORY_FAIL', ...});
  results.push({gate:'GR-07', status: pureBW.length===0?'PASS':'RECOMMENDED_FAIL', ...});
  ```

  **Satellite updates (from File 17, REMOVAL 1 -- 22 edits across 8 files):**
  - GS-01A-sat1: Remove 'GR-07' from REQUIRED_GATES array (L1332). Keep 'GR-05' (now means GR-05a).
  - GS-01A-sat2: Add 'GR-07' to RECOMMENDED_GATES array (L1338).
  - GS-01A-sat3: gate-manifest.json -- move GR-07 from REQUIRED to RECOMMENDED, add GR-05b as ADVISORY. Update required.count (18->17 for GR-07 removal, but GR-05a replaces GR-05 = stays 17 here; combined with other changes = 16 final). advisory.count 5->6.
  - GS-01A-sat4: gate-runner-spec.md -- update GR-05 description (split), note GR-07 tier change, "visible-text-only" scope.
  - gate-manifest.json L56 verdictLogic.REBUILD: clarify GR-05a FAIL=REBUILD, GR-05b=informational
  - gate-manifest.json L62-76 executionOrder: replace "GR-05" with "GR-05a" in step 2; add "GR-05b" to step 3/4
  - gate-manifest.json L140-147 totalGateCount: inGateRunner 31->32, total 37->38, grandTotal 41->42
  - MANIFEST.md L98 Layer 6 count: 72->73
  - MANIFEST.md L142 gate runner description: 37->38
  - MANIFEST.md L245 routing: 37->38
  - MANIFEST.md L276 verdict logic: add "GR-05a FAIL=REBUILD. GR-05b is ADVISORY."
  - EXECUTION-TRACKER-TEMPLATE.md L158 Identity gates: 10->10 (GR-05a replaces GR-05)
  - EXECUTION-TRACKER-TEMPLATE.md L165 Total: 33->34 (advisory +1)
  - artifact-orchestrator.md verdict decision tree: clarify GR-05a is the identity gate

- **Format rules:** Binary gate result objects must maintain `{gate, name, status, measured, threshold}` schema (M-19). The opacity threshold (0.3) must be a hard-coded constant, not a judgment call.

- **Anti-loss mechanisms:** M-08 (Dual-Route Pattern) -- CAUTION: opacity pre-filter changes code path BEFORE isCold() heuristic. A bug in the opacity check silently bypasses the entire warm palette verification. M-13 (Binary Rules) -- coordinated 5-7 location update. M-19 (Programmatic Gate Verification) -- maintain function boundary structure.

- **Propagation cascades:** 22 edits across 8 files per File 17. ME-018 (gate perceptibility classification) must update GR-05 "MIXED" -> GR-05a "HUMAN-PERCEPTIBLE" + GR-05b "SUB-PERCEPTUAL" (Orphan Risk OR-1). The `isCold()` heuristic must be shared between GR-05a and GR-05b (Implicit Dependency ID-1).

- **Pre-conditions:** Must be implemented SIMULTANEOUSLY with GR-07 downgrade (ME-024) per File 14 consolidation plan. Cannot be done as standalone split without the merged function approach or you lose the line budget savings (+32 freed lines). Requires SHOULD-01 (subtraction) to complete first.

- **Post-verification:** (1) Run gate runner on known HTML with both visible cold colors and sub-perceptual cold tints -- GR-05a should FAIL on visible, GR-05b should ADVISORY_FAIL on sub-perceptual. (2) Verify GR-48 REQUIRED_GATES array matches gate-manifest.json required tier. (3) Verify EXECUTION-TRACKER identity gate count still correct.

- **Budget impact:** Combined with ME-024 (GR-07): 76 lines deleted, 44 lines added = +32 freed. This is the LARGEST single savings in the gate surgery plan.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-010 row in Tier 2 table), audit-14-17.md (GS-01A consolidation plan, File 17 REMOVAL 1), audit-01-04.md (V3E-022, FF-05)

---

#### SHOULD-03: Modify GR-06 to Check Rendered Font (Not Declared Stack) [ME-011]

- **What:** Change GR-06 font trinity gate from checking the declared CSS font-family stack to checking the actually-rendered font via `document.fonts.check()` after `document.fonts.ready`. Fallback-only violations (where the declared font never loads and a fallback renders instead) are downgraded to ADVISORY. Currently 181 violations are generated from fallback fonts that never display, all at REQUIRED severity.

- **Where:**
  - `gate-runner-core.js` GR-06 function body (~L280-308)
  - `gate-runner-spec.md` GR-06 row

- **How:**
  ```
  // Old: check font-family declaration string against trinity list
  const fontFamily = getComputedStyle(el).fontFamily;
  if (!isTrinityFont(fontFamily)) violations.push(...)

  // New: check rendered font, not declared stack
  await document.fonts.ready;
  const fontFamily = getComputedStyle(el).fontFamily;
  const rendered = document.fonts.check(`16px ${fontFamily.split(',')[0].trim()}`);
  if (!rendered) {
    // Font not loaded -- check if fallback is trinity
    const fallback = getActualRenderedFont(el); // Use canvas measurement
    if (!isTrinityFont(fallback)) {
      violations.push({...el, type: 'fallback-only', severity: 'ADVISORY'});
    }
  } else if (!isTrinityFont(fontFamily)) {
    violations.push({...el, type: 'declared-non-trinity', severity: 'REQUIRED'});
  }
  ```

- **Format rules:** Must ensure `document.fonts.ready` resolves before check. Binary result: fonts that actually render as non-trinity = REQUIRED FAIL; fonts declared but never rendered = ADVISORY.

- **Anti-loss mechanisms:** M-08 (Dual-Route Pattern) -- CAUTION: must ensure fonts.ready resolves before check, otherwise race condition. M-19 (Programmatic Gate) -- maintain result schema.

- **Propagation cascades:** gate-runner-spec.md GR-06 row description update. Minimal cascade -- GR-06 stays at REQUIRED tier, only the measurement method changes.

- **Pre-conditions:** Playwright must support `document.fonts.check()` and `document.fonts.ready`. Verify in test environment first. The `document.fonts.ready` check is CRITICAL -- without it, font loading state is indeterminate.

- **Post-verification:** (1) Create test HTML with Inter font loaded + Georgia fallback declared. GR-06 should PASS on Inter (loaded), ADVISORY on Georgia (fallback only). (2) Verify 181 V3 violations reduce to near-zero REQUIRED, some ADVISORY.

- **Budget impact:** ~15 net lines (estimated). Deferred from File 14 surgery plan ("Low priority, SIGNIFICANT rank 11").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-011 row), audit-01-04.md (V3E-023, FF-06), audit-14-17.md (deferred enrichments table)

---

#### SHOULD-04: Fix GR-14 Structural False Positives (Parent Scoping) [ME-012]

- **What:** Fix GR-14 (structural gap measurement) to restrict gap measurement to zone-level siblings only -- direct children of the same container. Currently measures gaps between nested sub-elements across zones, producing 13 false positives from nested HTML structure. Must preserve FIX-005's structural transition handling.

- **Where:**
  - `gate-runner-core.js` L627-678 (GR-14 function body), specifically L638 (query selector)

- **How:** Per File 14 surgery plan (GS-03B):
  ```
  // Old (L638): single query selecting all sections regardless of nesting
  const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');

  // New (4 lines): scoped to direct children of main container
  const container = document.querySelector('main, [role="main"], body');
  let sections = container.querySelectorAll(':scope > section, :scope > [class*="zone"], :scope > [class*="section"]');
  // Fallback: if scoped query yields < 2 sections, use original broad selector
  if (sections.length < 2) sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
  ```

- **Format rules:** Binary result. Gate measures gaps between direct sibling zones only. Nested elements within zones are not measured against adjacent zones. Fallback to original selector if scoping yields too few results prevents false negatives on pages with unusual structure.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: must preserve FIX-005's structural transition handling and maintain result object schema. The fallback ensures no false negatives.

- **Propagation cascades:** Minimal -- GR-14 stays at same tier, same result format. gate-runner-spec.md GR-14 description should note "zone-level siblings only."

- **Pre-conditions:** None beyond reading current GR-14 code to understand FIX-005 handling.

- **Post-verification:** (1) Run against V3 Gas Town HTML -- should produce 0 false positives (was 13). (2) Run against test HTML with 3 top-level zones and 5 nested sections within zones -- should measure 2 gaps (between zones), not 12 (between all sections).

- **Budget impact:** -2 consumed (1 line deleted, 4 added, net +3 but offset by GS line budget = -2 in File 14 accounting).

- **In current 8-change plan?** NO (but YES in File 14 surgery plan as GS-03B)

- **Sources:** audit-05-08.md (ME-012 row), audit-01-04.md (V3E-020, FF-02), audit-14-17.md (GS-03B)

---

#### SHOULD-05: Fix GR-09 Tolerance Band Implementation [ME-013]

- **What:** Verify and fix GR-09 border-width tolerance bands per FIX-003 specification. The spec says: primary 3.5-4.5px -> 4px, secondary 2.5-3.5px -> 3px, tertiary 0.5-1.5px -> 1px. Currently an integer-only check rejects valid subpixel renderings. Values like 0.667px and 2.667px FAIL when they should PASS (they are valid browser renderings of allowed widths).

- **Where:**
  - `gate-runner-core.js` GR-09 function body (exact line TBD -- must audit full code path)

- **How:**
  ```
  // Old: integer-only check
  if (borderWidth !== Math.round(borderWidth)) violations.push(...)

  // New: tolerance band check per FIX-003
  function isAllowedBorderWidth(measured) {
    const bands = [
      { target: 4, min: 3.5, max: 4.5 },
      { target: 3, min: 2.5, max: 3.5 },
      { target: 2, min: 1.5, max: 2.5 },
      { target: 1, min: 0.5, max: 1.5 }
    ];
    return bands.some(b => measured >= b.min && measured <= b.max);
  }
  // Remove or subordinate integer-only check
  ```

- **Format rules:** Binary. Measured border width within any tolerance band = PASS. Outside all bands = FAIL. The integer check should be REMOVED entirely or made subordinate to tolerance bands.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: must audit full GR-09 code path to find where integer-only check lives. M-13 (Binary Rules) -- tolerance bands are the binary rule; the integer check is a different (incorrect) binary rule.

- **Propagation cascades:** gate-runner-spec.md GR-09 description should note tolerance bands. Minimal cascade otherwise.

- **Pre-conditions:** Must READ current GR-09 implementation to locate exact integer-only check. The FIX-003 spec describes the intended behavior but implementation diverged. Requires testing.

- **Post-verification:** (1) Test with border-width values: 0.667px (PASS -- in 0.5-1.5 band), 2.667px (PASS -- in 2.5-3.5 band), 4.0px (PASS -- in 3.5-4.5 band), 6.0px (FAIL -- no band). (2) Compare V3 gate results: violations that were false positives should now PASS.

- **Budget impact:** ~5 net lines. Deferred from File 14 surgery plan ("Requires testing").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-013 row), audit-01-04.md (V3E-021, FF-01), audit-14-17.md (deferred enrichments table)

---

#### SHOULD-06: Add Invisible DOM Content Detection Gate GR-65 (RECOMMENDED) [GAP-10]

- **What:** Add RECOMMENDED gate checking for content-bearing elements with opacity: 0, visibility: hidden (but display not none), height: 0 with overflow hidden, or positioned off-screen (left < -9999px). Exclude skip-links and ARIA-hidden decorative elements. Flags content that exists in DOM but is invisible to users.

- **Where:**
  - `gate-runner-core.js` (new gate, ~40-50 lines)
  - `gate-manifest.json` (RECOMMENDED tier)
  - `gate-runner-spec.md` (new row)
  - GR-48 RECOMMENDED_GATES array
  - MANIFEST gate counts

- **How:** Per gap-check NEW-03:
  ```
  // GR-65: Invisible DOM Content
  const invisibles = [];
  document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,li,td,th,blockquote,figcaption').forEach(el => {
    const style = getComputedStyle(el);
    const text = el.textContent.trim();
    if (!text || text.length < 5) return; // Skip empty/trivial
    if (el.closest('.skip-link') || el.getAttribute('aria-hidden') === 'true') return;

    const isInvisible = (
      parseFloat(style.opacity) === 0 ||
      style.visibility === 'hidden' ||
      (parseFloat(style.height) === 0 && style.overflow === 'hidden') ||
      (parseInt(style.left) < -9000)
    );
    if (isInvisible) invisibles.push({tag: el.tagName, class: el.className, text: text.slice(0,50)});
  });
  results.push({gate: 'GR-65', name: 'Invisible DOM Content', status: invisibles.length > 0 ? 'FAIL' : 'PASS', measured: {invisibleElements: invisibles.length, samples: invisibles.slice(0,3)}, threshold: {max: 0}});
  ```

- **Format rules:** Binary. Any content-bearing invisible element = FAIL. Skip-links and ARIA-hidden excluded.

- **Anti-loss mechanisms:** M-19 -- maintain result schema. M-13 -- add to RECOMMENDED_GATES array. Gate-runner capacity must have room (requires prior subtraction).

- **Propagation cascades:** 6-location update for new gate.

- **Pre-conditions:** Gate-runner subtraction surgery (SHOULD-01) must be complete first. This is a FUTURE gate for the next round after the File 14 surgery.

- **Post-verification:** (1) Run against HTML with opacity:0 content -- should FAIL. (2) Run against HTML with skip-link -- skip-link should be excluded. (3) Verify result schema matches.

- **Budget impact:** ~40-50 lines in gate-runner-core.js. NOT within current surgery budget -- deferred to next round.

- **In current 8-change plan?** NO

- **Sources:** 18-gap-check.md (GAP-10), gate-usability-audit.md Section 4F

---

### GROUP B: gate-manifest.json + gate-runner-spec.md (1 item)

---

#### SHOULD-07: Add Gate Perceptibility Classification to Manifest [ME-018]

- **What:** Add HUMAN-PERCEPTIBLE / SUB-PERCEPTUAL / MIXED / N/A classification column to gate manifest for all gates. Add `reliability` field to gate result JSON.

- **Where:**
  - `gate-manifest.json` (add perceptibility field to each gate entry)
  - `gate-runner-spec.md` (add column to summary table)

- **How:**
  ```json
  // gate-manifest.json: add to each gate object
  "GR-05a": { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  "GR-05b": { "tier": "ADVISORY", "perceptibility": "SUB-PERCEPTUAL", ... },
  "GR-12":  { "tier": "RECOMMENDED", "perceptibility": "SUB-PERCEPTUAL", ... },
  "GR-14":  { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  "GR-60":  { "tier": "REQUIRED", "perceptibility": "HUMAN-PERCEPTIBLE", ... },
  // ... for all gates
  ```

  ```
  // gate result JSON: add reliability field
  results.push({
    gate: 'GR-XX',
    name: '...',
    status: 'PASS|FAIL',
    measured: {...},
    threshold: {...},
    reliability: 'HIGH|MEDIUM|LOW'  // NEW: based on gate's measurement confidence
  });
  ```

- **Format rules:** Metadata only -- does not change gate behavior. Classification values are from fixed enum, not judgment.

- **Anti-loss mechanisms:** SAFE (metadata only, no behavioral change). Must coordinate with SHOULD-02/ME-010 (GR-05 split -- update from "MIXED" to separate classifications per OR-1).

- **Propagation cascades:** gate-runner-spec.md summary table needs new column. MANIFEST.md may reference perceptibility in routing descriptions.

- **Pre-conditions:** Gate tier changes (SHOULD-02/ME-010, ME-024-027) should be finalized first so classifications are applied to the correct tier assignments.

- **Post-verification:** (1) Every gate in manifest has a perceptibility value. (2) No gate is unclassified. (3) Classification aligns with actual measurement (sub-perceptual gates like GR-12 marked as SUB-PERCEPTUAL).

- **Budget impact:** ~0 structural lines (metadata additions to existing JSON objects). In gate-runner-spec.md, ~1-2 lines for column header.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-018 row), audit-01-04.md (V3E-042), 11-buddy-fresh-eyes.md ("suspicious enrichment" -- "metadata for metadata's sake" unless paired with severity changes)

---

### GROUP C: pa-questions.md (8 items)

---

#### SHOULD-08: Add Experiential Detection Threshold Table + Aggregation Rules [ME-009]

- **What:** Add threshold table for experiential pass findings: >= 3/9 auditors flag same text = CONFIRMED illegibility (Fix #1). 1/9 = POSSIBLE (Weaver investigates). 0/9 = all text readable. Add pre-aggregated summary to Weaver inputs.

- **Where:**
  - `pa-questions.md` Appendix B (+7 lines for threshold table)
  - `pa-weaver.md` (reference to aggregation in Weaver input format)

- **How:** Per File 16 surgery plan (PE-03):

  **pa-questions.md Appendix B (add 7 lines after compression freeing 3 lines = net +4):**
  ```
  EXPERIENTIAL PASS AGGREGATION (Weaver use only):

  | Auditors Flagging Same Element | Classification | Weaver Action |
  |-------------------------------|----------------|---------------|
  | >= 3 of 9 | CONFIRMED illegibility | Weaver Fix #1, regardless of gate status |
  | 1-2 of 9 | POSSIBLE illegibility | Weaver investigates, may include in fixes |
  | 0 of 9 | No illegibility detected | No action required |
  ```

- **Format rules:** Table format for quick reference. Binary thresholds (3/9 is the bright line). WEAVER USE ONLY -- must NOT appear in auditor-visible sections per M-04/M-20.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: table is in Appendix B which is Weaver-only. Must verify Section 4 header "WEAVER USE ONLY" still present. M-20 (Fresh-Eyes) -- SAFE: no calibration data exposed to auditors.

- **Propagation cascades:** pa-weaver.md should reference this table in its experiential findings section.

- **Pre-conditions:** ME-001 (experiential pass) must be implemented first -- without it, there are no experiential findings to aggregate.

- **Post-verification:** (1) Table in Appendix B (Weaver-only section). (2) NOT in Sections 1-3 (auditor-visible). (3) No calibration data leaks.

- **Budget impact:** +4 lines (after -3 Appendix B compression).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-009 row), audit-01-04.md (V3E-005, V3E-015), audit-14-17.md (PE-03)

---

#### SHOULD-09: Add Navigation Usability PA Question PA-80 [ME-021]

- **What:** Add PA-80: "Starting from the middle of the page, can you reach any other section using visible navigation? If the page has TOC/nav, do links appear functional? Flag if page > 10 viewports long has no sticky nav, back-to-top, or section links."

- **Where:**
  - `pa-questions.md` Section 3.8 or new section (+3 lines)
  - `pa-deployment.md` L47/L53 Auditor E assignment (E goes 6->7)
  - `MANIFEST.md` L153 Auditor E question list + count
  - `pa-manifest.md` L30 Auditor E checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor E tracking
  - All totals that reference question count

- **How:** Per File 16 surgery plan (PA-N2):

  **pa-questions.md Section 3.8 (add 3 lines):**
  ```
  | PA-80 | Starting from the middle of the page, can you reach any other section using visible navigation? If TOC/nav exists, do links appear functional? Flag if page >10 viewport-heights long has no sticky nav, back-to-top, or section links. | E |
  ```

  **5-location update pattern:**
  1. pa-questions.md: add PA-80 row to Section 3.8
  2. pa-deployment.md: Auditor E assignment table -- add PA-80, count 6->7
  3. MANIFEST.md L153: Auditor E list -- add PA-80, count 6->7
  4. pa-manifest.md L30: Auditor E checklist -- add PA-80, count 6->7
  5. EXECUTION-TRACKER-TEMPLATE.md: Auditor E -- add PA-80, count 6->7

  **Total references to update:** Question total stays at 69 IF this is paired with a retirement (ME-037). If retirements already applied: 66 + PA-80 + PA-81 + PA-54 = 69.

- **Format rules:** Question text is experiential ("can you reach..."), not analytical. Binary outcome (yes/no navigation exists). Anti-skimming: specific threshold (>10 viewports).

- **Anti-loss mechanisms:** M-22 (9-Auditor Deployment) -- CAUTION: 5-location update required. M-04 (Context Isolation) -- verify question text contains no calibration data. M-20 (Fresh-Eyes) -- verify question is auditor-safe.

- **Propagation cascades:** All 5 locations listed above. Plus totals in pa-questions.md L306, pa-deployment.md L54, pa-weaver.md L18, pa-guardrails.md L15, pa-manifest.md L36, MANIFEST.md L159, EXECUTION-TRACKER-TEMPLATE.md total.

- **Pre-conditions:** ME-037 (retire 3 questions) should be applied FIRST to create room. If retirements bring total to 66, adding PA-80 + PA-81 + PA-54 = 69 (net zero).

- **Post-verification:** (1) Auditor E count = 7 in ALL 5 locations. (2) Total question count = 69 across all locations. (3) PA-80 text appears in pa-questions.md. (4) No calibration data in question text.

- **Budget impact:** +3 lines in pa-questions.md. 0 net structural lines in other files (value replacements only).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-021 row), audit-01-04.md (V3E-009), 11-buddy-fresh-eyes.md ("Key missing thing: make it a NAVIGABLE DOCUMENT"), 18-gap-check.md (step4-pa-epsilon.md, buddy-fresh-eyes.md)

---

#### SHOULD-10: Add Information Extraction PA Question PA-81 [ME-022 + GAP-08]

- **What:** Add PA-81: "For every chart, diagram, or infographic: (a) Can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds? (b) Does it have a legend/key if it uses symbols/colors? (c) Does the item count match surrounding text claims? (d) Are axis/data labels present and readable? Note whether the element is a raster image or HTML/SVG (raster = content production issue; HTML/CSS = styling issue)."

  NOTE: This MERGES ME-022 with GAP-08 (visual component completeness check) to avoid a separate question. GAP-08's sub-checks (b), (c), (d) are folded directly into PA-81.

- **Where:**
  - `pa-questions.md` Section 3.2 (+3 lines)
  - `pa-deployment.md` Auditor B assignment (B goes 7->8 after PA-06 retirement, net neutral)
  - `MANIFEST.md` L150 Auditor B question list + count
  - `pa-manifest.md` Auditor B checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor B tracking
  - All totals

- **How:** Per File 16 surgery plan (PA-N3), extended with GAP-08 sub-checks:

  **pa-questions.md Section 3.2 (add 3 lines):**
  ```
  | PA-81 | For every chart, diagram, or infographic: (a) Can you answer "What is the ONE thing this element wants me to know?" in <5 seconds? (b) Does it have a legend/key if it uses symbols/colors? (c) Does the item count match surrounding text claims? (d) Are axis/data labels present and readable? Note whether raster image or HTML/SVG (raster = content production issue; HTML/CSS = styling issue). | B |
  ```

  **5-location update:** Same pattern as SHOULD-09 but for Auditor B. After PA-06 retirement (ME-037), B goes 8->7. Adding PA-81 brings B back to 8. Net neutral.

- **Format rules:** Experiential question ("can you answer..."). Includes PE-006 image-vs-CSS distinction. 5-second threshold is concrete and binary.

- **Anti-loss mechanisms:** M-22 (9-Auditor) -- CAUTION: 5-location update. M-04 -- verify no calibration data. M-20 -- verify auditor-safe.

- **Propagation cascades:** Same 5-location + totals pattern as SHOULD-09.

- **Pre-conditions:** ME-037 (retire PA-06 from B) should be applied first to keep B at 8 questions.

- **Post-verification:** Same pattern as SHOULD-09 but for Auditor B count = 8. (1) PA-81 includes all 4 sub-checks (a-d). (2) Auditor B count = 8 in ALL 5 locations.

- **Budget impact:** +3 lines in pa-questions.md. 0 additional lines for GAP-08 (merged into same row).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-022 row), audit-01-04.md (V3E-010), PE-006 (image-vs-CSS distinction), 18-gap-check.md (GAP-08, GAP-09, experiential-pa-analysis.md "communicative failure", inattentional-blindness-audit.md "Settlement Map has no legend explaining marker meanings")

---

#### SHOULD-11: Add Content Promise vs Delivery PA Question PA-54 [ME-023]

- **What:** Add PA-54: "Does the page deliver on its structural promises? Count navigational elements (TOC entries, section numbers, tabs) that promise content. How many are fulfilled by visible content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION. Check whether collapsible summaries adequately preview their content."

- **Where:**
  - `pa-questions.md` Section 3.4 (Metaphor) (+3 lines)
  - `pa-deployment.md` Auditor G assignment (G goes 7->8)
  - `MANIFEST.md` L155 Auditor G question list + count
  - `pa-manifest.md` Auditor G checklist + count
  - `EXECUTION-TRACKER-TEMPLATE.md` Auditor G tracking
  - All totals

- **How:** Per File 16 surgery plan (PA-N1):

  **pa-questions.md Section 3.4 (add 3 lines):**
  ```
  | PA-54 | Does the page deliver on its structural promises? Count navigational elements (TOC entries, section numbers, tabs) that promise content. How many are fulfilled by visible content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION. Check whether collapsible summaries adequately preview their content. | G |
  ```

  **5-location update:** Same pattern as SHOULD-09 but for Auditor G. G goes 7->8.

- **Format rules:** Binary threshold (<80% = violation). Experiential ("Does the page deliver..."). The "Gas Town Settlement Map promises 12 sections, scroll delivers 3" example (PE-005) demonstrates the gap this catches.

- **Anti-loss mechanisms:** M-22 -- CAUTION: 5-location update. M-04 -- verify no calibration data.

- **Propagation cascades:** Same 5+totals pattern.

- **Pre-conditions:** ME-037 retirements should be applied first. No direct dependency but maintains question count balance.

- **Post-verification:** Same pattern as SHOULD-09 but for Auditor G count = 8.

- **Budget impact:** +3 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-023 row), audit-01-04.md (V3E-012), PE-005 ("Settlement Map promises 12 sections"), 18-gap-check.md (inattentional-blindness-audit.md "Content-promise mismatch")

---

#### SHOULD-12: Mark Pipeline-Introspection PA Questions [ME-032]

- **What:** Add annotation after PA-55, PA-56, PA-69: "Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings."

- **Where:**
  - `pa-questions.md` Section 3.7 (after PA-55, PA-56)
  - `pa-questions.md` Section 3.8 (after PA-69)

- **How:** Per File 16 surgery plan (PE-10):

  **Add after PA-55 and PA-56 in Section 3.7 (1 line each, 2 total):**
  ```
  > *Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings.*
  ```

  **Add after PA-69 in Section 3.8 (1 line):**
  ```
  > *Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings.*
  ```

- **Format rules:** Metadata annotation only. Does not change question text. Blockquote format distinguishes from question content.

- **Anti-loss mechanisms:** SAFE (metadata only). Fresh-eyes buddy (11) called this "over-engineering" -- "If the questions are bad, remove them. If they are good, keep them." Consider whether this adds value or just complexity.

- **Propagation cascades:** pa-weaver.md should reference the distinction when synthesizing findings.

- **Pre-conditions:** None.

- **Post-verification:** (1) Annotations appear only on PA-55, PA-56, PA-69. (2) Not on any other questions.

- **Budget impact:** +3 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-032 row), audit-01-04.md (V3E-013, N-09)

---

#### SHOULD-13: Add Void Question Deduplication Rule [ME-033]

- **What:** If PA-50 detects >= 3 consecutive blank viewports: PA-33 auto-answered as "DROPPED SIGNAL" and PA-51 auto-answered as "VOID-DOMINATED." Auditor C answers PA-50 in detail and references for collapsed questions. Saves ~30% of Auditor C time.

- **Where:**
  - `pa-questions.md` Section 3.6 (Void Prevention) (+4 lines)

- **How:** Per File 16 surgery plan (PE-07):

  **pa-questions.md Section 3.6 (add 4 lines):**
  ```
  VOID COLLAPSE RULE: If PA-50 detects >= 3 consecutive blank viewports at any
  viewport width, the following questions are auto-answered from PA-50's finding:
  - PA-33: "DROPPED SIGNAL" (the silence is not intentional)
  - PA-51: "VOID-DOMINATED" (page-level density is void-dominated)
  Auditor C answers PA-50 in detail and references these auto-answers.
  ```

- **Format rules:** Binary trigger (>= 3 blank viewports). Auto-answers are fixed strings, not judgment.

- **Anti-loss mechanisms:** SAFE. Orphan Risk OR-4 from File 17: if PA-09 is retired (ME-037), the original enrichment referenced PA-09 auto-answer. Since PA-09 IS retired, the Void Collapse Rule correctly references only PA-33 and PA-51 (not PA-09). Verify PA-09 is NOT referenced in this rule.

- **Propagation cascades:** None beyond the 4 lines in pa-questions.md.

- **Pre-conditions:** ME-037 (retire PA-09) must be applied BEFORE this rule to avoid orphan reference.

- **Post-verification:** (1) Rule references PA-50, PA-33, PA-51 only. (2) PA-09 NOT referenced (it is retired).

- **Budget impact:** +4 lines in pa-questions.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-033 row), PE-004, audit-14-17.md (PE-07, OR-4)

---

#### SHOULD-14: Add Footer/Header to PA-02 Scope [ME-035]

- **What:** Extend PA-02 contrast assessment scope to include header, footer, chart labels, and diagram text. Currently header/footer text may be excluded from contrast assessment.

- **Where:**
  - `pa-questions.md` Section 3.2 PA-02 row (in-cell text extension)

- **How:** Per File 16 surgery plan (PE-09):

  **pa-questions.md Section 3.2 PA-02 row (modify existing text):**
  ```
  // Old: "Is the text contrast comfortable for extended reading?"
  // New: "Is the text contrast comfortable for extended reading? (Include header, footer, chart labels, and diagram text in your assessment, not just body content.)"
  ```

- **Format rules:** In-cell modification only. No structural changes. Parenthetical addition.

- **Anti-loss mechanisms:** SAFE. In-cell text extension, 0 structural lines changed.

- **Propagation cascades:** None.

- **Pre-conditions:** None.

- **Post-verification:** (1) PA-02 text includes parenthetical. (2) No other PA-02 references broken.

- **Budget impact:** 0 structural lines (in-cell text extension).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-035 row), audit-14-17.md (PE-09)

---

#### SHOULD-15: Add Minimum Font Size Gate GR-61 (RECOMMENDED) [ME-014]

- **What:** Add new RECOMMENDED gate checking minimum font sizes. Body text >= 14px, caption/label >= 11px, absolute minimum >= 10px. SVG text checked separately. CRITICAL violations (below absolute minimum) FAIL. ~50 lines of Playwright JS.

- **Where:**
  - `gate-runner-core.js` (insert at end of perception gates section)
  - `gate-manifest.json` (add to RECOMMENDED tier)
  - `gate-runner-spec.md` (add row: Perception, RECOMMENDED, Post-build, Playwright)
  - `MANIFEST.md` gate counts
  - GR-48 RECOMMENDED_GATES array

- **How:**
  ```
  // GR-61: Minimum Font Size
  const textEls = document.querySelectorAll('p,span,a,li,h1,h2,h3,h4,h5,h6,td,th,label,figcaption,blockquote,cite,dt,dd,summary,caption');
  const violations = [];
  textEls.forEach(el => {
    if (!isRenderedElement(el)) return;
    const size = parseFloat(getComputedStyle(el).fontSize);
    const tag = el.tagName.toLowerCase();
    const isCaption = ['figcaption','caption','label','small','sub','sup'].includes(tag);
    const minSize = isCaption ? 11 : 14;
    const absMin = 10;
    if (size < absMin) violations.push({el: tag, class: el.className, size, threshold: absMin, severity: 'CRITICAL'});
    else if (size < minSize) violations.push({el: tag, class: el.className, size, threshold: minSize, severity: 'WARNING'});
  });
  // SVG text
  document.querySelectorAll('text, tspan').forEach(el => {
    const size = parseFloat(getComputedStyle(el).fontSize || el.getAttribute('font-size') || '16');
    if (size < 10) violations.push({el: 'svg-text', size, threshold: 10, severity: 'CRITICAL'});
  });
  results.push({gate: 'GR-61', name: 'Minimum Font Size', status: violations.some(v => v.severity==='CRITICAL') ? 'FAIL' : 'PASS', measured: {total: textEls.length, violations: violations.length, details: violations.slice(0,5)}, threshold: {body: '14px', caption: '11px', absolute: '10px'}});
  ```

- **Format rules:** Binary. CRITICAL (below absolute min) = FAIL. WARNING (below category min) = PASS with advisory note. Uses `isRenderedElement()` helper per M-19.

- **Anti-loss mechanisms:** M-19 (Programmatic Gate) -- CAUTION: 6-location update required (gate-runner-core.js, gate-manifest.json, gate-runner-spec.md, GR-48 arrays, MANIFEST counts, EXECUTION-TRACKER). M-13 (Binary Rules) -- add to RECOMMENDED_GATES array.

- **Propagation cascades:** Same 6-location pattern as any new gate addition. If implemented with ME-003 (GR-60) and ME-040 (GR-62), combined = ~180 lines on zero-budget artifact (ADV-05b warning). Gate-runner subtraction MUST happen first.

- **Pre-conditions:** Gate-runner-core.js must have capacity (need subtraction from SHOULD-01/GS-01A/01B/01C/01D first -- those free 60 lines, GR-61 consumes 50). CANNOT be implemented before the consolidation surgery.

- **Post-verification:** (1) Run against V3 HTML -- chart labels at 7.5px should FAIL (CRITICAL). (2) Body text at 16px should PASS. (3) SVG text elements checked separately.

- **Budget impact:** -50 consumed. Deferred from File 14 surgery plan ("Would push +50 over budget. RECOMMENDED for next round.").

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-014 row), audit-01-04.md (V3E-017), audit-14-17.md (deferred enrichments), 18-gap-check.md (gate-usability-audit Section 4B)

---

### GROUP D: pa-deployment.md (2 items)

---

#### SHOULD-16: Add Data Corruption Escalation Protocol for PA Auditors [ME-015]

- **What:** 4 sub-changes: (1) Data quality awareness note in deployment preamble, (2) BLOCKED BY DEFECT scoring option -- if >50% content invisible, auditors answer "BLOCKED BY DEFECT -- [defect name]" instead of YES/NO/CONDITIONAL, (3) First-Auditor Halt protocol -- Auditor A checks for catastrophic rendering defects during cold-look; if >50% invisible, orchestrator re-captures before B-I proceed, (4) Full-page as ground truth -- explicit guidance that full-page screenshot is GROUND TRUTH; cross-reference scroll-throughs against it.

- **Where:**
  - `pa-questions.md` Section 1 preamble (+4 lines for BLOCKED BY DEFECT)
  - `pa-deployment.md` Section 2.4 (+6 lines for First-Auditor Halt + Ground Truth)

- **How:** Per File 16 surgery plan (PE-04):

  **pa-questions.md Section 1 preamble (add 4 lines):**
  ```
  BLOCKED BY DEFECT PROTOCOL: If >50% of page content is invisible due to rendering
  defects, screenshot corruption, or animation-gated visibility, answer "BLOCKED BY
  DEFECT -- [defect description]" instead of YES/NO/CONDITIONAL. Do not attempt to
  score questions about content you cannot see. The Weaver tallies BLOCKED questions separately.
  ```

  **pa-deployment.md Section 2.4 (append 6 lines):**
  ```
  FIRST-AUDITOR HALT: Auditor A (impression specialist) checks for catastrophic rendering
  defects during their cold-look pass. If A reports >50% content invisible or >3 consecutive
  blank viewports, orchestrator HALTS deployment of B through I, re-captures screenshots with
  expanded CSS overrides, and validates before resuming.

  GROUND TRUTH: The full-page screenshot (non-scrolling capture) is the GROUND TRUTH for
  page content. If scroll-through screenshots show blanks that the full-page does not, the
  scroll-through is UNRELIABLE. Auditors should cross-reference the full-page screenshot
  when they encounter suspicious blanks.
  ```

- **Format rules:** BLOCKED BY DEFECT is a binary scoring option (not a judgment). First-Auditor Halt is a binary protocol (>50% invisible = halt, otherwise proceed). Anti-skimming: these are instructions to auditors, must be clear and imperative.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: ensure no calibration data leaks to auditors. The BLOCKED BY DEFECT protocol and Ground Truth guidance are auditor-appropriate (they describe what to DO, not what scores to AIM FOR). M-20 (Fresh-Eyes) -- SAFE: no build intent or threshold targets exposed.

- **Propagation cascades:**
  - pa-weaver.md must be updated to recognize BLOCKED BY DEFECT tallies (section on how Weaver handles blocked questions)
  - MANIFEST.md Phase 3B description should reference BLOCKED BY DEFECT protocol
  - MANIFEST.md Phase 3B->3C handoff should note BLOCKED question tallying
  - EXECUTION-TRACKER-TEMPLATE.md: add "First-Auditor Halt triggered: [ ] YES / [ ] NO"

- **Pre-conditions:** ME-006 (screenshot validation gate) should be implemented first -- the First-Auditor Halt is a BACKUP for when ME-006's validation misses something. If ME-006 works perfectly, the Halt rarely triggers.

- **Post-verification:** (1) Verify BLOCKED BY DEFECT text appears in auditor-visible Section 1, NOT in Weaver-only Section 4. (2) Verify no threshold targets or calibration data in the added text. (3) Verify First-Auditor Halt references Auditor A specifically (PE-012 nuance).

- **Budget impact:** +10 lines across 2 files (+4 in pa-questions.md, +6 in pa-deployment.md). Within File 16 budget after compressions (-5 from pa-questions.md Section 4 compression offsets the +4, -2 from pa-deployment.md 1.2.1 compression partially offsets the +6). Net: +5 after compressions.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-015 row), audit-01-04.md (V3E-004), audit-14-17.md (PE-04 in File 16), HE-006, PE-003, PE-012, PE-013

---

#### SHOULD-17: Add Defect-Bypass for H's Cross-Viewport Protocol [ME-034]

- **What:** If a defect is identical across all viewports, Auditor H states it ONCE and redirects analysis to viewport-specific differences in non-defective content. Prevents H from saying "PUNISHED" 3 times for the same viewport-independent defect.

- **Where:**
  - `pa-deployment.md` Section 1.2.1 (append 3 lines)

- **How:** Per File 16 surgery plan (PE-08):

  **pa-deployment.md Section 1.2.1 (append after compression, +1 net):**
  ```
  DEFECT UNIFORMITY: If a defect is identical across all viewports (same cause, same
  appearance), state the defect ONCE and redirect remaining analysis to viewport-specific
  differences in the NON-DEFECTIVE content.
  ```

- **Format rules:** Binary trigger (defect identical across viewports = yes/no). Imperative instruction.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** None.

- **Pre-conditions:** None.

- **Post-verification:** (1) Instruction in Section 1.2.1. (2) Does not contradict existing cross-viewport protocol.

- **Budget impact:** +1 net line (after -2 compression of 1.2.1 method paragraph).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-034 row), PE-007, audit-14-17.md (PE-08)

---

### GROUP E: pa-weaver.md (3 items)

---

#### SHOULD-18: PA-05 Score as Range, Not Single Number [ME-019]

- **What:** Weaver presents PA-05 as a range (lower=conservative, upper=corrected). PARTIAL scores count 0.5 not 1.0. Round DOWN. Include hypothetical score for BLOCKING defects. This addresses the fact that "3/4" is presented as precise when it is actually 2.5-3.0.

- **Where:**
  - `pa-weaver.md` Section 1 (+8 lines for range + hypothetical scoring)

- **How:** Per File 16 surgery plan (PE-05):

  **pa-weaver.md Section 1 (add 8 lines):**
  ```
  PA-05 SCORING PROTOCOL:
  Present PA-05 as a RANGE, not a single number.
  - Lower bound: conservative score (count PARTIAL as 0, round DOWN)
  - Upper bound: corrected score (count PARTIAL as 1, void-corrected if applicable)
  - If BLOCKING defect exists: include hypothetical score "(if [defect] fixed: X/4)"
  - Tier 5 questions: PARTIAL counts as 0.5 (not 0 or 1)

  Example: "PA-05: 2.5-3.0/4 (if chart legibility fixed: 3.0-3.5/4)"

  The range communicates UNCERTAINTY. A single number implies precision that does not exist.
  ```

  **Compression offset:** pa-weaver.md Section 4.2-4.4 emotional arc source citations compressed from ~65 lines to ~57 lines (-8 lines), making PE-05 net 0.

- **Format rules:** Binary scoring within the range (each PA-05 sub-criterion is PASS/PARTIAL/FAIL). The range itself is a presentation format, not a judgment call. Anti-skimming: example provided.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: range scoring is Weaver-only content, NOT exposed to auditors. M-20 (Fresh-Eyes) -- SAFE: no tier targets or calibration data exposed.

- **Propagation cascades:**
  - ADV-05d warning: PA-05 used as discrete number throughout project. If it becomes a range, tier classifications that use PA-05 thresholds (e.g., "PA-05 >= 3.5 AND Tier 5 >= 6/8" for Flagship) need to specify which end of the range to use.
  - pa-questions.md Section 1 (PA-05 definition) should note that Weaver presents as range
  - MANIFEST.md L159 or wherever PA-05 thresholds appear

- **Pre-conditions:** Auditor A must generate the raw PA-05 sub-scores. PE-010 (from File 08) suggests the hypothetical should be generated by AUDITOR A, not just presented by Weaver. Both auditor-side and weaver-side instructions needed.

- **Post-verification:** (1) Verify range scoring in Weaver-only content (NOT in auditor prompts). (2) Verify PARTIAL = 0.5 for Tier 5 questions. (3) Verify hypothetical format used for BLOCKING defects.

- **Budget impact:** +8 lines in pa-weaver.md, offset by -8 compression = 0 net.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-019 row), audit-01-04.md (V3E-015 partial), HE-001 (priming mechanism), HE-011 (Tier 5 inflation), PE-010 (auditor-side hypothetical)

---

#### SHOULD-19: Define PA-05 Range + Tier System Mapping [ADV-05d]

- **What:** If PA-05 becomes a range (per SHOULD-18/ME-019), define how ranges map to discrete tiers. When PA-05 is "2.5-3.0/4", which tier is it? The range straddles MIDDLE (2.0-2.9) and CEILING (3.0-3.9) boundaries.

- **Where:**
  - `pa-weaver.md` (append to SHOULD-18/ME-019 range scoring section)

- **How:**
  ```
  RANGE-TO-TIER MAPPING: When PA-05 is a range that straddles tier boundaries:
  - Use LOWER bound for tier classification (conservative)
  - Example: PA-05 2.5-3.0 = MIDDLE tier (lower bound 2.5 = MIDDLE)
  - Note the range in tier statement: "MIDDLE (trending CEILING)"
  ```

- **Format rules:** Binary. Lower bound determines tier. No judgment.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** Any downstream system using PA-05 as discrete number.

- **Pre-conditions:** SHOULD-18 (ME-019: PA-05 as range) must be defined first.

- **Post-verification:** (1) Mapping rule present. (2) Uses lower bound.

- **Budget impact:** +3 lines in pa-weaver.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-05d)

---

#### SHOULD-20: Weaver Emotional Arc Fix Mapping [ME-057]

- **What:** After Weaver's emotional arc synthesis, check if any Top-5 fix improves the weakest register. If yes, rank higher. If no corresponding fix exists, add COMPOSITIONAL note as potential Fix #6.

- **Where:**
  - `pa-weaver.md` Section 4.3 (append 3 lines)

- **How:** Per File 16 surgery plan (PE-11):

  **pa-weaver.md Section 4.3 (append 3 lines):**
  ```
  ARC-FIX MAPPING: After synthesizing the emotional arc (register scores), check:
  Does any Top-5 fix improve the WEAKEST register? If yes, promote that fix.
  If no fix addresses the weakest register, add a COMPOSITIONAL note recommending
  what type of change would strengthen it (e.g., "Add surprise element in bottom half").
  ```

- **Format rules:** Recipe format. "Check" and "promote" are recipe verbs. The compositional note is advisory, not a mandate.

- **Anti-loss mechanisms:** SAFE. Weaver-only content. Fresh-eyes buddy (11) called this "scope creep" -- the Weaver already has a complex job. Consider whether this adds signal or noise.

- **Propagation cascades:** None.

- **Pre-conditions:** None -- enhancement to existing Weaver section.

- **Post-verification:** (1) Text in Weaver-only Section 4.3. (2) NOT in auditor-visible content.

- **Budget impact:** +3 lines in pa-weaver.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-057 row), HE-015 (emotional arc disconnected from fix priorities), audit-14-17.md (PE-11)

---

### GROUP F: MANIFEST.md (4 items)

---

#### SHOULD-21: Add Phase 4: Fix Application Protocol [ME-017]

- **What:** Add Phase 4 to pipeline: after Weaver verdict, orchestrator applies MECHANICAL fixes only (CSS value changes, font-stack cleanup, html color). Re-runs failed gates to verify. Updates verdict. Budget: <=15 min, <=50 CSS lines changed. This addresses the fact that SHIP WITH FIXES is a verdict the pipeline cannot currently execute -- fixes are identified but never applied.

- **Where:**
  - `MANIFEST.md` L521-523 (insert after Phase 3C verdict, before "Per-Agent Output Logging")
  - `MANIFEST.md` L605 (update circuit breaker: "1 REBUILD + 1 REFINE" -> "1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix")
  - `MANIFEST.md` Section 5 dependency graph (add Phase 4 node)
  - `EXECUTION-TRACKER-TEMPLATE.md` (add Phase 4 tracking fields)

- **How:** Per File 15 surgery plan (MS-03):

  **Insert after L521 (12 lines):**
  ```
  ### Phase 4: Mechanical Fix Application (CONDITIONAL)

  TRIGGER: Verdict is SHIP WITH FIXES AND all identified fixes are MECHANICAL
  (CSS value changes only, no HTML structural changes, no design decisions).

  STEPS:
  1. Apply each MECHANICAL fix from Weaver's Top-N list (CSS changes only)
  2. Re-run ONLY the gates that originally FAILED on the changed properties
  3. If all re-run gates now PASS: upgrade verdict to SHIP
  4. If any re-run gate still FAILS: retain SHIP WITH FIXES, document remaining

  BUDGET: Maximum 15 minutes, maximum 50 CSS lines changed.
  Do NOT apply fixes requiring HTML restructuring or design judgment.
  ```

  **Replace L605 circuit breaker (0 net lines):**
  ```
  // Old: "Maximum iterations: 1 REBUILD + 1 REFINE"
  // New: "Maximum iterations: 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix"
  ```

- **Format rules:** Phase 4 trigger is binary (all fixes MECHANICAL = yes/no). Budget is concrete (15 min, 50 lines). Anti-skimming: numbered steps, bold trigger condition.

- **Anti-loss mechanisms:** M-23 (REBUILD Not FIX) -- CAUTION: adds a THIRD iteration type to a pipeline that already has REBUILD and REFINE. Must update circuit breaker at L605. The adversarial review (ADV-04, ADV-06d) rates this as RISK and recommends "run as experiment first." ME-005 (MECHANICAL verdict) is a dependency -- Phase 4 only triggers for MECHANICAL fixes, which ME-005 defines.

- **Propagation cascades:**
  - EXECUTION-TRACKER-TEMPLATE.md: add Phase 4 tracking section
  - MANIFEST.md Section 5 dependency graph: add Phase 4 node after Phase 3C
  - artifact-orchestrator.md: update to reference Phase 4 as post-verdict option
  - Coordinate with ME-005: Phase 4 uses ME-005's MECHANICAL classification

- **Pre-conditions:** ME-005 (MECHANICAL verdict exception) must be implemented first -- Phase 4's trigger depends on the MECHANICAL classification that ME-005 introduces. Without ME-005, there is no definition of "MECHANICAL fix."

- **Post-verification:** (1) Verify circuit breaker at L605 updated. (2) Verify Phase 4 in EXECUTION-TRACKER. (3) Verify Phase 4 appears in MANIFEST dependency graph. (4) Verify Phase 4 does NOT apply HTML changes (only CSS).

- **Budget impact:** +12 lines in MANIFEST.md + 0 (L605 replacement). Within File 15's +20 budget.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-017 row), audit-01-04.md (V3E-031, N-12), audit-14-17.md (MS-03 in File 15), HE-010, ADV-06d (recommends CONSIDER rank)

---

#### SHOULD-22: Update MANIFEST Line Counts [ME-042]

- **What:** Update MANIFEST.md line counts to actual values. components.css count from 290 to actual (~1,195). Add pre-flight validation (+/-20%). Update runtime estimate from 80-105 min to 80-180 min. Update complexity table actuals (L346-356).

- **Where:**
  - `MANIFEST.md` L15 (components.css line count)
  - `MANIFEST.md` L67 (runtime estimate)
  - `MANIFEST.md` L346-356 (complexity table)
  - `MANIFEST.md` L921 (components.css path entry)

- **How:** Per File 15 surgery plan (MS-04):
  ```
  // L15: verify and update components.css line count
  // L67: "80-105 minutes" -> "80-180 minutes"
  // L346-356: update each row with actual line counts from current files
  // L921: verify components.css path is correct
  // L14: add pre-flight parenthetical: "(verify within +/-20% before build)"
  ```
  All cell/value changes, zero new lines.

- **Format rules:** In-place value replacements only. No structural changes.

- **Anti-loss mechanisms:** M-25 (Honest Complexity Accounting) -- SAFE: this IS the mechanism that M-25 protects.

- **Propagation cascades:** artifact-orchestrator.md L147-157 has a copy of the complexity table that must stay synchronized.

- **Pre-conditions:** Count actual file sizes at implementation time (they may have changed since analysis).

- **Post-verification:** (1) Line counts match actual file sizes within +/-20%. (2) Runtime estimate reflects real-world experience (3-6 hours per ME-045).

- **Budget impact:** 0 net lines (value replacements).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-042 row), HE-017 (4x discrepancy flagged then dropped), audit-14-17.md (MS-04)

---

#### SHOULD-23: Add Context Budget Awareness [ME-045]

- **What:** Add note that pipeline typically requires 2-3 sessions due to context exhaustion. Plan session boundaries between Phase 2 (build) and Phase 3A (gates). Update time estimates.

- **Where:**
  - `MANIFEST.md` L67-68 (after architecture section)

- **How:** Per File 15 surgery plan (MS-05):

  **Insert after L67 (2 lines):**
  ```
  Context sessions: Typically 2-3 sessions due to context exhaustion. Plan session
  boundaries between Phase 2 (build) and Phase 3A (gates). Save all state to files
  before each boundary.
  ```

- **Format rules:** Informational note. No judgment required.

- **Anti-loss mechanisms:** SAFE.

- **Propagation cascades:** Coordinates with SHOULD-22 (ME-042) runtime update.

- **Pre-conditions:** SHOULD-22 (ME-042, line count updates) should be applied simultaneously.

- **Post-verification:** (1) Note appears in architecture section. (2) Runtime estimates updated per SHOULD-22.

- **Budget impact:** +2 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-045 row), HE-014 (context exhaustion is "the norm"), audit-14-17.md (MS-05)

---

#### SHOULD-24: Add Corrected Screenshot Recovery Protocol [ME-046]

- **What:** If re-capture needed, corrected screenshots MUST cover entire page at regular intervals (every 900px scroll height), not selected regions. Correction must be algorithmic, not curated.

- **Where:**
  - `MANIFEST.md` L476 (after "Output: Complete screenshot set...")

- **How:** Per File 15 surgery plan (MS-06):

  **Insert after L476 (3 lines):**
  ```
  CORRECTED SCREENSHOT PROTOCOL: If re-capture is needed, corrected screenshots MUST
  cover the ENTIRE page at regular intervals (every 900px of scroll height), not
  orchestrator-selected regions. Correction must be ALGORITHMIC, not CURATED, to prevent
  bias toward best-looking regions.
  ```

- **Format rules:** Binary protocol. Algorithmic (every 900px) vs curated (selected regions) is a binary distinction.

- **Anti-loss mechanisms:** SAFE. Addresses HE-018 bias mechanism: "orchestrator selected which regions to capture, meaning the Weaver saw orchestrator-curated content."

- **Propagation cascades:** artifact-orchestrator.md screenshot protocol section should reference this.

- **Pre-conditions:** ME-006 (screenshot validation gate) should be in place first.

- **Post-verification:** (1) Protocol specifies algorithmic intervals. (2) No "selected regions" language remains.

- **Budget impact:** +3 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-046 row), HE-018 (bias mechanism), audit-14-17.md (MS-06)

---

### GROUP G: MANIFEST.md verdict logic (1 item)

---

#### SHOULD-25: Define MECHANICAL + Circuit Breaker Interaction [ADV-05c]

- **What:** When ME-005 (MECHANICAL verdict exception) and ME-008 (usability circuit breaker) coexist, define behavior. What happens when a fix is classified MECHANICAL by ME-005 but a usability circuit breaker (ME-008) says "Fix #1"? The interaction is currently undefined, creating a combinatorial explosion of verdict states.

- **Where:**
  - `MANIFEST.md` verdict logic section (L275-285 or Phase 3C L505-512)

- **How:**
  ```
  INTERACTION RULE: If a finding is both MECHANICAL (per ME-005 classification) AND
  flagged BLOCKING-USABILITY (per circuit breaker), the USABILITY classification takes
  priority. Usability always outranks mechanical classification. The fix is treated as
  BLOCKING-USABILITY Fix #1, even though its implementation is mechanical.
  ```

- **Format rules:** Binary rule. Usability > mechanical is the priority order. No judgment required.

- **Anti-loss mechanisms:** M-23 (REBUILD Not FIX) -- CAUTION: modifies verdict logic.

- **Propagation cascades:** gate-manifest.json verdictLogic, artifact-orchestrator.md verdict decision tree.

- **Pre-conditions:** ME-005 and ME-008 must both be defined first.

- **Post-verification:** (1) Interaction rule present. (2) No contradictory verdict states possible.

- **Budget impact:** +2-3 lines in MANIFEST.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-05c)

---

### GROUP H: artifact-orchestrator.md (1 item)

---

#### SHOULD-26: Add Orchestrator Decision Quality Self-Assessment [ME-020]

- **What:** Add Section B to orchestrator self-assessment: evidence for/against each judgment call, independent verification check, mode retrospective ("Was COMPOSED mode correct?"), components.css line count pre-flight validation.

- **Where:**
  - `artifact-orchestrator.md` (append to self-assessment section)

- **How:**
  ```
  DECISION QUALITY SELF-ASSESSMENT (Section B):
  Before submitting your verdict, answer these 4 questions:
  1. EVIDENCE: For each judgment call (mode selection, verdict, protocol overrides),
     what is the EVIDENCE for your decision? What evidence AGAINST did you consider?
  2. INDEPENDENT VERIFICATION: Did you verify your verdict against gate results
     independently, or did you adopt the Weaver's framing?
  3. MODE RETROSPECTIVE: Was the mode you selected in Phase 0 confirmed by the
     Weaver's tier assessment? If not, document the discrepancy.
  4. PRE-FLIGHT: Is components.css within +/- 20% of MANIFEST's stated line count?
     If not, investigate before proceeding.
  ```

- **Format rules:** Recipe format -- questions, not prohibitions. World-description framing (M-12). No suppressor patterns (M-06).

- **Anti-loss mechanisms:** SAFE. No fragile mechanisms touched. The mode retrospective addresses HE-016 ("Orchestrator does not question whether COMPOSED mode was correct").

- **Propagation cascades:** MANIFEST.md Appendix E orchestrator template should reference Section B.

- **Pre-conditions:** None.

- **Post-verification:** (1) Verify recipe framing. (2) Verify no gate thresholds in pass/fail format.

- **Budget impact:** +10 lines in artifact-orchestrator.md. Within +50 budget for this file.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-020 row), HE-007 (4 specific judgment errors orchestrator missed), HE-016 (mode retrospective)

---

### GROUP I: artifact-builder-recipe.md (2 items)

---

#### SHOULD-27: Builder Recipe Subtraction [ADV-07b]

- **What:** Remove duplicate component pattern descriptions (~20-30 lines) from builder recipe before adding new content (ME-016 ARIA, ME-038 borders, ME-041 trailing void, GAP-01 responsive).

- **Where:**
  - `artifact-builder-recipe.md` (identify and remove duplicated content)

- **How:** Must READ artifact-builder-recipe.md to identify specific duplicate patterns. The adversarial review estimates 20-30 lines of duplicate content but does not specify exact locations.

- **Format rules:** Subtraction only.

- **Anti-loss mechanisms:** M-03 (Direct File Injection) -- CAUTION: do not remove content that the builder NEEDS. Only remove provably duplicate descriptions.

- **Propagation cascades:** None (builder recipe is self-contained).

- **Pre-conditions:** Must read current artifact-builder-recipe.md to identify duplicates. This is PHASE A -- subtraction before addition.

- **Post-verification:** (1) No information loss -- every unique instruction still present. (2) Net line reduction.

- **Budget impact:** -20 to -30 lines freed (estimated).

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ADV-07b)

---

#### SHOULD-28: Add ARIA Accessibility Requirements to Builder Recipe [ME-016]

- **What:** Add ARIA accessibility requirements to builder recipe: all data tables must have `aria-label` or `aria-labelledby`, all diagrams/images must have meaningful `alt` text or `aria-label`, all interactive regions must have `role` + `aria-label`. Target >= 15 ARIA attributes total (V3 regressed from 19 to 7, a 63% regression).

- **Where:**
  - `artifact-builder-recipe.md` (new section or append to existing accessibility section)

- **How:**
  ```
  ACCESSIBILITY: Your HTML includes at minimum 15 ARIA attributes:
  - Every <table> has aria-label describing its data purpose
  - Every diagram, chart, or infographic has aria-label or meaningful alt text
  - Every interactive region (collapsible, tabbed, modal) has role + aria-label
  - Skip-link as first focusable element: <a href="#main" class="skip-link">Skip to content</a>
  Count your ARIA attributes before submission. If fewer than 15, add more.
  ```

- **Format rules:** RECIPE framing (M-11, M-12): uses "Your HTML includes" (world-description) not "You MUST add" (prohibition). The count target (>=15) is a concrete number, not a judgment call. Uses Build/Create verbs.

- **Anti-loss mechanisms:** M-04 (Context Isolation) -- SAFE: no gate thresholds exposed. M-06 (Suppressor Management) -- SAFE: no suppressor patterns. M-12 (World-Description) -- recipe framing used.

- **Propagation cascades:**
  - If ARIA attributes become a gate check (future GR-63/64), gate-runner and manifest need updates
  - MANIFEST.md Appendix E builder template should reference ARIA requirements

- **Pre-conditions:** SHOULD-27 (builder recipe subtraction) should be applied first to create capacity. Must use recipe verbs per M-06/M-11.

- **Post-verification:** (1) Verify recipe framing (no "must"/"verify that"/"do NOT" patterns that would trigger BV-04). (2) Verify no gate thresholds in pass/fail format in the recipe text (M-04).

- **Budget impact:** +8-10 lines in artifact-builder-recipe.md.

- **In current 8-change plan?** NO

- **Sources:** audit-05-08.md (ME-016 row), audit-01-04.md (V3E-039, N-17), 18-gap-check.md (step4-pa-delta.md "Data tables: well-structured but missing ARIA labels")

---

#### SHOULD-29: Add Responsive Breakpoint Specification to Builder Recipe [GAP-01]

- **What:** Add minimum responsive breakpoint specification. At 768px: stack grids to single column, make tables horizontally scrollable (wrap in overflow-x: auto container), reduce heading sizes by ~15%. At 480px: reduce body font to 15px, increase line-height to 1.8, collapse multi-column layouts.

- **Where:**
  - `artifact-builder-recipe.md` (new responsive section)

- **How:** Per gap-check NEW-01:
  ```
  RESPONSIVE BEHAVIOR: Build mobile-first. At minimum, implement 2 breakpoints:
  - At 768px: stack grids to single column, make tables horizontally scrollable
    (wrap in overflow-x: auto container), reduce heading sizes by ~15%
  - At 480px: reduce body font to 15px, increase line-height to 1.8,
    collapse multi-column layouts
  These are MINIMUMS. Content-specific breakpoints (e.g., a 4-column grid
  collapsing at 1024px) are expected in addition.
  ```

- **Format rules:** Recipe format. World-description framing ("Build mobile-first" not "You MUST build mobile-first"). Concrete values (768px, 480px, 15%).

- **Anti-loss mechanisms:** M-04 -- SAFE: no gate thresholds. M-06/M-11 -- verify recipe verbs.

- **Propagation cascades:** None (builder recipe only).

- **Pre-conditions:** SHOULD-27 (builder recipe subtraction) should be applied first to create capacity.

- **Post-verification:** (1) Recipe framing verified. (2) No suppressor patterns.

- **Budget impact:** +6-8 lines in artifact-builder-recipe.md.

- **In current 8-change plan?** NO

- **Sources:** 18-gap-check.md (GAP-01, GAP-02), step4-pa-epsilon.md ("No breakpoint-driven layout changes")

---

### GROUP J: Adversarial-Sourced Additions (1 item)

This item was identified in the adversarial checklist audit (File 23) as a SHOULD-level missing item NOT present in checklist-S2-SHOULD.md.

---

#### SHOULD-30: Add WCAG Palette Conflict Verification Step [MISS-16 / BW-12]

- **What:** Warm palette tokens may fail WCAG AA contrast requirements. No verification step currently exists. Add a pre-build verification check that warm palette background/text combinations meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).

- **Where:**
  - `artifact-builder-recipe.md` (append to color/palette section)
  - OR `gate-runner-core.js` as future RECOMMENDED gate (GR-66)

- **How:** Minimum viable version for builder recipe:
  ```
  CONTRAST VERIFICATION: Before finalizing color choices, verify that all text-on-background
  combinations meet WCAG AA contrast:
  - Normal text (< 18px or < 14px bold): contrast ratio >= 4.5:1
  - Large text (>= 18px or >= 14px bold): contrast ratio >= 3:1
  The warm palette's lighter backgrounds (cream, sand, light tan) require dark text (#3d3d3d
  or darker). If a warm accent is used as background, verify body text remains legible.
  ```

- **Format rules:** Recipe format. Concrete thresholds (4.5:1, 3:1) are WCAG standards, not judgment calls.

- **Anti-loss mechanisms:** SAFE. Pure addition addressing a confirmed gap.

- **Propagation cascades:** If implemented as a gate (GR-66), requires 6-location update pattern. If recipe-only, no cascades.

- **Pre-conditions:** None for recipe version. Gate version requires subtraction capacity.

- **Post-verification:** (1) Recipe framing verified. (2) WCAG thresholds are standard values (4.5:1 and 3:1).

- **Budget impact:** +4-6 lines in artifact-builder-recipe.md.

- **In current 8-change plan?** NO

- **Sources:** 23-ADVERSARIAL-CHECKLIST-AUDIT.md (MISS-16, BW-12/FRESH-4-1), audit-09-11.md (buddy fresh-eyes WCAG concern)

---

## SUMMARY STATISTICS

| Group | Target File | Items | SHOULD IDs |
|-------|-------------|-------|------------|
| A | gate-runner-core.js | 6 | SHOULD-01 through SHOULD-06 |
| B | gate-manifest.json + gate-runner-spec.md | 1 | SHOULD-07 |
| C | pa-questions.md | 8 | SHOULD-08 through SHOULD-15 |
| D | pa-deployment.md | 2 | SHOULD-16, SHOULD-17 |
| E | pa-weaver.md | 3 | SHOULD-18, SHOULD-19, SHOULD-20 |
| F | MANIFEST.md | 4 | SHOULD-21 through SHOULD-24 |
| G | MANIFEST.md verdict logic | 1 | SHOULD-25 |
| H | artifact-orchestrator.md | 1 | SHOULD-26 |
| I | artifact-builder-recipe.md | 3 | SHOULD-27, SHOULD-28, SHOULD-29 |
| J | Adversarial-sourced (builder recipe) | 1 | SHOULD-30 |
| **TOTAL** | | **30** | |

### Capacity Budget Impact

| File | Safe Budget | Tier 2 Consumption | Status |
|------|------------|-------------------|--------|
| gate-runner-core.js | 0 net (must subtract first) | SHOULD-01 frees +60, SHOULD-02 frees +32, SHOULD-04 consumes -3, SHOULD-05 consumes -5, SHOULD-06 consumes -50, SHOULD-15 consumes -50 = NET -16 after +60 freed | TIGHT -- SHOULD-06 and SHOULD-15 are DEFERRED to next round |
| gate-manifest.json | metadata only | SHOULD-07: ~0 structural | WITHIN BUDGET |
| pa-questions.md | +30 | SHOULD-08: +4, SHOULD-09: +3, SHOULD-10: +3, SHOULD-11: +3, SHOULD-12: +3, SHOULD-13: +4, SHOULD-14: 0, SHOULD-16 (partial): +4 = +24 | NEAR LIMIT |
| pa-deployment.md | +30 | SHOULD-16 (partial): +6, SHOULD-17: +1 = +7 | WITHIN BUDGET |
| pa-weaver.md | +20 | SHOULD-18: 0 (offset), SHOULD-19: +3, SHOULD-20: +3 = +6 | WITHIN BUDGET |
| MANIFEST.md | +20 | SHOULD-21: +12, SHOULD-22: 0, SHOULD-23: +2, SHOULD-24: +3, SHOULD-25: +3 = +20 | AT LIMIT |
| artifact-orchestrator.md | +50 | SHOULD-26: +10 = +10 | WITHIN BUDGET |
| artifact-builder-recipe.md | +50 | SHOULD-27: -25 freed, SHOULD-28: +10, SHOULD-29: +8, SHOULD-30: +5 = -2 net | WITHIN BUDGET |

### Implementation Order (Phases A-I)

1. **Phase A: SUBTRACT** -- SHOULD-01 (gate consolidations), SHOULD-27 (recipe deduplication), compressions from File 15/16
2. **Phase B: FIX EXISTING GATES** -- SHOULD-02 (GR-05 split), SHOULD-04 (GR-14 fix), SHOULD-05 (GR-09 fix), SHOULD-03 (GR-06 fix)
3. **Phase C: ADD GATES** -- SHOULD-15 (GR-61 font size, only if capacity allows after Phase A+B)
4. **Phase D: PA ENRICHMENTS** -- SHOULD-08, SHOULD-16, SHOULD-12, SHOULD-13, SHOULD-17, SHOULD-14
5. **Phase E: QUESTION CHANGES** -- SHOULD-09, SHOULD-10, SHOULD-11 (after ME-037 retirements from Tier 1)
6. **Phase F: WEAVER/ORCHESTRATOR** -- SHOULD-18, SHOULD-19, SHOULD-20, SHOULD-25, SHOULD-26
7. **Phase G: MANIFEST** -- SHOULD-21, SHOULD-22, SHOULD-23, SHOULD-24
8. **Phase H: BUILDER RECIPE** -- SHOULD-28, SHOULD-29, SHOULD-30
9. **Phase I: DEFERRED** -- SHOULD-06 (GR-65 invisible DOM gate), SHOULD-07 (perceptibility column)

### Cross-File Discrepancy Notes

1. **File 14 vs File 17 on GR-05:** File 14 proposes ONE merged function (3 result objects). File 17 proposes TWO separate functions. **File 14 is authoritative** (more line-efficient, single DOM iteration).
2. **GR-48 arrays:** File 14 provides exact final-state arrays (GS-04A-exact1/exact2). These are the COORDINATED final state. Individual per-item changes from File 17 should NOT be applied independently.
3. **GR-12 absorption vs downgrade:** File 14 absorbs GR-12 into GR-18 (GR-12 ceases to exist). File 17 downgrades GR-12 to RECOMMENDED (still exists independently). **File 14 is authoritative** (saves more lines).
4. **Question total:** 3 retirements + 3 additions = 69 (net zero). File 15 incorrectly counts 4 retirements (including nonexistent PA-07).

---

*Section 2 complete. 30 SHOULD items numbered SHOULD-01 through SHOULD-30, grouped by target file across 10 groups (A-J). All items transferred with FULL detail: exact old->new diffs where available, all propagation cascades, all anti-loss mechanism impacts, all pre-conditions, budget accounting per file. Implementation order follows adversarial "subtract first" principle. Includes 1 adversarial-sourced addition (SHOULD-30: WCAG palette conflict) from File 23 that was absent from checklist-S2-SHOULD.md.*
