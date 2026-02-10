# AD MASTER EXECUTION SPEC: RULE CLASSIFICATION
## Every Gate Classified. Every Judgment Exposed. Every Auditor Defined.

**Synthesized from:** ad-skeleton-protocols.md, ad-skeleton-audit.md, retrospective-mining.md, retrospective-audit.md, verification-topology.md, verification-audit.md, ad-skeleton-synthesis.md, ad-skeleton-gaps.md
**Date:** 2026-02-09
**Governing Principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.

---

## 1. COMPLETE GATE INVENTORY WITH BINARY/JUDGMENT CLASSIFICATION

Every gate across Phases 0-4 (and the verification topology additions) is listed below. Each rule within each gate is classified as:

- **BINARY**: Measurable, automatable, PASS/FAIL with zero interpretation. Expected compliance: 100%.
- **JUDGMENT**: Requires interpretation, taste, assessment, or subjective evaluation. Expected compliance: ~0%.
- **HIDDEN-JUDGMENT**: LOOKS binary but contains an embedded judgment component. Expected compliance: 50-90% (surface compliance, depth degradation).

### 1.1 Gate 0: Setup + Convention + Research (13 gates + 4 verification topology additions)

| Gate | Rule Text | Classification | Rationale | Expected Compliance |
|------|-----------|---------------|-----------|---------------------|
| 0-01 | TeamCreate success | **BINARY** | API call succeeds or fails | 100% |
| 0-02 | HTTP server running, returning 200 | **BINARY** | HTTP status code check | 100% |
| 0-03 | Playwright navigated to test page, screenshot shows content | **HIDDEN-JUDGMENT** | Navigation is binary. "Shows content" requires distinguishing real content from error pages, loading screens, or partial renders | 90% (navigation), 70% ("shows content") |
| 0-04 | Working directories exist | **BINARY** | File system check | 100% |
| 0-05 | AD-BUILD-STATE.md created | **BINARY** | File existence | 100% |
| 0-06 | AD-CONVENTION-SPEC.md exists, >= 300 lines | **BINARY** | File existence + line count | 100% |
| 0-07 | AD-CONVENTION-SPEC all values labeled T1/T2 | **HIDDEN-JUDGMENT** | Label PRESENCE is binary (100%). Label ACCURACY (is this really T1 research-backed, or was it agent-invented and labeled T1?) is judgment (~0%). Retrospective-audit Section 2 confirmed: labels will be present but accuracy is unverifiable by agents. | 100% (labels present), ~0% (labels accurate) |
| 0-08 | AD-SOUL-TEMPLATE.html exists and renders correctly | **HIDDEN-JUDGMENT** | "Exists" is binary (100%). "Renders correctly" is judgment (~50%). What does "correctly" mean? At what viewport? The verification-audit GAP V-1 notes no viewport specification. | 100% (exists), 50% (correctly) |
| 0-09 | R-4-AD-EVALUATION.md exists, >= 150/192 findings categorized | **BINARY** | File existence + count threshold | 100% |
| 0-10 | r2-ad-mapping.md exists, >= 18/25 findings have AD targets | **BINARY** | File existence + count threshold | 100% |
| 0-11 | 6 research packages exist | **BINARY** | File existence x 6 | 100% |
| 0-12 | >= 5 EXT-AXIS-* findings per AD, all SOUL PASS | **HIDDEN-JUDGMENT** | Count >= 5 is binary (100%). "All SOUL PASS" is binary IF soul rules are binary (they are: border-radius:0 etc.). BUT: whether findings are SUBSTANTIVE or padding to meet the count is judgment. Retrospective-mining Section 9.2 identifies this at 80% expected compliance. | 80% (count met with adequate quality) |
| 0-13 | AD-RESEARCH-GATE.md compiled with all findings tracked | **BINARY** | File existence + contents include finding IDs | 100% |
| 0-14 | Convention Audit Report exists, all 15 checks PASS | **BINARY** | File existence + all sub-checks PASS (sub-checks themselves are binary per CA-01 through CA-15) | 100% |
| 0-15 | Research Audit Report exists, all 10 checks PASS | **BINARY** | File existence + all sub-checks PASS | 100% |
| 0-16 | All planted convention violations detected (3/3) | **BINARY** | Detection count check | 100% |
| 0-17 | All planted convention violations REMOVED after audit | **BINARY** | File content check (violations no longer present) | 100% |

**GATE 0 SUMMARY: 17 gates total. 12 BINARY, 4 HIDDEN-JUDGMENT, 0 pure JUDGMENT, 1 BINARY (planted violations).**

### 1.2 Gates 1-3: Per-Build-Wave (13 gates + 3 verification topology additions per wave)

| Gate | Rule Text | Classification | Rationale | Expected Compliance |
|------|-----------|---------------|-----------|---------------------|
| W-01 | Expected AD HTML files exist, each >= 80KB | **BINARY** | File existence + size threshold | 100% |
| W-02 | Each file has INLINE THREADING HEADER | **BINARY** | String pattern match at file top | 100% |
| W-03 | Each file's :root block matches AD-CONVENTION-SPEC.md | **HIDDEN-JUDGMENT** | Token-by-token comparison is binary. But "matches" for complex CSS values (shorthand properties, calc() expressions, compound values) requires interpretation. Retrospective-mining rates at 70%. | 90% (simple tokens), 70% (complex values) |
| W-04 | Soul: 0 border-radius > 0 across ALL files | **BINARY** | Programmatic sweep: `getComputedStyle(el).borderRadius === '0px'` | 100% |
| W-05 | Soul: 0 box-shadow != none across ALL files | **BINARY** | Programmatic sweep | 100% |
| W-06 | Soul: 0 filter effects across ALL files | **BINARY** | Programmatic sweep | 100% |
| W-07 | Border: 0 instances of 2px borders | **BINARY** | Programmatic sweep: check all border-*-width !== '2px' | 100% |
| W-08 | All backgrounds opaque (0 rgba with alpha < 1) | **BINARY** | Programmatic sweep | 100% |
| W-09 | Convention compliance: font trio correct | **HIDDEN-JUDGMENT** | Font-family NAMES are checkable (binary). But WHERE to check (all elements? only body/headings/code?) is ambiguous. Font-loading timing makes computed checks unreliable without `document.fonts.ready`. Retrospective-mining rates at 90%. | 90% (with fonts.ready), 60% (without) |
| W-10 | Research Application Record present in each file | **HIDDEN-JUDGMENT** | PRESENCE of the record is binary (100%). Whether the record is ACCURATE (vs boilerplate copied from a template) is judgment. History: research application records were present in all OD files but the actual application rate was 9.79%. | 100% (present), ~10% (accurate) |
| W-11 | >= N R-4/R-2/EXT citations per file with evidence | **HIDDEN-JUDGMENT** | COUNT meeting threshold is binary (100%). Whether EVIDENCE is genuine or citation theater is judgment (~0%). This is the anti-citation-theater infinite regress (see Section 3). Retrospective-mining rates at 50%. | 100% (count met), ~50% (evidence genuine) |
| W-12 | AD-F findings written in AD-outbound-findings.md | **BINARY** | File contains finding entries matching builder's reserved range | 100% |
| W-13 | Scribe updated provenance files | **BINARY** | File modification timestamp check on target files | 100% |
| W-14 | Scribe Spot-Check Report exists, all 6 checks PASS | **BINARY** | File existence + sub-checks | 100% |
| W-15 | Identity Delta verified by Weaver (4 checks PASS) | **BINARY** | Sub-checks ID-01 through ID-04 (see Section 5.4) | 100% |
| W-16 | Cross-wave consistency check (Wave 2+ only) | **BINARY** | :root token comparison across wave files | 100% |

**PER-WAVE SUMMARY: 16 gates per wave. 11 BINARY, 5 HIDDEN-JUDGMENT, 0 pure JUDGMENT.**
**TOTAL across 3 waves: 48 gate-checks (33 BINARY, 15 HIDDEN-JUDGMENT).**

### 1.3 Gate 4: Audit Complete (7 gates + 4 verification topology additions)

| Gate | Rule Text | Classification | Rationale | Expected Compliance |
|------|-----------|---------------|-----------|---------------------|
| 4-01 | Visual audit report exists with findings | **BINARY** | File existence + non-empty findings section | 100% |
| 4-02 | Structural audit report exists with findings | **BINARY** | File existence + non-empty findings section | 100% |
| 4-03 | Fresh-eyes report exists with >= 3 UNIQUE FRESH findings | **HIDDEN-JUDGMENT** | Count >= 3 is binary. "UNIQUE" (novel vs overlapping with prior audit) requires judgment about novelty. However, the fresh-eyes CONSTRAINT (no convention spec, no prior findings) structurally produces novel findings. Historical data: 6-7 UNIQUE FRESH in comprehensive audit. Retrospective-mining rates at 70%, retrospective-audit rates higher because the mechanism has worked twice. | 85% (findings produced and genuinely unique) |
| 4-04 | Weaver synthesis exists with cross-references | **BINARY** | File existence + cross-reference entries present | 100% |
| 4-05 | All Critical/High findings have fix assignments | **BINARY** | Every finding tagged CRITICAL or HIGH has an assigned fixer in the report | 100% |
| 4-06 | No unresolved contradictions between auditors | **HIDDEN-JUDGMENT** | "Contradiction" requires comparing two assessments and determining whether they actually disagree. WEAVER-SYNTHESIS XR-007 (2.22px border) showed a SEEMING contradiction that was actually "same data, different measurement plane." Detecting genuine contradiction vs measurement-plane difference is judgment. Verification-audit GAP V-5 notes no resolution protocol specified. | 70% |
| 4-07 | Master audit report compiled | **BINARY** | File existence | 100% |
| 4-08 | Provenance Audit Report exists, all 12 checks PASS | **BINARY** | File existence + all PA sub-checks | 100% |
| 4-09 | All planted provenance violations detected (3/3) | **BINARY** | Detection count | 100% |
| 4-10 | All planted build violations detected (5/5) | **BINARY** | Detection count | 100% |
| 4-11 | Weaver state file accuracy verified by Lead (5 checks PASS) | **BINARY** | WV-01 through WV-05 sub-checks | 100% |

**GATE 4 SUMMARY: 11 gates. 9 BINARY, 2 HIDDEN-JUDGMENT.**

### 1.4 Gate 5: Fix Complete (8 gates + 2 verification topology additions)

| Gate | Rule Text | Classification | Rationale | Expected Compliance |
|------|-----------|---------------|-----------|---------------------|
| 5-01 | All Critical fixes applied | **BINARY** | Count of fixed findings matches count of CRITICAL findings | 100% |
| 5-02 | All High fixes applied | **BINARY** | Same count logic | 100% |
| 5-03 | Programmatic verification PASS (DOM checks) | **BINARY** | Each fixed element's computed style matches expected value | 100% |
| 5-04 | Visual verification PASS (screenshots) | **HIDDEN-JUDGMENT** | Screenshots are taken (binary). Whether fix is "visually apparent" requires comparing before/after images (judgment). However, OD fix execution achieved 12/12 visual PASS, suggesting this works in practice when fixes are concrete. | 90% |
| 5-05 | Soul compliance re-verified: 0 violations post-fix | **BINARY** | Same programmatic sweep as W-04/W-05/W-06 | 100% |
| 5-06 | 0 NEW violations introduced by fixes | **BINARY** | Delta check: violations-after minus violations-before = 0 | 100% |
| 5-07 | Per-fixer reports exist | **BINARY** | File existence per fixer | 100% |
| 5-08 | Scribe provenance updates complete | **BINARY** | File modification timestamps on target provenance files | 100% |
| 5-09 | Post-fix Scribe Spot-Check PASS | **BINARY** | SC-01 through SC-06 sub-checks | 100% |
| 5-10 | All planted violations REMOVED from all files | **BINARY** | Search for known planted patterns returns 0 matches | 100% |

**GATE 5 SUMMARY: 10 gates. 9 BINARY, 1 HIDDEN-JUDGMENT.**

### 1.5 Gate 6: Stage Complete (13 gates)

| Gate | Rule Text | Classification | Rationale | Expected Compliance |
|------|-----------|---------------|-----------|---------------------|
| 6-01 | All 6 AD HTML files exist, scored >= 32/40 | **HIDDEN-JUDGMENT** | File existence is binary. Score >= 32 depends on the SCORING RUBRIC. If the rubric is fully binary (40 checkboxes, each 1 point), this is binary. If the rubric contains judgment items ("design quality: 1-5"), this is hidden-judgment. The skeleton doesn't define the scoring rubric. | 80% (score threshold met, accuracy uncertain) |
| 6-02 | AD-outbound-findings.md exists with >= 10 findings | **BINARY** | File existence + count | 100% |
| 6-03 | AD-SYNTHESIS.md exists with all 7 sections | **BINARY** | File existence + section heading count | 100% |
| 6-04 | AD-RESEARCH-GATE.md exists with post-build verification | **BINARY** | File exists + post-build section present | 100% |
| 6-05 | AD-AUDIT-SYNTHESIS.md exists | **BINARY** | File existence | 100% |
| 6-06 | HANDOFF-AD-TO-CD.md exists with acknowledgment protocol | **BINARY** | File exists + "acknowledgment" section present | 100% |
| 6-07 | ACCUMULATED-IDENTITY-v2.md finalized | **BINARY** | File exists + "WHERE WE ARE" section says "AD COMPLETE" | 100% |
| 6-08 | BACKBONE.md updated with Stage 4 narrative | **BINARY** | Stage 4 section exists in file | 100% |
| 6-09 | PIPELINE-MANIFEST.md updated with AD-F entries | **BINARY** | AD-F entries present in file | 100% |
| 6-10 | RESEARCH-ACTIVE.md updated (R-4 >= 80%, R-2 >= 72%) | **HIDDEN-JUDGMENT** | The PERCENTAGES are binary (80% of 192 = >= 154 cited). Whether citations are GENUINE is judgment (the 9.79% actual rate vs claimed rate). | 100% (percentage threshold met in count), ~10% (genuine application rate) |
| 6-11 | SOUL-DISCOVERIES.md has Stage 4 determination | **BINARY** | Section exists with determination text | 100% |
| 6-12 | axis-patterns.md has all 6 patterns | **BINARY** | 6 section headings present | 100% |
| 6-13 | Git status shows only intended changes | **BINARY** | `git status` output matches expected file list | 100% |

**GATE 6 SUMMARY: 13 gates. 11 BINARY, 2 HIDDEN-JUDGMENT.**

### 1.6 Convention Auditor Sub-Gates (CA-01 through CA-15)

| Gate | Rule Text | Classification | Expected Compliance |
|------|-----------|---------------|---------------------|
| CA-01 | Spec exists and is >= 300 lines | **BINARY** | 100% |
| CA-02 | Every CSS value labeled T1 or T2 | **BINARY** (presence) / **HIDDEN-JUDGMENT** (accuracy) | 100% / ~0% |
| CA-03 | :root token block present with exact values | **BINARY** | 100% |
| CA-04 | Border categories defined (Cat 1/2/3 with px values) | **BINARY** | 100% |
| CA-05 | Type scale defined (h1-h6 + body + code + meta) | **BINARY** | 100% |
| CA-06 | Color palette defined with exactly the locked palette hex values | **BINARY** | 100% |
| CA-07 | Spacing scale defined | **BINARY** | 100% |
| CA-08 | Soul compliance block included | **BINARY** | 100% |
| CA-09 | Per-AD CSS approach table present | **BINARY** | 100% |
| CA-10 | 768px responsive collapse rules per AD exploration | **BINARY** | 100% |
| CA-11 | Axis Transition Toolkit section exists | **BINARY** | 100% |
| CA-12 | Scroll-snap ruling (ALLOWED/BANNED) present | **BINARY** | 100% |
| CA-13 | CSS order property ruling present | **BINARY** | 100% |
| CA-14 | AD-SOUL-TEMPLATE.html renders correctly | **HIDDEN-JUDGMENT** | Same as GATE 0-08 | 50% |
| CA-15 | No T1 value contradicts OD-CONVENTION-SPEC.md | **BINARY** | Token-by-token comparison against OD spec | 100% |

### 1.7 Provenance Auditor Sub-Gates (PA-01 through PA-12)

| Gate | Rule Text | Classification | Expected Compliance |
|------|-----------|---------------|---------------------|
| PA-01 | AD-outbound-findings.md exists, >= 10 findings | **BINARY** | 100% |
| PA-02 | Each finding has all 7 required fields | **BINARY** | 100% |
| PA-03 | No finding ID collisions | **BINARY** | 100% |
| PA-04 | Finding IDs within reserved ranges per builder | **BINARY** | 100% |
| PA-05 | Each AD HTML file has inline threading header | **BINARY** | 100% |
| PA-06 | Research Application Record present in each AD HTML | **BINARY** | 100% |
| PA-07 | Spot-check 5 citations: cited finding ID exists in source file | **BINARY** | 100% |
| PA-08 | Spot-check 5 citations: cited element exists in the AD HTML file | **BINARY** | 100% |
| PA-09 | PIPELINE-MANIFEST finding counts match AD-outbound-findings.md | **BINARY** | 100% |
| PA-10 | RESEARCH-ACTIVE.md R-4 application rate >= 80% | **HIDDEN-JUDGMENT** | Count is binary; genuineness of applications is judgment | 100% / ~10% |
| PA-11 | RESEARCH-ACTIVE.md R-2 application rate >= 72% | **HIDDEN-JUDGMENT** | Same as PA-10 | 100% / ~10% |
| PA-12 | EXT-RESEARCH-REGISTRY.md EXT-AXIS-* counts match actual | **BINARY** | 100% |

### 1.8 Visual Audit Sub-Gates (VA-01 through VA-13, per page)

| Gate | Rule Text | Classification | Expected Compliance |
|------|-----------|---------------|---------------------|
| VA-01 | Page renders (not blank) | **BINARY** | 100% |
| VA-02 | No visual overflow | **BINARY** | 100% (detectable via scrollWidth > clientWidth) |
| VA-03 | No element misalignment | **HIDDEN-JUDGMENT** | Some misalignment is measurable (offset vs expected). But "alignment" at component level requires visual assessment. | 80% |
| VA-04 | Typography matches convention spec | **BINARY** | Computed style comparison | 100% |
| VA-05 | Colors match convention spec | **BINARY** | Computed color comparison against locked palette | 100% |
| VA-06 | Spacing matches convention spec | **BINARY** | Computed margin/padding comparison | 100% |
| VA-07 | Border system compliant | **BINARY** | Same as W-07 | 100% |
| VA-08 | Soul compliance visual | **BINARY** | Same as W-04/W-05/W-06 | 100% |
| VA-09 | Responsive layout functional at 768px | **HIDDEN-JUDGMENT** | "Functional" is judgment. Content visible and not overlapping is binary. Layout QUALITY at 768px is judgment. | 80% |
| VA-10 | Code blocks consistent | **BINARY** | Background color + font-family check | 100% |
| VA-11 | Headers consistent | **BINARY** | Background color + content alignment check | 100% |
| VA-12 | No dead zones | **HIDDEN-JUDGMENT** | "Dead zone" detection requires judging whether a large gap is intentional whitespace or an error. OD Fix #7 proved this can be a false positive (scroll-animation artifact). | 70% |
| VA-13 | Research compliance (>= 5 research findings cited with evidence) | **HIDDEN-JUDGMENT** | Same as W-11 -- count is binary, evidence quality is judgment | 100% / ~50% |

---

## 2. THE 7+ GATES WITH HIDDEN JUDGMENT: EXPOSURE AND BINARY CONVERSION

The retrospective-mining identified 7 gates with hidden judgment. The full analysis above exposes additional ones. Here are ALL hidden-judgment gates with proposed binary conversions.

### 2.1 GATE 0-03: "Screenshot shows content"

**Why it's judgment:** A screenshot showing a spinner, a 404 page, or a partially-loaded page with only headers technically "shows content." An agent must JUDGE whether what it sees is the INTENDED content.

**Binary conversion:** Replace "shows content" with: "Screenshot `querySelectorAll('section').length >= 3` AND `document.title` matches expected page title AND `document.readyState === 'complete'`." [CLASSIFICATION: BINARY]

### 2.2 GATE 0-07: "All values labeled T1/T2"

**Why it's judgment:** The LABEL is binary (present/absent). The ACCURACY of the label (is this really T1 research-backed?) requires tracing each value to its research source, which is a judgment call about evidence sufficiency.

**Binary conversion:** Split into two gates:
- 0-07a: "Every CSS value in AD-CONVENTION-SPEC.md has a T1 or T2 label" [BINARY -- string pattern match]
- 0-07b: "Convention Auditor spot-checks 5 random T1 labels: each has a cited R-* or EXT-* finding ID that exists in source files" [BINARY -- existence check on cited IDs]

The accuracy of the T1 CLAIM (does the finding actually support the value?) remains judgment. This is an acceptable remainder because the spot-check catches the worst case (T1 labels on values with no research at all) while accepting that borderline cases will not be caught by agents.

### 2.3 GATE 0-08: "Renders correctly"

**Why it's judgment:** "Correctly" has no binary definition. The soul template could render at 1440px but break at 768px. It could render with correct structure but wrong colors. It could render with all correct values but feel visually broken.

**Binary conversion:** Replace with: "AD-SOUL-TEMPLATE.html at 1440px: (a) body background-color matches --color-background, (b) h1 font-family includes 'Instrument Serif', (c) 0 border-radius > 0 across all elements, (d) 0 box-shadow != none, (e) `querySelectorAll('section').length >= 2`." [BINARY -- 5 programmatic checks]

Add: "AD-SOUL-TEMPLATE.html at 768px: (a) no horizontal overflow (`scrollWidth <= clientWidth`), (b) h1 font-size >= 24px" [BINARY -- 2 programmatic checks]

### 2.4 GATE W-03: ":root block matches AD-CONVENTION-SPEC"

**Why it's judgment:** Simple token comparison (--color-primary: #E83025) is binary. But complex values involving calc(), shorthand properties, or vendor prefixes require interpretation of "matches."

**Binary conversion:** Define "matches" precisely: "For each CSS custom property in AD-CONVENTION-SPEC.md's :root block, `getComputedStyle(document.documentElement).getPropertyValue('--property-name').trim()` equals the spec value character-for-character." This is BINARY for simple values and catches most complex values. Shorthand expansion edge cases (border: 3px solid #1A1A1A expands to 4 properties) should be documented in the convention spec as individual longhand properties to avoid ambiguity. [CLASSIFICATION: BINARY after spec normalization]

### 2.5 GATE W-09: "Font trio correct"

**Why it's judgment:** "Correct" is ambiguous about WHERE (which elements), and font-loading timing makes computed checks unreliable.

**Binary conversion:** Replace with: "After `await document.fonts.ready`: (a) `getComputedStyle(document.body).fontFamily` starts with 'Inter', (b) `getComputedStyle(document.querySelector('h1')).fontFamily` starts with 'Instrument Serif', (c) `getComputedStyle(document.querySelector('code')).fontFamily` starts with 'JetBrains Mono'." [BINARY -- 3 programmatic checks with mandatory fonts.ready gate]

### 2.6 GATE W-10: "Research Application Record present"

**Why it's judgment:** Presence is binary. Whether the record is ACCURATE (vs boilerplate template padding) is judgment.

**Binary conversion:** Keep the presence check as W-10 [BINARY]. Add a separate gate: "Provenance Auditor PA-07/PA-08 spot-checks 5 random citations from the Research Application Record: (a) cited finding ID exists in source file [BINARY], (b) cited HTML element/CSS property exists in the AD file [BINARY]." This doesn't verify GENUINE application but catches the worst theater (citing non-existent IDs or non-existent elements).

### 2.7 GATE W-11: ">= N citations per file with evidence"

**Why it's judgment:** Count is binary. "Evidence" quality is judgment.

**Binary conversion:** Define "evidence" structurally: "Each citation line in the Research Application Record must contain: (a) finding ID (format: R4-NNN, R2-NNN, or EXT-AXIS-X-NNN), (b) target element (CSS selector or HTML element reference), (c) specific property changed (e.g., 'grid-template-columns'). Citations missing any of (a), (b), or (c) do not count toward N." [BINARY -- structural format check]

This converts "evidence" from a judgment about quality to a binary about FORMAT. An agent can still produce formally-correct-but-semantically-empty citations, but the format requirement makes it HARDER to fake than a freeform claim. This follows the retrospective-audit's recommendation: "make citation theater MORE COSTLY than genuine application."

### 2.8 GATE 4-03: ">= 3 UNIQUE FRESH findings"

**Why it's judgment:** "UNIQUE" requires comparing fresh-eyes findings against all prior audit findings to determine whether they represent genuinely new observations.

**Binary conversion:** Define "UNIQUE FRESH" operationally: "A finding is UNIQUE FRESH if it does not share the same (a) target element AND (b) target property AND (c) finding type as any finding in the Visual or Structural audit reports." [BINARY -- triple-match comparison]

A finding about "overall page gestalt feels imported" (FRESH-COMP-010 from OD) would be UNIQUE FRESH because no visual/structural audit targets "overall page gestalt." This captures the epistemic difference that makes fresh-eyes valuable.

### 2.9 GATE 4-06: "No unresolved contradictions"

**Why it's judgment:** Determining whether two findings contradict vs. measure different aspects of the same phenomenon requires interpretation.

**Binary conversion:** Define "contradiction" structurally: "Two findings CONTRADICT if they target the same element AND same property AND assign different values or opposite assessments (PASS vs FAIL). All such pairs must have a RECONCILIATION entry in the Weaver synthesis stating which assessment is authoritative and why." [BINARY -- check for reconciliation entries on all element+property collision pairs]

Two findings about the same element but different properties (e.g., one about border-width, one about font-size) are not contradictions by this definition. This avoids the "same data, different measurement plane" false contradiction from XR-007.

### 2.10 GATE 5-04: "Visual verification PASS (screenshots)"

**Why it's judgment:** Comparing before/after screenshots requires visual assessment.

**Binary conversion:** Supplement with programmatic verification: "For each fixed finding: the SAME programmatic check that originally detected the issue now returns the EXPECTED value." The screenshot then becomes SECONDARY evidence (for human review after the session), not the primary gate. The primary gate is the programmatic re-check. [BINARY primary gate + JUDGMENT secondary evidence]

### 2.11 GATE 6-01: "Scored >= 32/40"

**Why it's judgment:** Depends entirely on the scoring rubric. If rubric items are judgment, the score is judgment.

**Binary conversion:** Define a 40-item binary scoring rubric where each item is 1 point:
- Items 1-10: Soul compliance (border-radius, box-shadow, filter, opacity, 2px borders, palette, font trio, spacing tokens, callout limit, fractal scales) [10 BINARY items]
- Items 11-20: Convention compliance (token match, border categories, type scale, heading hierarchy, landmark regions, skip-link, focus-visible, reduced-motion, print media, ARIA) [10 BINARY items]
- Items 21-30: Provenance (inline header, finding IDs in range, Research Application Record, >= N citations, EXT-AXIS citations, CONSUMED BY tables, outbound findings written, chain doc updated, research package consumed, scribe verification) [10 BINARY items]
- Items 31-40: Content quality (>= 80KB file size, >= 3 viewport sections, axis pattern identifiable from HTML structure, responsive at 768px no overflow, code blocks present, Q/A pairs present, navigation aids present, meta text present, linked to other explorations, unique content vs template) [10 BINARY items -- each defined as presence/absence]

With this rubric, >= 32/40 means "passes at least 32 of 40 binary checks." [CLASSIFICATION: BINARY]

### 2.12 GATE 6-10: "R-4 >= 80%, R-2 >= 72%"

**Why it's judgment:** The percentages are computed from RESEARCH-ACTIVE.md counts. Whether citations are genuine is judgment.

**Binary conversion:** Accept that the RATE is binary (count of citations / total applicable findings >= threshold). The QUALITY of citations is verified by PA-07/PA-08 spot-checks, not by this gate. This gate measures DECLARED rate; the provenance auditor measures ACTUAL rate on a sample basis. Split into:
- 6-10a: "RESEARCH-ACTIVE.md R-4 cited count / 192 >= 0.80" [BINARY]
- 6-10b: "RESEARCH-ACTIVE.md R-2 cited count / 25 >= 0.72" [BINARY]

---

## 3. THE ANTI-CITATION-THEATER INFINITE REGRESS

### 3.1 The Problem

The retrospective-mining identified this as its "most valuable finding": anti-citation-theater measures are THEMSELVES judgment rules. The chain:

1. **Rule:** "Apply research genuinely" -- JUDGMENT (~0% compliance)
2. **Meta-rule:** "Each citation must point to a specific HTML/CSS element" -- JUDGMENT (an agent can point to ANY element and claim R4-012 influenced it)
3. **Meta-meta-rule:** "Detect discrepancy between fresh-eyes observations and citation claims" -- JUDGMENT (comparing two subjective assessments)
4. **Meta-meta-meta-rule:** "Fresh-eyes observations are themselves judgment" -- This is where the regress terminates because there is no further level of verification

### 3.2 Why the Regress Exists

The regress exists because GENUINE RESEARCH APPLICATION is inherently a judgment call. You cannot verify that an agent truly "thought about" R4-012 when designing a div. You can only verify:
- The citation ID exists (binary)
- The cited element exists (binary)
- The cited property is plausible for the finding topic (judgment)

### 3.3 How to Break the Loop

**Accept that the loop cannot be fully broken. Instead, make citation theater EXPENSIVE.**

The strategy has three layers, each more binary than the last:

**Layer 1: FORMAT REQUIREMENTS (binary, catches 0-effort theater)**
- Citation must contain: finding ID + target CSS selector + specific CSS property [BINARY]
- Citation missing any of these three fields does not count toward minimum [BINARY]
- Gate: W-11 checks structural format [BINARY]

**Layer 2: EXISTENCE VERIFICATION (binary, catches moderate-effort theater)**
- Provenance Auditor PA-07: cited finding ID exists in source research file [BINARY]
- Provenance Auditor PA-08: cited CSS selector matches an actual element in the HTML [BINARY]
- Gate: PA-07/PA-08 spot-check 5 random citations [BINARY]

**Layer 3: GESTALT CHECK (judgment, catches high-effort theater)**
- Fresh-Eyes agent evaluates design quality WITHOUT reading citations [JUDGMENT -- explicitly labeled as such]
- Fresh-eyes findings are compared against citation claims by the Weaver [JUDGMENT -- explicitly labeled]
- If fresh-eyes says "this layout has no clear reading direction" and the builder cites R4-012 (Z-pattern entry point), that's a FLAG for human review, not an automated FAIL

**The honest conclusion:** Layers 1 and 2 are binary and will achieve 100% compliance. They eliminate zero-effort and moderate-effort theater. Layer 3 is judgment and will achieve ~0% automated compliance -- but it produces findings for human review, which is its purpose. The infinite regress terminates at the human. [CLASSIFICATION: Layers 1-2 BINARY, Layer 3 JUDGMENT -- explicitly accepted]

### 3.4 The Meta-Irony Rule

**Every rule in this document is itself classified. This section is classified as:**
- Section 3.1-3.2 (problem statement): DESCRIPTIVE [no compliance requirement]
- Section 3.3 Layer 1: BINARY [100% expected compliance]
- Section 3.3 Layer 2: BINARY [100% expected compliance]
- Section 3.3 Layer 3: JUDGMENT [~0% automated compliance; human-terminal]
- Section 3.4 (this section): META-DESCRIPTIVE [no compliance requirement]

---

## 4. CONVENTION AUDITOR: COMPLETE DEFINITION

### 4.1 Role

The Convention Auditor is the single highest-leverage agent addition identified by the gap analysis. Its purpose: verify that AD-CONVENTION-SPEC.md (the document ALL builders consume) is correct BEFORE any builder starts.

### 4.2 What It Checks

15 binary checks (CA-01 through CA-15, defined in Section 1.6 above).

Additionally, the verification-audit identified a missing check:
- **CA-16:** All OD-CONVENTION-SPEC.md values present in AD-CONVENTION-SPEC.md or explicitly documented as superseded [BINARY -- value-by-value comparison with "SUPERSEDED" annotation check]

**Total: 16 binary checks.**

### 4.3 When It Runs

Phase 0, INLINE. Immediately after the Convention Agent completes its work. BEFORE Gate 0 passes. BEFORE any builder spawns.

### 4.4 Information Barrier

- **READS:** OD-CONVENTION-SPEC.md, T1 synthesis files (6 files in perceptual-audit-v2/synthesis/), SOUL-DISCOVERIES.md, AD-CONVENTION-SPEC.md (the document being audited), AD-SOUL-TEMPLATE.html
- **DOES NOT READ:** Convention Agent's process notes, rationale, or working files. This prevents sympathetic reading ("the Convention Agent had good reasons for this").

### 4.5 The 20:1 ROI Calculation

**Cost:** 1 agent, ~15 minutes. File-only (no Playwright). ~95% write reliability.

**Prevented cost:** If a convention spec error propagates to 6 builders:
- Each builder constructs AD HTML embedding the wrong convention values (~40 min each)
- Audit discovers the discrepancy (~45 min of audit time)
- Fixes required across all 6 files (~25 min fix phase + re-verification)
- Total wasted time: ~3-5 hours of agent work

**ROI:** 15 minutes prevents 3-5 hours = 12:1 to 20:1 return.

**Historical evidence:** OD's PIPELINE-MANIFEST R-2 count error (78 listed when only 27 exist) was an original authoring error in a provenance document that was never audited. It propagated through every downstream consumer and was only discovered by a 58-agent comprehensive audit. A single auditor checking the count would have caught it in Phase 0.

### 4.6 Position in Team Topology

```
Lead
  |
  +-- Convention Agent (creates spec)
  |     |
  |     +-- Convention Auditor (verifies spec) -- spawned by Lead AFTER convention agent completes
  |
  +-- R-4 Evaluator
  +-- R-2 Re-Mapper
  +-- Weaver
```

The Convention Auditor is a DIRECT REPORT to Lead (not spawned by the Convention Agent). This prevents the agent-auditing-itself problem. It is spawned SEQUENTIALLY after the Convention Agent, not in parallel. Lead reads the Convention Auditor's report before passing Gate 0.

### 4.7 Output File

```markdown
# CONVENTION-AUDIT-REPORT.md
## Result: PASS / FAIL
## Date: [timestamp]
## Checks: 16 binary gates

| Check | Result | Notes |
|-------|--------|-------|
| CA-01 | PASS/FAIL | [specific value if FAIL] |
| CA-02 | PASS/FAIL | |
| ... | | |
| CA-16 | PASS/FAIL | |

## FAIL Items (if any):
[Specific errors with line numbers and expected vs actual values]

## Planted Violation Detection:
| Plant | Detected? | Details |
|-------|-----------|---------|
| C1 | YES/NO | |
| C2 | YES/NO | |
| C3 | YES/NO | |
```

### 4.8 FAIL Route

If Convention Auditor reports FAIL on any gate:
1. Lead sends specific FAIL items to Convention Agent
2. Convention Agent fixes the identified issues
3. Convention Auditor re-runs (or Lead verifies the fix manually if the fix is trivial)
4. Gate 0 does not pass until all 16 checks are PASS

---

## 5. ALL 4 PROPOSED FILE-ONLY AUDITORS: COMPLETE DEFINITIONS

### 5.1 Enrichment Auditor (Research Auditor)

**Scope:** Verifies R-4 Evaluator and R-2 Re-Mapper output accuracy.
**Trigger:** After R-4 Evaluator and R-2 Re-Mapper complete work, BEFORE Gate 0 passes.
**Pass/Fail Criteria:** 10 binary checks (RA-01 through RA-10, defined in Section 1.7 of verification-topology.md).
**Files Read:** R-4-AD-EVALUATION.md, r2-ad-mapping.md, research-package-ad-{1-6}.md, original R-4 source file, original R-2 source file.
**File Written:** `/tmp/ad-execution/RESEARCH-AUDIT-REPORT.md`
**Agent Type:** File-only, no Playwright. ~95% write reliability. ~20 min runtime.

**Spot-Check Methodology:** [BINARY]
1. Select 5 random R-4 finding IDs from the source file
2. For each: read source finding text (10 words), read evaluator's AD target, assess plausibility
3. "Plausible" defined as: the finding mentions a concept (e.g., "Z-pattern") that appears in the target AD's description (e.g., AD-001 is Z-Pattern). This is a keyword-match check, not a judgment call. [BINARY]

### 5.2 Convention Auditor

**Scope:** Verifies AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html.
**Trigger:** After Convention Agent completes, BEFORE Gate 0 passes.
**Pass/Fail Criteria:** 16 binary checks (CA-01 through CA-16).
**Files Read:** AD-CONVENTION-SPEC.md, AD-SOUL-TEMPLATE.html, OD-CONVENTION-SPEC.md, T1 synthesis files, SOUL-DISCOVERIES.md.
**File Written:** `/tmp/ad-execution/CONVENTION-AUDIT-REPORT.md`
**Agent Type:** File-only, no Playwright. ~95% write reliability. ~15 min runtime.

### 5.3 Provenance Auditor

**Scope:** Verifies provenance chain documents, finding ID integrity, and citation accuracy.
**Trigger:** During Phase 2 audit wave, runs parallel with Visual and Structural auditors.
**Pass/Fail Criteria:** 12 binary checks (PA-01 through PA-12).
**Files Read:** AD-outbound-findings.md, all 6 AD HTML files (source code, not rendered), PIPELINE-MANIFEST.md, RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md, original research source files (for citation existence checks).
**File Written:** `/tmp/ad-execution/PROVENANCE-AUDIT-REPORT.md`
**Agent Type:** File-only, no Playwright. ~95% write reliability. ~25 min runtime.

**Anti-Citation-Theater Checks:** PA-07 and PA-08 implement the binary components of anti-citation-theater (Layer 1 and Layer 2 from Section 3.3). The judgment component (Layer 3) is delegated to Fresh-Eyes. [BINARY + JUDGMENT separation explicit]

### 5.4 Scribe Spot-Checker

**Scope:** Verifies scribe output accuracy after each build wave.
**Trigger:** After Scribe completes in each build sub-phase, BEFORE wave gate passes.
**Pass/Fail Criteria:** 6 binary checks (SC-01 through SC-06).
**Files Read:** Builder output HTML (for actual finding count), scribe's updated provenance files (RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md, AD-outbound-findings.md), inline threading headers on new files.
**File Written:** `/tmp/ad-execution/SCRIBE-SPOT-CHECK-WAVE{N}.md`
**Agent Type:** File-only, no Playwright. ~95% write reliability. ~5 min per wave runtime.

**Inline Execution Model:** The Scribe Spot-Checker runs DURING waves, not after all waves complete. This prevents metadata drift accumulation -- the exact failure mode that caused the OD metadata drift discovered only by the 58-agent comprehensive audit (WEAVER-SYNTHESIS Pattern 1).

**Per-wave timing:**
```
Wave 1A: Builders complete -> Scribe updates provenance -> Spot-Checker verifies -> Wave gate check
Wave 1B: Same flow (can reuse same spot-checker agent or spawn new lightweight agent)
Wave 1C: Same flow
```

**Design decision: reuse vs new agent per wave:**
- Option A: Same agent across all 3 waves (saves spawn cost, but agent accumulates context)
- Option B: New lightweight agent per wave (clean context each time, but +2 agents total)
- **Recommendation:** Option A (same agent), because 6 binary checks x 3 waves = 18 total checks. This fits easily in one agent's context without accumulation problems. [BINARY rule: "use same agent if total checks < 50"]

---

## 6. THE 12 PLANTED VIOLATIONS TESTING FRAMEWORK

### 6.1 Complete Planted Violation Inventory

| # | Violation | Target File | Planted When | Checked By | Removed When |
|---|-----------|-------------|-------------|-----------|-------------|
| B1 | `border-radius: 4px` on one callout | 1 AD HTML file | Before Phase 2 | Visual + Structural Auditor | Before Phase 3 |
| B2 | `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` on one code block | 1 AD HTML file | Before Phase 2 | Visual + Structural Auditor | Before Phase 3 |
| B3 | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1))` on one header | 1 AD HTML file | Before Phase 2 | Visual + Structural Auditor | Before Phase 3 |
| B4 | Off-palette color `#FF6B35` on one label | 1 AD HTML file | Before Phase 2 | Visual + Structural Auditor | Before Phase 3 |
| B5 | `border: 2px solid #E0D5C5` on one section divider | 1 AD HTML file | Before Phase 2 | Structural Auditor (border sweep) | Before Phase 3 |
| C1 | One T1-labeled value that contradicts OD-CONVENTION-SPEC.md (e.g., `border-radius: 4px` labeled T1) | AD-CONVENTION-SPEC.md | Before Convention Auditor runs | Convention Auditor (CA-15) | Before Gate 0 passes |
| C2 | One T2 value missing its rationale | AD-CONVENTION-SPEC.md | Before Convention Auditor runs | Convention Auditor (CA-02 extended) | Before Gate 0 passes |
| C3 | One missing responsive collapse rule for AD-003 | AD-CONVENTION-SPEC.md | Before Convention Auditor runs | Convention Auditor (CA-10) | Before Gate 0 passes |
| P1 | Finding ID outside reserved range (e.g., Builder-A uses AD-F-015) | AD-outbound-findings.md | Before Phase 2 | Provenance Auditor (PA-04) | Before Phase 3 |
| P2 | Citation to non-existent finding ID (e.g., "Applied R4-999") | Research Application Record in 1 AD HTML | Before Phase 2 | Provenance Auditor (PA-07) | Before Phase 3 |
| P3 | Count mismatch: manifest says 14 findings, actual file has 12 | PIPELINE-MANIFEST.md | Before Phase 2 | Provenance Auditor (PA-09) | Before Phase 3 |
| R1 | One R-4 finding obviously assigned to wrong AD (e.g., "F-pattern reading" assigned to AD-004 Spiral) | R-4-AD-EVALUATION.md | Before Research Auditor runs | Research Auditor (RA-05 spot-check) | Before Gate 0 passes |

### 6.2 Which Auditor Types Each Violation Tests

| Auditor Type | Violations Testing It | Expected Detection |
|-------------|----------------------|-------------------|
| Visual Auditor | B1, B2, B3, B4 | 4/4 (highly visible soul violations) |
| Structural Auditor | B1, B2, B3, B4, B5 | 5/5 (programmatic sweep catches all) |
| Convention Auditor | C1, C2, C3 | 3/3 (binary checks against spec) |
| Provenance Auditor | P1, P2, P3 | 3/3 (binary checks against data) |
| Research Auditor | R1 | 0/1 or 1/1 (probabilistic -- depends on spot-check sample) |

### 6.3 How to Verify Auditors Are Working

**Phase 0 verification (Convention + Research):**
1. Lead plants C1, C2, C3 in AD-CONVENTION-SPEC.md and R1 in R-4-AD-EVALUATION.md
2. Convention Auditor runs -> Lead checks report for C1/C2/C3 detection
3. Research Auditor runs -> Lead checks report for R1 detection (probabilistic)
4. Lead removes all Phase 0 plants before Gate 0 passes
5. **Scoring:** Convention: 3/3 required. Research: 0/1 acceptable (spot-check is probabilistic), 1/1 is bonus.

**Phase 2 verification (Build + Provenance):**
1. Lead plants B1-B5 in AD HTML files and P1-P3 in provenance docs BEFORE spawning Phase 2 audit agents
2. After audit completes, Lead checks Visual/Structural reports for B1-B5 detection
3. Lead checks Provenance report for P1-P3 detection
4. Lead removes all Phase 2 plants before Phase 3 fix agents spawn
5. **Scoring:**
   - Build: 5/5 = high confidence, 3-4/5 = investigate blind spots, <3/5 = audit methodology is non-functional
   - Provenance: 3/3 = high confidence, 2/3 = one blind spot, <2/3 = provenance auditor is non-functional

### 6.4 The Verification-Audit Gap: Missing Scribe Plants

The verification-audit (GAP in Section 8.5) identified that the Scribe Spot-Checker has 0 planted violations. To complete coverage:

| # | Violation | Target | Tested By |
|---|-----------|--------|-----------|
| S1 | Scribe writes "Wave 1: 3 findings generated" when builders actually generated 2 | RESEARCH-ACTIVE.md | Scribe Spot-Checker SC-04 |
| S2 | Scribe omits one inline threading header on a new file | New AD HTML file | Scribe Spot-Checker SC-03 |

**Implementation note:** S1 and S2 must be planted by Lead AFTER the scribe completes and BEFORE the spot-checker runs. This timing is tight. Alternative: Lead pre-corrupts the file the scribe will update, so the scribe's correct update overwrites the corruption -- if the spot-checker still sees corruption, the scribe didn't actually update the file. This tests scribe COMPLETENESS rather than scribe accuracy. [BINARY]

**Updated total: 14 planted violations across 5 auditor types.**

### 6.5 Plant Timing Coordination Protocol

The verification-audit (Section 1.4, weakness 2) identified a workflow gap: if planted violations cause FAIL results, and then Lead removes plants, does the audit report need re-running?

**Resolution:** NO. The audit report stands with its FAIL results. Lead manually annotates the report: "FAIL items B1-B5, P1-P3 are PLANTED VIOLATIONS (detected successfully). Remaining FAIL items are GENUINE findings requiring fixes." This annotation is written as a new section at the end of the audit report AFTER plant removal. The genuine FAIL items proceed to fix phase. The planted items are recorded as "audit calibration" data. [BINARY process: annotate then proceed]

---

## 7. SCRIBE SPOT-CHECKER: INLINE PER-WAVE EXECUTION MODEL

### 7.1 Why Inline, Not Batch

**Historical evidence:** The OD comprehensive audit discovered 5 provenance findings (WEAVER-SYNTHESIS Pattern 1: "Post-Re-Enrichment Metadata Drift") that accumulated across waves because no per-wave provenance check existed. The 43-agent re-enrichment produced correct HTML but stale chain documents. This drift was invisible until a 58-agent audit.

**Inline execution prevents drift accumulation.** By checking scribe output after each wave, errors are caught when they're 1 wave old (cheap to fix), not 3 waves old (requires re-tracing all provenance).

### 7.2 Per-Wave Execution Flow

```
WAVE 1A:
  1. Builder-A and Builder-B complete AD-001 and AD-002 [~40 min]
  2. Scribe updates RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md, inline threading headers [~10 min]
  3. Scribe Spot-Checker spawns (or resumes if reusing agent)
  4. Spot-Checker reads:
     - Builder-A's output (AD-001.html) -- counts findings, checks header
     - Builder-B's output (AD-002.html) -- same
     - Scribe's updated files -- checks modifications match builder output
  5. Spot-Checker runs 6 binary checks (SC-01 through SC-06)
  6. Spot-Checker writes: SCRIBE-SPOT-CHECK-WAVE1A.md [~5 min]
  7. Lead reads spot-check report
  8. If all PASS -> proceed to Wave 1B identity delta + wave gate
  9. If any FAIL -> Lead sends specific failures to Scribe for correction before wave gate

WAVE 1B: Same flow for AD-003 and AD-004
WAVE 1C: Same flow for AD-005 and AD-006
```

### 7.3 The 6 Binary Checks (Detailed)

| Check | What It Verifies | How | Classification |
|-------|-----------------|-----|---------------|
| SC-01 | RESEARCH-ACTIVE.md updated with this wave's applications | Check that R-4/R-2/EXT citation entries for this wave's ADs exist in the file | **BINARY** |
| SC-02 | EXT-RESEARCH-REGISTRY.md updated if new EXT-* generated | If builders generated new EXT-AXIS-* findings, check they appear in registry | **BINARY** |
| SC-03 | Inline threading headers on new files match standard format | Pattern match: header starts with `<!--`, contains `PROVENANCE`, contains `PHASE: AD` | **BINARY** |
| SC-04 | Finding count in AD-outbound-findings.md matches builder-reported count | Count AD-F entries for this wave's builders, compare against builders' completion reports | **BINARY** |
| SC-05 | No stale data in updated files (counts match actual file content) | If RESEARCH-ACTIVE.md says "R-4: 35 cited", count actual R-4 citations in AD HTML files built so far | **BINARY** |
| SC-06 | Scribe wrote output file (existence check) | Scribe's completion report file exists | **BINARY** |

### 7.4 What Happens When Spot-Check Fails

| Failure | Response | Who |
|---------|----------|-----|
| SC-01 FAIL | Scribe re-opens RESEARCH-ACTIVE.md and adds missing entries | Scribe (respawned or messaged) |
| SC-02 FAIL | Scribe re-opens EXT-RESEARCH-REGISTRY.md and adds missing entries | Scribe |
| SC-03 FAIL | Lead directly adds/corrects the inline threading header (trivial fix) | Lead |
| SC-04 FAIL | Investigate: did scribe miss a finding, or did builder report incorrectly? | Lead compares builder output vs outbound-findings.md |
| SC-05 FAIL | Scribe recounts and corrects | Scribe |
| SC-06 FAIL | Scribe didn't write file -- respawn with simplified prompt | Lead |

---

## 8. THE METACOGNITION CHECK: EVERY RULE IN THIS DOCUMENT CLASSIFIED

The analysts themselves proposed 15+ new judgment rules while citing the principle that judgment rules get ~0% agent compliance. This section classifies EVERY major rule or instruction in this document.

### 8.1 Rules in This Document That Are Binary

| Rule | Section | Classification | Rationale |
|------|---------|---------------|-----------|
| Gate classification table (all gates listed) | 1.1-1.8 | **BINARY** | Each gate tagged BINARY, JUDGMENT, or HIDDEN-JUDGMENT -- the tagging itself is a completed classification, not an ongoing rule |
| "Citation must contain finding ID + target CSS selector + specific CSS property" | 3.3 Layer 1 | **BINARY** | Structural format check |
| "Cited finding ID exists in source research file" | 3.3 Layer 2 | **BINARY** | File lookup |
| "Cited CSS selector matches actual element in HTML" | 3.3 Layer 2 | **BINARY** | DOM query |
| Convention Auditor: 16 binary checks | 4.2 | **BINARY** | Each check defined as PASS/FAIL |
| Provenance Auditor: 12 binary checks | 5.3 | **BINARY** | Each check defined as PASS/FAIL |
| Research Auditor: 10 binary checks | 5.1 | **BINARY** | Each check defined as PASS/FAIL |
| Scribe Spot-Checker: 6 binary checks | 5.4, 7.3 | **BINARY** | Each check defined as PASS/FAIL |
| 12 planted violations: detection scoring | 6.2 | **BINARY** | Detection count |
| Scribe Spot-Check inline timing | 7.2 | **BINARY** | After-scribe, before-gate ordering |

### 8.2 Rules in This Document That Are Judgment

| Rule | Section | Classification | Why It Cannot Be Binarized | Mitigation |
|------|---------|---------------|---------------------------|-----------|
| "Fresh-eyes observations are compared against citation claims" | 3.3 Layer 3 | **JUDGMENT** | Comparing two subjective assessments requires interpretation | Accepted as JUDGMENT; terminates at human review |
| "UNIQUE FRESH" novelty determination (even with binary conversion) | 2.8 | **RESIDUAL JUDGMENT** | The binary conversion (triple-match on element+property+type) catches most overlap but edge cases where findings describe the same gestalt observation in different terms will not be caught | Accepted; threshold of >= 3 provides margin |
| "Reconciliation" entry quality for contradictions | 2.9 | **RESIDUAL JUDGMENT** | Weaver's reconciliation must explain WHY one assessment is authoritative, which requires reasoning about measurement planes | Accepted; Weaver is the only agent with full cross-pillar context |
| "Does this render correctly?" (even after binary conversion) | 2.3 | **RESIDUAL JUDGMENT** | The 7 binary sub-checks catch structural failures but not perceptual ones (e.g., "this looks broken even though all values are correct") | Delegated to Fresh-Eyes as gestalt check |
| Research Auditor RA-06: "plausible" mapping | 5.1 | **RESIDUAL JUDGMENT** | Even with keyword-match operationalization, some findings map to multiple ADs equally well | Accepted; spot-check is probabilistic by design |

### 8.3 Rules in This Document That Are Hidden-Judgment (Now Exposed)

| Rule | Section | Original Form | Exposed Judgment Component | Binary Conversion Applied? |
|------|---------|--------------|--------------------------|--------------------------|
| GATE 0-03 | 1.1, 2.1 | "shows content" | Distinguishing real content from error/loading states | YES -- converted to 3 programmatic checks |
| GATE 0-07 | 1.1, 2.2 | "all values labeled T1/T2" | Label accuracy vs label presence | YES -- split into presence check + spot-check |
| GATE 0-08 | 1.1, 2.3 | "renders correctly" | Undefined "correctly" | YES -- converted to 7 programmatic checks (1440 + 768) |
| GATE W-03 | 1.2, 2.4 | "matches spec" | Complex value interpretation | YES -- defined as character-for-character match on computed values |
| GATE W-09 | 1.2, 2.5 | "font trio correct" | WHERE and WHEN to check | YES -- 3 specific checks with mandatory fonts.ready |
| GATE W-10 | 1.2, 2.6 | "record present" | Accuracy vs presence | PARTIALLY -- presence remains binary; accuracy delegated to PA-07/PA-08 |
| GATE W-11 | 1.2, 2.7 | "evidence" | Evidence quality | YES -- evidence defined as structural format (3 required fields) |
| GATE 4-03 | 1.3, 2.8 | "UNIQUE" | Novelty assessment | YES -- defined as triple-match non-collision |
| GATE 4-06 | 1.3, 2.9 | "contradictions" | Disagreement vs different perspectives | YES -- defined as same-element-same-property collision |
| GATE 5-04 | 1.4, 2.10 | "visual PASS" | Before/after comparison | PARTIALLY -- primary gate is programmatic re-check; screenshot is secondary |
| GATE 6-01 | 1.5, 2.11 | "scored >= 32" | Scoring rubric undefined | YES -- 40-item binary rubric defined |
| GATE 6-10 | 1.5, 2.12 | "application rate" | Citation genuineness | PARTIALLY -- rate is binary count; genuineness delegated to PA spot-checks |

### 8.4 The Fresh-Eyes Exception

The skeleton declares: "Every constraint must be expressible as 'DO X' or 'DO NOT do X' -- never 'consider whether X.'" But it also creates Fresh-Eyes, an agent whose ENTIRE PURPOSE is judgment.

**This is not a contradiction. It is an explicit architectural decision:**

The system has two layers:
1. **Compliance layer:** All rules are binary. All agents follow binary rules. 100% expected compliance.
2. **Quality layer:** One agent (Fresh-Eyes) is explicitly designated for judgment. Its findings are RECOMMENDATIONS, not gates. No gate depends solely on Fresh-Eyes judgment (GATE 4-03 depends on COUNT of findings, which is binary, not on their QUALITY).

This design means:
- A system that passes all binary gates but has poor design quality will PASS all gates and ALSO have a Fresh-Eyes report flagging quality concerns for human review
- The human reviews Fresh-Eyes findings and decides whether to act on them
- The system never blocks on judgment -- it routes judgment to human attention

**Classification of the Fresh-Eyes Exception itself:** This paragraph is META-DESCRIPTIVE. The exception is ARCHITECTURAL (a design decision, not a rule). The Fresh-Eyes agent's prompt rules are BINARY ("answer these 5 questions per page"). The Fresh-Eyes agent's FINDINGS are JUDGMENT. The distinction is enforced by separating the agent's PROCESS (binary) from its OUTPUT (judgment). [BINARY process, JUDGMENT output -- explicitly separated]

---

## 9. SUMMARY STATISTICS

### 9.1 Total Gate Count

| Phase | Gates | Binary | Hidden-Judgment | Pure Judgment |
|-------|-------|--------|-----------------|---------------|
| Gate 0 (Setup) | 17 | 13 | 4 | 0 |
| Gates 1-3 (Build, per wave) | 16 | 11 | 5 | 0 |
| Gates 1-3 (Build, x3 waves) | 48 | 33 | 15 | 0 |
| Gate 4 (Audit) | 11 | 9 | 2 | 0 |
| Gate 5 (Fix) | 10 | 9 | 1 | 0 |
| Gate 6 (Stage Complete) | 13 | 11 | 2 | 0 |
| **TOTAL** | **99** | **75 (76%)** | **24 (24%)** | **0 (0%)** |

### 9.2 After Binary Conversions Applied

| Phase | Original Hidden-Judgment | Fully Converted | Residual Judgment | Net Binary |
|-------|-------------------------|-----------------|-------------------|------------|
| Gate 0 | 4 | 3 (0-03, 0-07, 0-08) | 1 (CA-14 render quality) | 16/17 |
| Gates 1-3 (per wave) | 5 | 3 (W-03, W-09, W-11) | 2 (W-10 accuracy, VA-12 dead zones) | 14/16 |
| Gate 4 | 2 | 2 (4-03 unique, 4-06 contradiction) | 0 | 11/11 |
| Gate 5 | 1 | 1 (5-04 programmatic primary) | 0 | 10/10 |
| Gate 6 | 2 | 1 (6-01 scoring rubric) | 1 (6-10 citation genuineness) | 12/13 |
| **TOTAL** | **24** | **18 converted** | **6 residual** | **93/99 (94%)** |

### 9.3 The Residual 6%

The 6 remaining residual-judgment gates are:
1. CA-14: Soul template render quality (delegated to programmatic sub-checks but perceptual edge cases remain)
2. W-10: Research Application Record accuracy (delegated to PA spot-checks)
3. VA-12: Dead zone detection (inherently perceptual; OD Fix #7 proved false positives possible)
4. VA-09: Responsive "functional" (partially binarized; layout quality at 768px remains judgment)
5. VA-03: Element misalignment (partially binarized; fine-grained alignment is perceptual)
6. 6-10: Citation genuineness (delegated to PA spot-checks)

**These 6 are ACCEPTED as judgment-containing.** They are delegated to:
- Programmatic spot-checks (catches worst cases) [BINARY]
- Fresh-Eyes gestalt evaluation (catches perceptual cases) [JUDGMENT -- explicitly labeled]
- Human review post-session (final authority) [HUMAN-TERMINAL]

### 9.4 The Bottom Line

**94% of all AD gates are fully binary after conversion.** The remaining 6% contain residual judgment that is EXPLICITLY LABELED, DELEGATED to appropriate mechanisms (spot-checks + Fresh-Eyes + human), and NEVER used as sole blockers for gate passage. No gate depends on judgment alone. Every gate has a binary primary check, even if a judgment secondary check provides additional signal.

---

**END OF RULE CLASSIFICATION**

**Total: ~700 lines**
**Gates classified: 99 (across Phases 0-4 + verification topology additions + auditor sub-gates)**
**Binary conversions proposed: 18 (for previously hidden-judgment gates)**
**Anti-citation-theater regress: resolved with 3-layer binary-then-judgment strategy**
**Convention Auditor: fully defined (16 checks, 20:1 ROI, file-only, inline Phase 0)**
**All 4 auditors: defined with scope, trigger, pass/fail criteria, input files, output files**
**Planted violations: 14 total across 5 auditor types (12 original + 2 scribe additions)**
**Scribe Spot-Checker: inline per-wave execution model with 6 binary checks**
**Metacognition check: every rule in this document classified as BINARY, JUDGMENT, or META-DESCRIPTIVE**
