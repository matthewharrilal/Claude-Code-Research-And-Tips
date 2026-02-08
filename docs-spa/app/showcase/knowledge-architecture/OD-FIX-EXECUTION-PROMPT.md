# OD FIX EXECUTION PROMPT
## Comprehensive Agent-Team Fix Plan for 89 Audit Findings Across 6 OD Explorations

**Can we use the agent teams?** This entire execution MUST use TeamCreate, TaskCreate, TaskUpdate, SendMessage, and the Task tool with `team_name` parameter. The Teams feature is mandatory infrastructure — not optional.

**Date:** 2026-02-07
**Source:** OD-GRANULAR-AUDIT-RESULTS.md (688 lines, 42KB, 89 findings)
**Evidence:** _od-audit-scratchpad/ (22 files, 528KB)
**Target Files:** 6 OD HTML explorations in `docs-spa/app/showcase/explorations/organizational/`
**Goal:** Fix all 17 prioritized items from the audit, then adversarially verify every fix landed

---

## TABLE OF CONTENTS

1. [First Actions (Do These Immediately)](#1-first-actions)
2. [Team Architecture](#2-team-architecture)
3. [The 17 Fix Items — Complete Specifications](#3-the-17-fix-items)
4. [Phase Execution Sequence](#4-phase-execution-sequence)
5. [Per-Agent Prompt Templates](#5-per-agent-prompt-templates)
6. [Adversarial Verification Protocol](#6-adversarial-verification-protocol)
7. [Compaction Survival Infrastructure](#7-compaction-survival-infrastructure)
8. [Hard Rules](#8-hard-rules)
9. [Inline Threading Header Absorption Protocol](#9-inline-threading-header-absorption-protocol)
10. [Soul Compliance Quick Reference](#10-soul-compliance-quick-reference)

---

## 1. FIRST ACTIONS

**Do these in order BEFORE spawning any agents:**

```
Step 1: TeamCreate with team_name "od-fix"
Step 2: Read OD-GRANULAR-AUDIT-RESULTS.md (the full 688-line report)
Step 3: Read OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (team execution lessons)
Step 4: Create FIX-STATE.md in _od-audit-scratchpad/ (compaction checkpoint)
Step 5: Create all 17+ tasks via TaskCreate
Step 6: Spawn agents per Phase A sequence (Section 4)
```

**FIX-STATE.md initial content:**
```markdown
# OD Fix Execution State
## Last Updated: [timestamp]
## Current Phase: SETUP
## Agents Spawned: 0
## Files Modified: 0/6
## Fixes Completed: 0/17

### Phase Status
- [ ] Phase A: Setup & Task Creation
- [ ] Phase B: Systemic Fixes (all 6 files)
- [ ] Phase C: Per-OD Targeted Fixes
- [ ] Phase D: Low-Priority Polish
- [ ] Phase E: Adversarial Verification
- [ ] Phase F: Commit

### Per-File Status
| File | Systemic Done? | Targeted Done? | Polish Done? | Verified? |
|------|---------------|----------------|--------------|-----------|
| OD-001 | | | | |
| OD-002 | | | | |
| OD-003 | | | | |
| OD-004 | | | | |
| OD-005 | | | | |
| OD-006 | | | | |

### Fix Item Tracker
| # | Priority | Description | Status | Agent | Notes |
|---|----------|-------------|--------|-------|-------|
| 1 | CRITICAL | OD-004 Essence font | | | |
| 2 | CRITICAL | OD-001/002 <main> landmark | | | |
| 3 | CRITICAL | OD-001/002 heading hierarchy | | | |
| 4 | HIGH | ALL callout label contrast | | | |
| 5 | HIGH | ALL 2px→3px structural borders | | | |
| 6 | HIGH | OD-004 tab ARIA | | | |
| 7 | HIGH | OD-004 dead zone removal | | | |
| 8 | HIGH | OD-003 remove accent-tan | | | |
| 9 | MEDIUM | OD-005 max-width 960→860 | | | |
| 10 | MEDIUM | OD-001/002/003 prefers-reduced-motion | | | |
| 11 | MEDIUM | OD-001/002/005/006 :focus-visible | | | |
| 12 | MEDIUM | ALL skip-to-content link | | | |
| 13 | MEDIUM | ALL inline <code> font fix | | | |
| 14 | LOW | ALL favicon | | | |
| 15 | LOW | ALL ::selection styling | | | |
| 16 | LOW | ALL @media print | | | |
| 17 | LOW | Standardize header meta layout | | | |
```

---

## 2. TEAM ARCHITECTURE

### Why Per-File Ownership (Not Per-Fix)

Each OD file is self-contained HTML with inline `<style>` — there are no shared CSS files. A "systemic fix" (e.g., upgrading 2px borders to 3px) means editing each file individually. **Per-file agent ownership eliminates file contention entirely.** Each agent owns their file(s), applies ALL fixes for those files (systemic + targeted + polish), and nobody else touches those files.

### Role Definitions

```
Lead (THIN orchestrator — zero building, zero Playwright, zero file reading beyond FIX-STATE.md)
│
├── Fixer-A: OD-001 + OD-002  (paired — share semantic HTML issues)
│   Fixes: #2, #3, #4, #5, #10, #11, #12, #13, #14, #15, #16
│   Files: OD-001-conversational.html, OD-002-narrative.html
│
├── Fixer-B: OD-003
│   Fixes: #4, #5, #8, #10, #12, #13, #14, #15, #16
│   Files: OD-003-task-based.html
│
├── Fixer-C: OD-004  (most complex — Essence font investigation + dead zone + ARIA)
│   Fixes: #1, #4, #5, #6, #7, #12, #13, #14, #15, #16
│   Files: OD-004-confidence.html
│
├── Fixer-D: OD-005 + OD-006  (paired — both have minimal targeted fixes)
│   Fixes: #4, #5, #9, #11, #12, #13, #14, #15, #16
│   Files: OD-005-spatial.html, OD-006-creative.html
│
├── Verifier-Visual: Screenshots before/after for key fixes
│   Method: Playwright screenshots at 1440px + 768px
│   Focus: Border upgrades visible? Contrast improved? Dead zone gone?
│
├── Verifier-Programmatic: DOM evaluation re-audit
│   Method: Playwright JS evaluation (same checks that found the issues)
│   Focus: Computed border-width, computed font-family, ARIA attributes present,
│          contrast ratios, max-width values
│
└── Weaver: Progress tracker (continuous)
    Maintains: FIX-STATE.md, tracks completion, cross-references agent outputs
```

### Agent Count: 7 (Lead + 4 Fixers + 2 Verifiers + Weaver = 8, but Lead is you)

### File Ownership Matrix

| Agent | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| Fixer-A | ✅ OWN | ✅ OWN | | | | |
| Fixer-B | | | ✅ OWN | | | |
| Fixer-C | | | | ✅ OWN | | |
| Fixer-D | | | | | ✅ OWN | ✅ OWN |

**No agent touches a file they don't own. Ever.**

---

## 3. THE 17 FIX ITEMS — COMPLETE SPECIFICATIONS

### CRITICAL FIXES (Must complete first)

#### Fix #1: OD-004 Essence Callout Font — INVESTIGATION REQUIRED

**Audit finding:** Both Essence callouts render in Inter (body font) with `font-style: normal` instead of Instrument Serif italic. Confirmed by 3 independent agents.

**IMPORTANT COMPLICATION:** The CSS source code at line 766-769 of OD-004 ALREADY declares:
```css
.callout--essence .callout__body {
  font-family: var(--font-display);  /* resolves to 'Instrument Serif' */
  font-style: italic;
  font-size: 15px;
}
```
And `--font-display` at line 182 IS `'Instrument Serif', Georgia, serif`.

**So the CSS declaration looks correct. But 3 audit agents independently observed Inter in computed styles.** This means one of:
1. A more specific CSS rule overrides `.callout--essence .callout__body` somewhere
2. The font fails to load in the Playwright environment (Google Fonts blocked)
3. There's a CSS cascade issue where the `body { font-family: var(--font-body) }` rule at line 241 wins due to inheritance path

**Agent instruction:** Use Playwright to:
1. Navigate to OD-004 served via HTTP (not file://)
2. Wait for fonts to load (`document.fonts.ready`)
3. Evaluate `getComputedStyle()` on both `.callout--essence .callout__body` elements
4. If computed font IS Instrument Serif italic → the audit had a font-loading issue → NO FIX NEEDED (just verify)
5. If computed font IS Inter/normal → investigate specificity chain, find the override, fix it
6. Verify by screenshot comparison with OD-006's essence callout (which the audit confirmed renders correctly)

**Expected location:** Lines 1291-1296 (first essence callout) and lines 1742-1747 (second essence callout)

**If a fix IS needed, the correct CSS should be:**
```css
.callout--essence .callout__body {
  font-family: 'Instrument Serif', Georgia, serif !important;  /* force if specificity issue */
  font-style: italic !important;
  font-size: 15px;
}
```
Only use `!important` if a specificity override is confirmed. Prefer fixing the cascade properly.

---

#### Fix #2: OD-001 + OD-002 — Add `<main>` Landmark

**Audit finding:** OD-001 and OD-002 are the only ODs without a `<main>` element. WCAG 2.4.1 Level A failure.

**Specification:**
- Wrap the primary content area in `<main role="main">` (role is redundant but harmless for older AT)
- Do NOT wrap the `<header>` or any page-level navigation in `<main>`
- The `<main>` should start after the page header and end before any page footer

**For OD-001:** Wrap from the first Q&A section through the end of content (before closing body scripts if any)
**For OD-002:** Wrap from Act I through Act IV/conclusion

**Reference:** OD-003 line ~1145+ already has `<main>` — use that as the structural model.

---

#### Fix #3: OD-001 + OD-002 — Semantic Heading Hierarchy

**Audit finding:** Both files use styled `<div>` elements for chapter titles, question headings, and section labels instead of semantic `<h2>`/`<h3>` elements.

**Specification:**
- Convert chapter titles to `<h2>` with the same CSS classes
- Convert question headings to `<h3>` (or `<h2>` if they're top-level within a chapter)
- Preserve all existing CSS classes and visual styling — the change is HTML semantics only
- Ensure heading levels are sequential (no jumping from h2 to h4)
- Do NOT change any visual appearance

**Implementation pattern:**
```html
<!-- BEFORE -->
<div class="chapter-title">Chapter 1: Getting Started</div>

<!-- AFTER -->
<h2 class="chapter-title">Chapter 1: Getting Started</h2>
```

Carry forward ALL existing class names and styles. Only the tag changes.

---

### HIGH FIXES

#### Fix #4: ALL 6 — Callout Label Contrast

**Audit finding:** Callout labels use accent colors (red, green, blue, etc.) at small size (~12px) on white/cream backgrounds, creating contrast ratios as low as 1.00:1. Affects ALL 6 ODs.

**Specification:** Change ALL `.callout__label` elements to use `color: var(--color-text)` (#1A1A1A) instead of the accent color. The accent color is ALREADY communicated by the 4px left border — the label text doesn't need to repeat it.

**CSS change in EACH file:**
```css
/* REMOVE these per-callout label color rules: */
.callout--info .callout__label { color: var(--accent-blue); }      /* DELETE */
.callout--tip .callout__label { color: var(--accent-green); }      /* DELETE */
.callout--gotcha .callout__label { color: var(--accent-coral); }   /* DELETE */
.callout--essence .callout__label { color: var(--color-primary); } /* DELETE */
/* etc. */

/* REPLACE with single rule: */
.callout .callout__label {
  color: var(--color-text);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

**Note:** Some ODs may have slightly different callout type names (insight/discovery/warning/note in OD-006). Find ALL `.callout__label` color rules and consolidate.

---

#### Fix #5: ALL 6 — Upgrade 2px Structural Borders to 3px

**Audit finding:** 108 CSS declarations across all 6 ODs use 1-2px borders where Rule 5 requires 3px for structural borders. Total 1,619 computed instances.

**CRITICAL DISTINCTION — Three border categories:**

| Category | Examples | Action |
|----------|----------|--------|
| 1. Structural (accent/frame) | Chapter titles, act headers, section frames, code block frames, enrichment cards, essence pullquote top/bottom, section dividers | **UPGRADE to 3px** |
| 2. Data separators | Table row borders, connector lines, timeline lines | **LEAVE as-is** (1px appropriate for data density) |
| 3. Micro-element | Badges, toggle buttons, copy buttons, inline code | **LEAVE as-is** (pragmatic at small scale) |

**How to identify Category 1 borders:**
- Any `border` on a component that occupies >200px width AND serves as a visual frame
- Any `border-top` or `border-bottom` used as a section divider
- Code block OUTER frame borders (not internal line separators)
- Callout non-left borders (top, right, bottom) if they exist
- Act/chapter/section header underlines

**Implementation:** Search each file for `border.*2px` and `border.*1px`, evaluate each against the 3-category system, upgrade Category 1 to `3px`.

**Per-OD rough counts (from audit):**
| OD | Category 1 to upgrade | Category 2+3 to leave |
|----|----------------------|----------------------|
| OD-001 | ~6-8 rules | ~8-10 rules |
| OD-002 | ~4-5 rules | ~4-5 rules |
| OD-003 | ~10-12 rules | ~13-15 rules |
| OD-004 | ~8-10 rules | ~9-11 rules |
| OD-005 | ~5-7 rules | ~10-12 rules |
| OD-006 | ~8-10 rules | ~12-14 rules |

---

#### Fix #6: OD-004 — Complete Tab ARIA

**Audit finding:** The 3 confidence tabs ("Facts Only" / "Full Analysis" / "Everything") have `role="tab"` but are missing `aria-controls`, `tabpanel`, `tabindex`, and `aria-selected` management.

**Specification:**
```html
<!-- Tab list -->
<div role="tablist" aria-label="Confidence filter">
  <button role="tab" id="tab-facts" aria-controls="panel-facts"
          aria-selected="true" tabindex="0">Facts Only</button>
  <button role="tab" id="tab-analysis" aria-controls="panel-analysis"
          aria-selected="false" tabindex="-1">Full Analysis</button>
  <button role="tab" id="tab-everything" aria-controls="panel-everything"
          aria-selected="false" tabindex="-1">Everything</button>
</div>

<!-- Tab panels -->
<div role="tabpanel" id="panel-facts" aria-labelledby="tab-facts">...</div>
<div role="tabpanel" id="panel-analysis" aria-labelledby="tab-analysis" hidden>...</div>
<div role="tabpanel" id="panel-everything" aria-labelledby="tab-everything" hidden>...</div>
```

**JavaScript requirements:**
- Arrow key navigation between tabs (left/right)
- `aria-selected` toggling on click/keyboard
- `tabindex` management (active tab = 0, inactive = -1)
- Show/hide panels via `hidden` attribute

---

#### Fix #7: OD-004 — Remove Dead Zone

**Audit finding:** Full-viewport dead zone at ~6881px scroll position. Entire screen of blank warm cream. Fresh-eyes called it "a page that forgot to have content."

**Investigation needed:** Measure the actual gap in CSS. Look for:
- Excessive `margin-bottom` on a stratum section
- Excessive `padding-top` on the next section
- A `min-height` or `height` on an empty container
- A positioned element creating extra space

**Fix:** Reduce the inter-stratum spacing to match other stratum boundaries (typically 80-120px, not an entire viewport height of 700-900px).

---

#### Fix #8: OD-003 — Remove `--accent-tan: #B8A080`

**Audit finding:** OD-003 introduces `--accent-tan: #B8A080` as a custom CSS variable. This color is NOT in the locked palette.

**Current locations in OD-003:**
- Line 204: `--accent-tan: #B8A080;` (declaration in `:root`)
- Line 676: `border-left-color: var(--accent-tan);` (on a callout type)
- Line 679: `color: var(--accent-tan);` (on a callout label)

**Fix:**
1. Remove `--accent-tan: #B8A080;` from `:root`
2. Replace `var(--accent-tan)` usage with `var(--color-border)` (#E0D5C5) for the border
3. Replace the label color with `var(--color-text)` per Fix #4 (consolidating all label colors)

---

### MEDIUM FIXES

#### Fix #9: OD-005 — Max-Width 960px → 860px

**Audit finding:** OD-005 uses `max-width: 960px` (lines 320 and 375) vs the spec-required 860px used by all other ODs.

**Fix:** Change both `max-width: 960px` declarations to `max-width: 860px`. The 2-column spoke layout will need verification after this change — ensure territory grids don't break at the narrower width.

---

#### Fix #10: OD-001, OD-002, OD-003 — Add `prefers-reduced-motion`

**Audit finding:** OD-004, OD-005, and OD-006 already have `prefers-reduced-motion`. OD-001 has 415 elements with `transition: all`.

**CSS to add (in the `<style>` block of each file):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

Place this at the END of the `<style>` block, before the closing `</style>` tag.

---

#### Fix #11: OD-001, OD-002, OD-005, OD-006 — Add `:focus-visible`

**Audit finding:** OD-003 and OD-004 already have `:focus-visible`. The other 4 ODs are missing it.

**CSS to add:**
```css
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

Place this near the top of the `<style>` block, after the `:root` variables.

---

#### Fix #12: ALL 6 — Skip-to-Content Link

**Audit finding:** No OD currently has a skip-to-content link. WCAG 2.4.1 Level A.

**HTML to add (immediately after opening `<body>` tag):**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

**CSS to add:**
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--bg-warm);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
  border: none;
}
.skip-link:focus {
  top: 0;
}
```

**Requirement:** The `<main>` element (or primary content container) must have `id="main-content"`. For OD-001 and OD-002, this aligns with Fix #2 (adding `<main>`). For OD-003 through OD-006, add the id to the existing `<main>` element.

---

#### Fix #13: ALL 6 — Inline `<code>` Font Fix

**Audit finding:** Bare `<code>` elements inside paragraphs, callouts, and prose fall back to generic `monospace` instead of JetBrains Mono. CSS targets `.code-block__code--*` classes but not bare `<code>`.

**CSS to add (in each file):**
```css
code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

Place near other typography rules. Do NOT apply to `.code-block code` — those should already be styled by their specific class selectors.

---

### LOW FIXES (Polish)

#### Fix #14: ALL 6 — Favicon

**HTML to add (in `<head>`):**
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23E83025'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='serif' font-size='20'>K</text></svg>">
```

Inline SVG data URI — red square with white serif "K". No external file needed. Sharp edges. On-brand.

---

#### Fix #15: ALL 6 — `::selection` Styling

**CSS to add:**
```css
::selection {
  background: var(--color-primary);
  color: var(--bg-warm);
}
```

---

#### Fix #16: ALL 6 — `@media print` Styles

**CSS to add:**
```css
@media print {
  body { background: white; color: black; }
  .skip-link, .scroll-witness, nav { display: none; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  * { box-shadow: none !important; }
}
```

---

#### Fix #17: Standardize Header Meta Layout

**Audit finding:** 4 different meta layout formats across 6 ODs.

**Decision needed by agent:** Pick Format B (horizontal inline with dots, used by OD-003 and OD-005) as the standard. Apply to OD-001, OD-002, and OD-004. Leave OD-006 unique as the synthesis document.

**Note:** This is the lowest priority and most subjective fix. If time runs out, skip this one. The other 16 are concrete.

---

## 4. PHASE EXECUTION SEQUENCE

### Phase A: SETUP (Lead only, ~2 minutes)

```
1. TeamCreate("od-fix")
2. Read OD-GRANULAR-AUDIT-RESULTS.md
3. Read OD-RETROSPECTIVE-AND-PROTOCOL-v2.md (skim — you know the lessons)
4. Create FIX-STATE.md in _od-audit-scratchpad/
5. TaskCreate for all 17 fix items
6. Proceed to Phase B
```

### Phase B: PARALLEL FIXES (All 4 Fixers launch simultaneously)

**Spawn all 4 Fixer agents at once using the Task tool with `team_name: "od-fix"`.**

Each Fixer receives:
- Their file assignment (Section 2 matrix)
- Their fix list (all fixes for their files)
- The complete fix specifications (Section 3) for their items
- The soul compliance quick reference (Section 10)
- Instructions to write a completion report to `_od-audit-scratchpad/fix-report-[agent].md`

**Fixer execution order within each agent:**
1. Read their assigned file(s) completely
2. Apply CRITICAL fixes first, then HIGH, then MEDIUM, then LOW
3. After each fix, verify it visually makes sense (read the surrounding code)
4. Write completion report listing every change made with line numbers
5. Return summary to lead

**IMPORTANT: Fixers work in parallel because they own different files. No contention.**

### Phase C: VERIFICATION (After ALL Fixers complete)

**Spawn Verifier-Visual and Verifier-Programmatic simultaneously.**

**Verifier-Visual:**
- Serve files via HTTP (`python3 -m http.server` from repo root)
- Screenshot each OD at 1440px width
- Screenshot each OD at 768px width
- Focus areas: callout labels legible? Borders 3px? OD-004 no dead zone? OD-005 narrower?
- Write report to `_od-audit-scratchpad/fix-verification-visual.md`

**Verifier-Programmatic:**
- For each OD file, run Playwright evaluations:
  - `document.querySelectorAll('.callout__label')` → check `getComputedStyle().color`
  - `document.querySelector('main')` → exists for ALL 6?
  - `document.querySelectorAll('[role="tab"]')` → check aria-controls, aria-selected (OD-004)
  - `document.querySelector('.skip-link')` → exists for ALL 6?
  - `getComputedStyle(element).borderWidth` for known Category 1 borders → all ≥3px?
  - `document.querySelector('code')` → check `getComputedStyle().fontFamily` contains 'JetBrains Mono'
  - OD-004: `document.querySelectorAll('.callout--essence .callout__body')` → check fontFamily
  - OD-003: no element using `#B8A080` in any computed style
  - OD-005: `.page-container` max-width === '860px'
- Write report to `_od-audit-scratchpad/fix-verification-programmatic.md`

### Phase D: FIX REGRESSIONS (If verification finds issues)

If either verifier finds issues:
1. Lead identifies which Fixer agent's file has the problem
2. Spawn a targeted fix agent for just that file + that issue
3. Re-verify the specific fix

### Phase E: COMMIT (Lead only)

```
1. git add all 6 OD files
2. git commit with descriptive message referencing audit
3. Update FIX-STATE.md to COMPLETE
4. Clean up team: shutdown all agents, TeamDelete
```

---

## 5. PER-AGENT PROMPT TEMPLATES

### Fixer-A Prompt (OD-001 + OD-002)

```
You are Fixer-A on the od-fix team. You own TWO files:
- docs-spa/app/showcase/explorations/organizational/OD-001-conversational.html
- docs-spa/app/showcase/explorations/organizational/OD-002-narrative.html

Nobody else will touch these files. You are the sole editor.

YOUR FIXES (apply in this order):

CRITICAL:
- Fix #2: Wrap content in <main id="main-content" role="main"> for BOTH files
- Fix #3: Convert styled divs to semantic <h2>/<h3> for BOTH files
  → Search for chapter/section title divs, change tag to h2/h3, keep all classes

HIGH:
- Fix #4: Consolidate callout label colors to var(--color-text) for BOTH files
- Fix #5: Upgrade Category 1 structural borders from 2px to 3px for BOTH files
  (Category 1 = chapter titles, code block frames, enrichment cards, essence pullquotes, section dividers)
  (Leave table borders, connector lines, badges at current width)

MEDIUM:
- Fix #10: Add @media (prefers-reduced-motion: reduce) block for BOTH files
- Fix #11: Add *:focus-visible rule for BOTH files
- Fix #12: Add skip-to-content link for BOTH files
- Fix #13: Add code { font-family: var(--font-mono); } for BOTH files

LOW:
- Fix #14: Add favicon for BOTH files
- Fix #15: Add ::selection styling for BOTH files
- Fix #16: Add @media print styles for BOTH files

SOUL COMPLIANCE CHECK (verify after ALL changes):
- border-radius: 0 everywhere? (must not have introduced any)
- box-shadow: none? (must not have introduced any)
- No filter: drop-shadow?
- Font trio intact? (Instrument Serif / Inter / JetBrains Mono)

After completing all fixes, write your report to:
_od-audit-scratchpad/fix-report-fixer-a.md

Include: every change made, line numbers before/after, any judgment calls.
```

### Fixer-B Prompt (OD-003)

```
You are Fixer-B on the od-fix team. You own ONE file:
- docs-spa/app/showcase/explorations/organizational/OD-003-task-based.html

YOUR FIXES (apply in this order):

HIGH:
- Fix #4: Consolidate callout label colors to var(--color-text)
- Fix #5: Upgrade Category 1 structural borders from 2px to 3px
  OD-003 has the MOST thin borders (661 computed instances).
  Be careful to distinguish Category 1 (structural frames, island borders,
  section dividers) from Category 2 (table separators, connector lines,
  step number borders) from Category 3 (badges, micro-elements).
- Fix #8: Remove --accent-tan: #B8A080
  → Remove from :root (line ~204)
  → Replace border-left-color: var(--accent-tan) at line ~676 with var(--color-border)
  → The label color at line ~679 gets consolidated per Fix #4 anyway

MEDIUM:
- Fix #10: Add @media (prefers-reduced-motion: reduce) block
- Fix #12: Add skip-to-content link (OD-003 already has <main> — add id="main-content" to it)
- Fix #13: Add code { font-family: var(--font-mono); }

LOW:
- Fix #14: Add favicon
- Fix #15: Add ::selection styling
- Fix #16: Add @media print styles

After completing all fixes, write your report to:
_od-audit-scratchpad/fix-report-fixer-b.md
```

### Fixer-C Prompt (OD-004)

```
You are Fixer-C on the od-fix team. You own ONE file:
- docs-spa/app/showcase/explorations/organizational/OD-004-confidence.html

You have the most complex assignment. OD-004 has 3 CRITICAL/HIGH fixes that
require investigation, not just text swaps.

YOUR FIXES (apply in this order):

CRITICAL:
- Fix #1: ESSENCE CALLOUT FONT — INVESTIGATE FIRST
  The CSS at line ~766 ALREADY declares var(--font-display) with font-style: italic.
  But 3 audit agents independently found the computed value was Inter/normal.

  INVESTIGATION STEPS:
  1. Start a local HTTP server to serve the files
  2. Use Playwright to navigate to OD-004
  3. Wait for document.fonts.ready
  4. Evaluate getComputedStyle() on .callout--essence .callout__body elements
  5. If font IS Instrument Serif italic → document this, no CSS fix needed
  6. If font IS NOT → find the override in the cascade, fix it
  7. Compare with OD-006 essence callout (confirmed correct by audit)

HIGH:
- Fix #4: Consolidate callout label colors to var(--color-text)
- Fix #5: Upgrade Category 1 structural borders from 2px to 3px
- Fix #6: Complete tab ARIA
  → Add aria-controls, aria-selected, tabindex to existing tab buttons
  → Add tabpanel roles to content areas
  → Add JavaScript for keyboard navigation (arrow keys) and aria-selected management
  → The JS should be minimal — just event listeners on the tablist
- Fix #7: Remove dead zone at ~6881px scroll
  → Use Playwright to scroll to 6881px and identify what CSS creates the gap
  → It's likely excessive margin-bottom on a stratum or padding-top on the next
  → Reduce to match other stratum boundaries (80-120px)

MEDIUM:
- Fix #12: Add skip-to-content link (OD-004 already has <main> — add id="main-content")
- Fix #13: Add code { font-family: var(--font-mono); }

LOW:
- Fix #14: Add favicon
- Fix #15: Add ::selection styling
- Fix #16: Add @media print styles

IMPORTANT: For Fixes #1 and #7, you MUST use Playwright to investigate.
Start the HTTP server first: python3 -m http.server 8080

After completing all fixes, write your report to:
_od-audit-scratchpad/fix-report-fixer-c.md

Include your investigation findings for Fix #1 and #7 with specific evidence.
```

### Fixer-D Prompt (OD-005 + OD-006)

```
You are Fixer-D on the od-fix team. You own TWO files:
- docs-spa/app/showcase/explorations/organizational/OD-005-spatial.html
- docs-spa/app/showcase/explorations/organizational/OD-006-creative.html

YOUR FIXES (apply in this order):

HIGH:
- Fix #4: Consolidate callout label colors to var(--color-text) for BOTH files
  NOTE: OD-006 uses different callout type names (insight/discovery/warning/note).
  Find ALL callout label color rules regardless of naming.
- Fix #5: Upgrade Category 1 structural borders from 2px to 3px for BOTH files

MEDIUM:
- Fix #9: OD-005 ONLY — Change max-width from 960px to 860px
  → Two locations: line ~320 and line ~375
  → After changing, visually verify the territory grid doesn't break
    (it's a 3x2 grid that needs to fit in 860px)
- Fix #11: Add *:focus-visible rule for BOTH files
- Fix #12: Add skip-to-content link for BOTH files
  (Both already have <main> — add id="main-content")
- Fix #13: Add code { font-family: var(--font-mono); } for BOTH files

LOW:
- Fix #14: Add favicon for BOTH files
- Fix #15: Add ::selection styling for BOTH files
- Fix #16: Add @media print styles for BOTH files

After completing all fixes, write your report to:
_od-audit-scratchpad/fix-report-fixer-d.md
```

---

## 6. ADVERSARIAL VERIFICATION PROTOCOL

Verification is NOT a rubber stamp. Verifiers must actively try to DISPROVE that fixes worked.

### Verifier-Visual Protocol

```
For EACH of the 6 OD files:

1. Take full-page screenshot at 1440px width
2. Take full-page screenshot at 768px width

3. For each screenshot, actively look for:
   - Any callout label text that's hard to read (Fix #4 regression)
   - Any border that looks too thin for a structural element (Fix #5 missed)
   - Any element with rounded corners (soul violation introduced)
   - Any visual that looks broken or misaligned (regression from fixes)
   - OD-004 specific: scroll to mid-page, is the dead zone gone?
   - OD-005 specific: does the territory grid fit in the narrower container?
   - OD-001/002 specific: does the heading change affect visual rhythm?

4. INVERSION TEST: For each fix item, ask:
   "If this fix had NOT been applied, would I notice?"
   If yes → fix is likely working
   If no → either the fix is too subtle or it wasn't applied

5. Write findings with PASS/FAIL per fix item
```

### Verifier-Programmatic Protocol

```
Start HTTP server: python3 -m http.server 8080
Navigate to each OD file.

For EACH file, run these checks:

STRUCTURAL:
- document.querySelector('main') !== null → MUST be true for ALL 6
- document.querySelector('.skip-link') !== null → MUST be true for ALL 6
- document.querySelector('#main-content') !== null → MUST be true for ALL 6

CONTRAST:
- For each .callout__label:
  getComputedStyle(el).color → MUST be rgb(26, 26, 26) or equivalent dark color
  (NOT any accent color like red, green, blue, coral)

BORDERS:
- Sample 5 known Category 1 elements per file:
  getComputedStyle(el).borderWidth → MUST be >= '3px' on structural sides

FONTS:
- document.querySelector('code'):
  getComputedStyle(el).fontFamily → MUST contain 'JetBrains Mono'

OD-SPECIFIC:
- OD-003: No element has computed color #B8A080
  → document.querySelectorAll('*') → check none have color/border-color #B8A080
- OD-004: .callout--essence .callout__body fontFamily → investigate
- OD-004: [role="tab"] → check aria-controls, aria-selected present
- OD-004: Scroll height at dead zone location → gap < 200px
- OD-005: .page-container maxWidth → MUST be '860px'

SOUL COMPLIANCE:
- No element has border-radius > 0 (spot check 20 elements per file)
- No element has box-shadow not 'none' (except solid-offset pseudo-elements)

Write detailed report to _od-audit-scratchpad/fix-verification-programmatic.md
Include: test name, expected value, actual value, PASS/FAIL
```

---

## 7. COMPACTION SURVIVAL INFRASTRUCTURE

### FIX-STATE.md (Maintained by Weaver)

The Weaver agent continuously updates `_od-audit-scratchpad/FIX-STATE.md` at every phase transition and every agent completion.

If context is compacted:
1. Read FIX-STATE.md FIRST
2. Read this prompt document (OD-FIX-EXECUTION-PROMPT.md) to remember the plan
3. Check TaskList for current task status
4. Resume from where FIX-STATE.md says you left off

### Agent Output Files (Survive Crashes)

Every agent writes to a file BEFORE returning:
- `_od-audit-scratchpad/fix-report-fixer-a.md`
- `_od-audit-scratchpad/fix-report-fixer-b.md`
- `_od-audit-scratchpad/fix-report-fixer-c.md`
- `_od-audit-scratchpad/fix-report-fixer-d.md`
- `_od-audit-scratchpad/fix-verification-visual.md`
- `_od-audit-scratchpad/fix-verification-programmatic.md`

If an agent crashes mid-work, the file contains partial results. The lead can spawn a new agent to continue from where the file ends.

### TaskList as Recovery Mechanism

Every fix item is a Task. Tasks marked `completed` are done. Tasks marked `in_progress` had an agent working on them. Tasks still `pending` haven't started. This is the recovery map.

---

## 8. HARD RULES

These are non-negotiable. They come from the retrospective (OD-RETROSPECTIVE-AND-PROTOCOL-v2.md).

### Lead Rules
1. **The lead NEVER edits HTML files.** All edits go through Fixer agents.
2. **The lead NEVER runs Playwright.** All visual/programmatic work goes through Verifier agents.
3. **The lead NEVER reads full OD files.** Read FIX-STATE.md and agent reports only.
4. **The lead ONLY: creates tasks, assigns them, processes verdicts, decides next steps, commits.**

### Communication Rules
5. **SendMessage is the ONLY way teammates hear you.** Text output goes to the user, not agents.
6. **Idle notifications are noise.** Filter them. They mean "waiting for input."
7. **Background agents are powerful.** Use `run_in_background` for fixers — don't block on their completion. Check output files when ready.

### Quality Rules
8. **One committer, one branch.** Lead commits. Agents never commit.
9. **Every fix must be verified.** No "I did it, trust me." Programmatic verification or it didn't happen.
10. **Soul compliance is the floor.** If ANY fix introduces border-radius, box-shadow, or drop-shadow, the fix is REJECTED regardless of what else it accomplishes.

### Process Rules
11. **Agents write to file BEFORE returning.** File persistence survives crashes.
12. **FIX-STATE.md gets updated at every phase transition.** This is the compaction recovery mechanism.
13. **No agent touches a file they don't own.** File ownership matrix (Section 2) is absolute.

---

## 9. INLINE THREADING HEADER ABSORPTION PROTOCOL

Before working on any OD file, every Fixer agent must internalize its inline threading header. This is not skimming — it's absorption.

### The 5-Step Protocol

**Step 1: Read with Purpose**
Read the inline threading header at the top of your assigned file(s). Don't skim. Read every section:
- Section 1 (WHY THIS EXISTS) — what is this file's reason for being?
- Section 2 (THE QUESTION) — what hypothesis does this exploration test?
- Section 3 (STATUS) — is it ACTIVE, INCLUDE, locked?
- Section 4 (SOUL ALIGNMENT) — which soul pieces are implemented and where?
- Section 5 (BUILT ON) — what upstream sources feed this file?
- The "Applied Research" block — what findings were applied?
- The "Anti-Patterns Avoided" block — what must NOT happen?

**Step 2: Reflect on Each Section**
After reading, answer internally:
- What density pattern(s) does this file demonstrate?
- Which soul pieces are most visible in this file's design?
- What anti-patterns must my fixes avoid introducing?
- What is the file's relationship to its DD ancestor?

**Step 3: Traverse When Needed**
If BUILT ON references a source you need to understand (e.g., DD-F-006 fractal), read it. You need to understand the constraint to not violate it.

**Step 4: Carry Forward**
As you make each fix, hold the file's identity in mind. A fix to OD-004 should respect the GEOLOGICAL metaphor. A fix to OD-001 should respect the PULSE rhythm. Fixes are not identity-neutral — they happen within a context.

**Step 5: Use the Identity**
When making judgment calls (e.g., which borders are Category 1 vs Category 2), let the file's identity inform the decision. A border that serves as a geological stratum boundary in OD-004 is Category 1 (structural). A border between table cells is Category 2 (data separator). The file's identity tells you which is which.

---

## 10. SOUL COMPLIANCE QUICK REFERENCE

Every Fixer agent must verify these after completing all fixes:

```
□ border-radius: 0 everywhere (no rounded corners introduced)
□ box-shadow: none (no shadows introduced, except solid-offset pseudo-elements)
□ No filter: drop-shadow() anywhere
□ No fake depth, gradients, or blur
□ Locked palette: #E83025 (primary red), #1A1A1A (text), #FAFAF5 (warm cream),
  #E0D5C5 (border), #6B9B7A (green), #4A7C9B (blue), #C97065 (coral),
  #7C3AED (purple/essence)
□ Font trio: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
□ Border weights: 4px left accent OR 3px full — never 1-2px for structural borders
□ Spacing model: --space-* tokens (not arbitrary pixel values)
□ Max 2 callouts per viewport section
□ DD-F-006 fractal self-similarity at 4 scales (page, section, component, character)
  → Fixes must not break the fractal rhythm
```

**If a fix violates ANY of these, the fix is wrong. Undo it and find another approach.**

---

## APPENDIX A: FILE PATHS

```
Target files:
  docs-spa/app/showcase/explorations/organizational/OD-001-conversational.html
  docs-spa/app/showcase/explorations/organizational/OD-002-narrative.html
  docs-spa/app/showcase/explorations/organizational/OD-003-task-based.html
  docs-spa/app/showcase/explorations/organizational/OD-004-confidence.html
  docs-spa/app/showcase/explorations/organizational/OD-005-spatial.html
  docs-spa/app/showcase/explorations/organizational/OD-006-creative.html

Audit results (read-only reference):
  docs-spa/app/showcase/knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md

Audit evidence (read-only reference):
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/

Agent output files (write here):
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-report-fixer-a.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-report-fixer-b.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-report-fixer-c.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-report-fixer-d.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-verification-visual.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/fix-verification-programmatic.md
  docs-spa/app/showcase/knowledge-architecture/_od-audit-scratchpad/FIX-STATE.md

This prompt:
  docs-spa/app/showcase/knowledge-architecture/OD-FIX-EXECUTION-PROMPT.md
```

---

## APPENDIX B: EXPECTED TIMELINE

| Phase | Duration | Agents Active |
|-------|----------|---------------|
| A: Setup | ~2 min | Lead only |
| B: Parallel Fixes | ~15-25 min | 4 Fixers + Weaver |
| C: Verification | ~10-15 min | 2 Verifiers |
| D: Fix Regressions | ~5-10 min (if needed) | 1-2 targeted agents |
| E: Commit | ~2 min | Lead only |
| **TOTAL** | **~35-55 min** | |

This is significantly faster than the audit (~45 min for 17 agents) because:
- Fixes have exact specifications (no discovery needed)
- 4 agents working in parallel on independent files
- Verification is targeted (re-check specific items, not full audit)

---

## APPENDIX C: SUCCESS CRITERIA

The fix execution is COMPLETE when:

1. All 17 fix items have status `completed` in TaskList
2. FIX-STATE.md shows all phases complete, all files modified
3. Verifier-Visual report shows PASS for all checked items
4. Verifier-Programmatic report shows PASS for all DOM checks
5. Zero soul violations introduced (border-radius, box-shadow, drop-shadow all clean)
6. All 4 Fixer agents have written completion reports
7. Lead has committed all changes in a single commit
8. Team has been shut down cleanly (all agents terminated, TeamDelete called)

**The bar is: every fix the audit recommended is implemented AND verified.**
