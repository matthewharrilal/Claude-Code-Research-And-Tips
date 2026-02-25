# Gate Runner Specification — Human-Readable Gate Reference
Date: 2026-02-25
Extracted from: artifact-gate-runner-MONOLITHIC.md
Authority: Council Verdict (2026-02-23), Wave 0 Surgery (2026-02-25)

---

## Purpose

Human-readable specification for every gate: ID, name, tier, what it checks, pass/fail criteria, threshold values. No executable code. For code, see `gate-runner-core.js`.

---

## Gate Categorization

| Category | Gates | Count | Verdict Impact |
|----------|-------|-------|----------------|
| **REQUIRED** | GR-01–GR-06, GR-08–GR-11, GR-13–GR-15, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64, GR-48 | 20 | ANY FAIL blocks verdict |
| **RECOMMENDED** | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 | 9 | 3+ FAIL = REBUILD |
| **ADVISORY** | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 | 7 | Informational only |
| **BRIEF VERIFICATION** | BV-01 through BV-04 | 4 | ANY FAIL = return brief to assembler |

**Total executable gates: 42** (20 REQUIRED + 9 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)

---

## Execution Protocol

1. Orchestrator serves HTML via HTTP, opens Playwright session at 1440px
2. Execute REQUIRED gates (GR-01–GR-06, GR-08–GR-11, GR-13–GR-15, GR-44, GR-60)
3. Execute RECOMMENDED anti-pattern gates (GR-17 through GR-22, GR-45, GR-51)
4. Execute RECOMMENDED measurement gates (GR-52) and ADVISORY gates (GR-46, GR-50, GR-53)
5. Responsive gates re-run at 768px
6. Results collected as structured JSON
7. GR-48 (Gate Coverage Completeness) runs LAST
8. GR-49 (Result File Integrity) runs as process check on output file

## Output Schema

```json
{
  "gate": "GR-XX",
  "name": "Human-readable gate name",
  "status": "PASS | FAIL",
  "measured": { },
  "threshold": { },
  "evidence": "FACT | OBSERVED | CONFOUNDED | THEORETICAL"
}
```

## Verdict Logic

- ANY identity gate (GR-01–GR-06, GR-08–GR-10) FAIL = REBUILD (unless ALL failures are MECHANICAL — <=5 CSS lines, no HTML change, no design decision)
- ANY perception gate (GR-11, GR-13–GR-15, GR-44, GR-60) FAIL = REFINE (targeted CSS fix)
- GR-63 FAIL = REFINE (send back to builder to perform experiential self-check)
- GR-64 FAIL = if weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE
- 3+ recommended gates FAIL = REBUILD
- GR-48 FAIL = INCOMPLETE
- All gates PASS = proceed to PA audit

---

## SECTION 1: IDENTITY GATES (REQUIRED)

| Gate | Name | Threshold | Evidence |
|------|------|-----------|----------|
| GR-01 | Border Radius Zero | All computed border-radius = 0px | FACT |
| GR-02 | Box Shadow None | All computed box-shadow = none | FACT |
| GR-03 | Container Width | 940px <= max-width <= 960px | FACT |
| GR-04 | No Gradients | Zero elements with gradient in backgroundImage | FACT |
| GR-05 | Warm Palette | All colors within palette, no cold colors (B > R+10 AND B > G+10) | FACT |
| GR-05b | Sub-Perceptual Cold (ADVISORY) | Reports cold colors within sub-perceptual range (B > R, B > G, but delta <= 10). Informational only. | OBSERVED |
| GR-06 | Font Trinity | Only Instrument Serif, Inter, JetBrains Mono. Checked via `document.fonts.check()` (rendered fonts, not declared). All 3 present. | FACT |
| GR-07 | No Pure B/W | Zero instances of #000000 or #FFFFFF (rgb 0,0,0 or 255,255,255) | FACT |

> **Note (Wave 0):** GR-07 demoted from REQUIRED to RECOMMENDED. Consolidated with GR-05 warm palette check — GR-05 catches cold colors, GR-07 catches pure B/W. Both identity-related but GR-07 is lower priority.
| GR-08 | No Decorative Elements | Zero standalone hrs, empty spacer divs, icon-only decorative elements | OBSERVED |
| GR-09 | Border Weight Hierarchy | 4px primary (3.5-4.5), 3px secondary (2.5-3.5), 1px tertiary (0.5-1.5) | FACT |
| GR-10 | Cross-Page DNA | Skip link, heading hierarchy, callout 4px border, ::selection red, :focus-visible 3px, p max-width 70ch, body line-height >= 1.6, h3 italic, header dark bg + red 3px border | FACT |

---

## SECTION 2: PERCEPTION GATES (REQUIRED)

| Gate | Name | Threshold | Evidence |
|------|------|-----------|----------|
| GR-11 | Background Delta | Adjacent zone bg delta >= 15 RGB (max channel difference) | PROVEN |
| GR-13 | Stacked Gap (CSS) | CSS property sum (mb + pb + mt + pt) at boundaries <= 120px | PROVEN |
| GR-14 | Stacked Gap (Visual) | getBoundingClientRect gap at boundaries <= 150px (structural transitions excluded). Uses `:scope >` parent scoping. | OBSERVED |
| GR-15 | Single Margin | No single margin/padding value > 96px | PROVEN |
| GR-44 | Trailing Void | Distance from last visible content to body bottom <= 300px. Uses `scrollHeight - scrollTop`. | OBSERVED |
| GR-60 | WCAG Contrast | All text meets WCAG 2.1 AA contrast ratios (4.5:1 normal, 3:1 large) | FACT |

> **Note (Wave 0):** GR-12 (letter-spacing check) absorbed into GR-18 (ghost mechanisms). Sub-perceptual letter-spacing is now detected as a ghost mechanism, not a standalone gate.

**GR-13 and GR-14 are COMPLEMENTARY:** GR-13 checks CSS property sums, GR-14 checks visual measurement. Both needed because individual CSS values can pass while stacked visual gap exceeds limits.

---

## SECTION 3: ANTI-PATTERN GATES

| Gate | Name | Tier | Threshold | Evidence |
|------|------|------|-----------|----------|
| GR-17 | AP-01 Density Stacking | RECOMMENDED | Content padding >= 12px, table cell >= 4px | OBSERVED |
| GR-18 | AP-09 Ghost Mechanisms | RECOMMENDED | Zero sub-perceptual borders (<0.5px) or opacity (<0.1) | OBSERVED |
| GR-19 | AP-10 Threshold Gaming | ADVISORY | <50% of bg deltas at floor (15-17 RGB) | OBSERVED |
| GR-20 | AP-11 Structural Echo | RECOMMENDED | <3 consecutive sections with identical bg+padding+border | OBSERVED |
| GR-21 | AP-14 Cognitive Overload | ADVISORY | <= 6 distinct bg colors per 900px viewport slice | THEORETICAL |
| GR-22 | AP-02 Color Zone Conflict | ADVISORY | Primary red used for borders/emphasis, not backgrounds (<=2 bg uses). Skip-link elements exempted. | OBSERVED |

---

## SECTION 4: OUTPUT VERIFICATION GATES

| Gate | Name | Tier | Threshold | Evidence |
|------|------|------|-----------|----------|
| GR-43 | Self-Evaluation Comment | RECOMMENDED | HTML contains `<!-- SELF-EVALUATION:` comment | OBSERVED |
| GR-50 | Conviction Statement | ADVISORY | `<!-- CONVICTION:` comment with >= 3 sentences | THEORETICAL |

---

## SECTION 5: MODE DETECTION GATES (ADVISORY, Diagnostic Only)

| Gate | Name | Tier | What It Reports | Evidence |
|------|------|------|----------------|----------|
| GR-33 | CSS Naming Mode | ADVISORY | Position-based = Applied; Concept-based = Composed | OBSERVED |
| GR-34 | Component Modulation | ADVISORY | Same component varies across zones = Composed mode indicator | OBSERVED |

---

## SECTION 6: WAVE 2 GATES

| Gate | Name | Tier | Threshold | Evidence |
|------|------|------|-----------|----------|
| GR-45 | Typography Variation | RECOMMENDED | >= 2 distinct H2 font-size bands (4px tolerance). Fallback to H2+H3 if <3 H2s. | OBSERVED |
| GR-46 | Print Stylesheet | ADVISORY | >= 1 @media print rule in stylesheets | THEORETICAL |
| GR-48 | Gate Coverage | REQUIRED | All 19 REQUIRED gates have results (excl. GR-48 itself) + >= 5/9 RECOMMENDED | OBSERVED |
| GR-49 | Result File Integrity | RECOMMENDED | Exactly 1 result file, consistent IDs, no duplicates | OBSERVED |
| GR-51 | Bg Delta Distribution | RECOMMENDED | >= 50% of deltas >= 25 RGB, stddev >= 8, middle boundaries have high deltas | OBSERVED |
| GR-52 | Section Height Variation | RECOMMENDED | >= 3 distinct height bands (50px tolerance) | OBSERVED |
| GR-53 | Density Arc Direction | ADVISORY | Densest section is not first or last | THEORETICAL |

---

## SECTION 7: WAVE 4 — EXPERIENTIAL ENFORCEMENT GATES

> **Motivation (Gas Town Incident):** The pipeline ranked illegible chart text as Fix #5 behind 4 imperceptible CSS issues. The pipeline detected the problem but did not understand it mattered more than everything else, because it operated in analyst mode (measuring CSS properties) rather than reader mode (attempting to use the page). These gates enforce experiential quality verification at the structural level.

| Gate | Name | Tier | Threshold | Evidence |
|------|------|------|-----------|----------|
| GR-61 | DPR Validation | REQUIRED | `window.devicePixelRatio === 1` before screenshot capture. If DPR > 1, recreate browser context with `{ deviceScaleFactor: 1 }`. Do NOT divide viewport by DPR (viewport is CSS pixels). BLOCKING if uncorrectable. | FACT |
| GR-62 | Screenshot Quality | REQUIRED | Per viewport (1440/1024/768): minimum 3 PNG files per directory, no more than 2 consecutive blank screenshots, blank ratio <= 20%. Blank = file size < 5KB. BLOCKING if fail. | OBSERVED |
| GR-63 | Builder Experiential Marker | REQUIRED | HTML contains `<!-- EXPERIENTIAL-CHECK: [text] -->` with text >= 100 chars mentioning legibility + visual clarity + structural reference (zone/section/header/footer). Evidence of builder Step 5.0 self-use. | OBSERVED |
| GR-64 | Usability Priority Verification | REQUIRED | If >= 3/9 auditors flagged usability issues (cannot read/illegible/unreadable/cannot use), Weaver Fix #1 must contain usability-related term. Auto-passes if < 3 auditors flagged. If FAIL and weaver verdict is SHIP/SHIP WITH FIXES, downgrade to REFINE. | OBSERVED |

**Execution points:**
- GR-61: Runs in orchestrator Playwright session BEFORE screenshot capture (Step 2.5)
- GR-62: Runs in orchestrator on filesystem AFTER screenshot capture, BEFORE PA deployment (Step 2.7)
- GR-63: Runs inside `runGateRunner(page)` alongside GR-43 — DOM check (Step 2)
- GR-64: Runs in orchestrator AFTER Weaver report, as text scan (Step 5.5)

**Blocking behavior:**
- GR-61 FAIL → Do NOT capture screenshots. Recreate browser context with `{ deviceScaleFactor: 1 }`.
- GR-62 FAIL → Do NOT deploy PA auditors. Re-capture screenshots.
- GR-63 FAIL → REFINE verdict. Send back to builder to perform genuine experiential self-check.
- GR-64 FAIL → If weaver said SHIP/SHIP WITH FIXES, downgrade to REFINE.

---

## GATE SUMMARY TABLE

| Gate ID | Category | Tier | Phase | Executable |
|---------|----------|------|-------|------------|
| BV-01 | Brief Verification | REQUIRED | Pre-build | Text parsing |
| BV-02 | Brief Verification | REQUIRED | Pre-build | Text parsing |
| BV-03 | Brief Verification | REQUIRED | Pre-build | Text parsing |
| BV-04 | Brief Verification | REQUIRED | Pre-build | Text parsing |
| GR-01 | Identity | REQUIRED | Post-build | Playwright |
| GR-02 | Identity | REQUIRED | Post-build | Playwright |
| GR-03 | Identity | REQUIRED | Post-build | Playwright |
| GR-04 | Identity | REQUIRED | Post-build | Playwright |
| GR-05 | Identity | REQUIRED | Post-build | Playwright |
| GR-05b | Identity | ADVISORY | Post-build | Playwright |
| GR-06 | Identity | REQUIRED | Post-build | Playwright |
| GR-07 | Identity | RECOMMENDED | Post-build | Playwright |
| GR-08 | Identity | REQUIRED | Post-build | Playwright |
| GR-09 | Identity | REQUIRED | Post-build | Playwright |
| GR-10 | Identity | REQUIRED | Post-build | Playwright |
| GR-11 | Perception | REQUIRED | Post-build | Playwright |
| GR-13 | Perception | REQUIRED | Post-build | Playwright |
| GR-14 | Perception | REQUIRED | Post-build | Playwright |
| GR-15 | Perception | REQUIRED | Post-build | Playwright |
| GR-17 | Anti-pattern | RECOMMENDED | Post-build | Playwright |
| GR-18 | Anti-pattern | RECOMMENDED | Post-build | Playwright |
| GR-19 | Anti-pattern | ADVISORY | Post-build | Playwright |
| GR-20 | Anti-pattern | RECOMMENDED | Post-build | Playwright |
| GR-21 | Anti-pattern | ADVISORY | Post-build | Playwright |
| GR-22 | Anti-pattern | ADVISORY | Post-build | Playwright |
| GR-33 | Mode Detection | ADVISORY | Post-build | Playwright |
| GR-34 | Mode Detection | ADVISORY | Post-build | Playwright |
| GR-43 | Output | RECOMMENDED | Post-build | Playwright |
| GR-44 | Perception | REQUIRED | Post-build | Playwright |
| GR-45 | Anti-pattern | RECOMMENDED | Post-build | Playwright |
| GR-46 | Accessibility | ADVISORY | Post-build | Playwright |
| GR-48 | Meta | REQUIRED | Post-build | JavaScript |
| GR-49 | Meta | RECOMMENDED | Post-build | Process check |
| GR-50 | Output | ADVISORY | Post-build | Playwright |
| GR-51 | Anti-pattern | RECOMMENDED | Post-build | Playwright |
| GR-52 | Measurement | RECOMMENDED | Post-build | Playwright |
| GR-53 | Measurement | ADVISORY | Post-build | Playwright |
| GR-60 | Perception | REQUIRED | Post-build | Playwright |
| GR-61 | Experiential | REQUIRED | Pre-screenshot | Playwright |
| GR-62 | Experiential | REQUIRED | Post-screenshot | Node.js filesystem |
| GR-63 | Experiential | REQUIRED | Post-build | Playwright |
| GR-64 | Experiential | REQUIRED | Post-weaver | JavaScript text scan |

**Tier totals (gate-runner scope):** 20 REQUIRED, 9 RECOMMENDED, 7 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 4 BRIEF = 42 executable gates

**NOTE (FIX-094):** GR-23 through GR-28 (precondition gates) and GR-33, GR-34 (mode detection) are documented here for reference. GR-23-28 are operationally reclassified as orchestrator decision rules (see `artifact-orchestrator.md` Section 9). GR-33 and GR-34 remain in gate-runner as ADVISORY diagnostic gates with Playwright code.

---

*For executable code: see `gate-runner-core.js`*
*For provenance and history: see `gate-runner-provenance.md`*
*For manifest and file TOC: see `gate-manifest.json`*
