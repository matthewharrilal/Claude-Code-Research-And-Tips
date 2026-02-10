# AD SKELETON: QUALITY GATES & AUDIT PROTOCOL
## Comprehensive Quality Architecture for Analytical Density Phase

**Source:** Extracted from 15 OD/comprehensive audit documents (prompts, reports, retrospectives, worker outputs, fix reports, scribe reports)
**Purpose:** AD skeleton section defining per-wave quality gates, visual/structural/fresh-eyes audit protocols, fix-and-verify, and weaver synthesis

---

===============================================================================
## 1. AD PER-WAVE QUALITY GATES (Binary -- Never Judgment)
===============================================================================

### Design Principle: Gates Not Guidelines

Every quality check is BINARY PASS/FAIL. There are NO guidelines, recommendations, or suggestions. This is the single most important architectural principle from the metacognition analysis: **binary rules achieve 100% agent compliance; judgment rules achieve ~0%.**

If a gate is FAIL, execution STOPS and routes to the responsible agent. No exceptions.

### Gate 0: Convention & Setup

**Trigger:** Before any AD content creation begins.
**Owner:** Lead

```
GATE 0-01: HTTP server running and serving showcase content              — PASS/FAIL
GATE 0-02: Playwright verification screenshot shows actual content       — PASS/FAIL
GATE 0-03: AD-CONVENTION-SPEC.md exists and is >= 300 lines              — PASS/FAIL
GATE 0-04: AD-CONVENTION-SPEC.md specifies ALL of:
           - :root token block with exact values                         — PASS/FAIL
           - Border categories (Cat 1/2/3) with px values               — PASS/FAIL
           - Type scale (h1-h6 + body + code + meta sizes)              — PASS/FAIL
           - Color palette (exactly which hex values are permitted)      — PASS/FAIL
           - Spacing scale (section gaps, element padding)               — PASS/FAIL
           - Soul compliance block (border-radius:0, box-shadow:none)   — PASS/FAIL
GATE 0-05: AD build directory structure exists                           — PASS/FAIL
GATE 0-06: AD-BUILD-STATE.md created with correct format                 — PASS/FAIL
GATE 0-07: Agent tasks created for all team members                      — PASS/FAIL
```

**FAIL ROUTE for 0-01/0-02:** Troubleshoot server. Try different port, different serve command. NEVER skip -- empty Playwright tabs = wasted visual agents. Lesson: OD comprehensive audit validated that Gate 0.5 (Playwright verification) catches blank screenshots before agent waste.

**FAIL ROUTE for 0-03/0-04:** Convention spec is incomplete. Return to convention author. No builds start without complete convention. Lesson: OD's "3 dialects" problem traced directly to OD-001/002 being built before conventions solidified.

### Gate 1: Build Wave 1 (First 3 AD Files)

**Trigger:** After first wave of AD exploration files are complete.
**Owner:** Lead + verification agent

```
GATE 1-01: Exactly 3 AD HTML files exist and are >= 80KB each           — PASS/FAIL
GATE 1-02: Each file has INLINE THREADING HEADER (Phase format)          — PASS/FAIL
GATE 1-03: Each file's :root block matches AD-CONVENTION-SPEC.md         — PASS/FAIL
GATE 1-04: Soul check: 0 border-radius > 0 across all 3 files           — PASS/FAIL
GATE 1-05: Soul check: 0 box-shadow != none across all 3 files          — PASS/FAIL
GATE 1-06: Soul check: 0 filter effects across all 3 files              — PASS/FAIL
GATE 1-07: Border check: 0 instances of 2px borders                     — PASS/FAIL
GATE 1-08: All backgrounds opaque (0 rgba with alpha < 1)               — PASS/FAIL
GATE 1-09: Convention compliance: font-family trio correct               — PASS/FAIL
GATE 1-10: Research Application Record present in each file              — PASS/FAIL
GATE 1-11: At least 5 EXT-* enrichments per file with evidence          — PASS/FAIL
```

**FAIL ROUTE:** Return to builder agent for the specific file(s). Builder fixes the failing gate and resubmits. Lead does NOT proceed to Wave 2 until Gate 1 is all PASS.

**Lesson from OD:** OD Gate 1 caught 2px border epidemics early. The convention check at Gate 1 prevents the "dialect drift" that OD experienced when OD-001/002 were built without mature conventions.

### Gate 2: Build Wave 2 (Remaining 3 AD Files)

**Trigger:** After second wave of AD exploration files are complete.
**Owner:** Lead + verification agent

```
GATE 2-01: Exactly 6 total AD HTML files exist (3 from Wave 1 + 3 new) — PASS/FAIL
GATE 2-02: Each new file has INLINE THREADING HEADER                     — PASS/FAIL
GATE 2-03: Each new file's :root block matches AD-CONVENTION-SPEC.md     — PASS/FAIL
GATE 2-04: Soul check: 0 violations across ALL 6 files (not just new 3) — PASS/FAIL
GATE 2-05: Border check: 0 instances of 2px across ALL 6 files          — PASS/FAIL
GATE 2-06: All backgrounds opaque across ALL 6 files                     — PASS/FAIL
GATE 2-07: Convention compliance across ALL 6 files                      — PASS/FAIL
GATE 2-08: Cross-file consistency: same token values in :root            — PASS/FAIL
GATE 2-09: Research Application Record present in each new file          — PASS/FAIL
GATE 2-10: At least 5 EXT-* enrichments per new file with evidence      — PASS/FAIL
```

**Critical lesson from OD:** Wave 2 checks ALL 6 files, not just the new 3. OD's rgba() epidemic was missed because Wave 1 files weren't re-checked after Wave 2 conventions changed. The comprehensive audit found 102 rgba() instances across 10/12 pages because cross-wave checking was absent during the original build.

### Gate 3: Audit Complete

**Trigger:** After all audit agents (visual, structural, fresh-eyes) have completed and produced reports.
**Owner:** Lead

```
GATE 3-01: CAPTAIN-VISUAL-REPORT.md exists and has findings              — PASS/FAIL
GATE 3-02: CAPTAIN-STRUCTURAL-REPORT.md exists and has findings          — PASS/FAIL
GATE 3-03: CAPTAIN-FRESHEYES-REPORT.md exists and has findings           — PASS/FAIL
GATE 3-04: WEAVER-SYNTHESIS.md exists with cross-references              — PASS/FAIL
GATE 3-05: All Critical/High findings have fix assignments               — PASS/FAIL
GATE 3-06: No unresolved contradictions between captains                 — PASS/FAIL
GATE 3-07: Fresh-eyes produced >= 3 UNIQUE FRESH findings                — PASS/FAIL
GATE 3-08: MASTER-AUDIT-REPORT.md compiled from all captain reports      — PASS/FAIL
GATE 3-09: Fix allocation by domain documented (per-file ownership)      — PASS/FAIL
```

**FAIL ROUTE for 3-07:** If fresh-eyes produces < 3 unique findings, the fresh-eyes constraint may not have been strong enough. Respawn with stricter isolation. Lesson: OD comprehensive audit's fresh-eyes was the single highest-value agent (2 Nuclear Question contradictions, 6 UNIQUE FRESH findings). The minimum threshold of 3 ensures the fresh-eyes pass is doing real work.

### Gate 4: Fix & Verify Complete

**Trigger:** After all Critical/High fixes are applied and verified.
**Owner:** Lead

```
GATE 4-01: All Critical fixes applied (count matches MASTER-AUDIT-REPORT) — PASS/FAIL
GATE 4-02: All High fixes applied                                         — PASS/FAIL
GATE 4-03: Programmatic verification PASS (DOM checks on fixed elements)   — PASS/FAIL
GATE 4-04: Visual verification PASS (screenshots confirm fixes visible)    — PASS/FAIL
GATE 4-05: Soul compliance re-verified: 0 violations post-fix             — PASS/FAIL
GATE 4-06: 0 NEW soul violations introduced by fixes                      — PASS/FAIL
GATE 4-07: No new rgba() backgrounds introduced                           — PASS/FAIL
GATE 4-08: No new 2px borders introduced                                  — PASS/FAIL
GATE 4-09: Per-fixer reports exist for every fixer agent                   — PASS/FAIL
GATE 4-10: Scribe reports exist (headers updated, chain docs updated)      — PASS/FAIL
```

**Lesson from OD fix execution:** Per-file ownership eliminates all contention. 4 fixers, zero file conflicts. Sequential verification (programmatic THEN visual) eliminates Playwright contention. Scribe agents update provenance immediately after fixes, not as a separate deferred step.

### Gate 5: Final (Commit Ready)

**Trigger:** Before commit.
**Owner:** Lead

```
GATE 5-01: All AD HTML files exist (6 minimum)                            — PASS/FAIL
GATE 5-02: All inline threading headers present and valid                  — PASS/FAIL
GATE 5-03: AD chain documents exist (updated PIPELINE-MANIFEST, etc.)      — PASS/FAIL
GATE 5-04: ACCUMULATED-IDENTITY updated with AD contributions              — PASS/FAIL
GATE 5-05: RESEARCH-ACTIVE.md updated with AD research applications        — PASS/FAIL
GATE 5-06: AD-CONVENTION-SPEC.md versioned and finalized                   — PASS/FAIL
GATE 5-07: All audit reports archived in _comprehensive-audit-ad/          — PASS/FAIL
GATE 5-08: AD-BUILD-STATE.md shows all gates PASS                          — PASS/FAIL
GATE 5-09: Git status clean (no untracked files outside expected dirs)     — PASS/FAIL
GATE 5-10: Total soul violations across ALL AD files: 0                    — PASS/FAIL
```

---

===============================================================================
## 2. AD VISUAL AUDIT PROTOCOL (Playwright)
===============================================================================

### 2.1 Proven Patterns from OD (What WORKED)

**Visual-first, programmatic-second is epistemologically sound.** The OD retrospective (Part 2.1) confirmed: visual agents catch perceptual issues ("this feels heavy," "this rhythm breaks here") that systematic agents then quantify. Neither layer is sufficient alone. **Keep this pattern for AD.**

**The wave model:** Visual audit (Wave 1) -> Programmatic audit (Wave 2) -> Cross-page consistency -> Synthesis. Sequential dependency between waves; parallel agents within waves.

### 2.2 Viewport Sizes

```
PRIMARY:   1440px width (desktop reference)
SECONDARY: 768px width (tablet/responsive check)
```

Both viewports MUST be audited for every page. The OD audit confirmed that some issues (OD-005 wave visualization illegibility, FRESH-COMP-015) are ONLY visible at 768px.

### 2.3 Animation Disabling

Before any visual inspection, inject this CSS to force all content visible:

```css
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
  transform: none !important;
}
```

**Why:** OD-004's "dead zone" (Fix #7) was initially flagged as a structural gap but was actually a scroll-animation artifact. Disabling animations before auditing eliminates false positives from animation timing.

### 2.4 Viewport-by-Viewport Slicing Protocol

```
1. Set viewport: { width: 1440, height: 900 }
2. Navigate to page via HTTP URL (NEVER file://)
3. Wait for document.fonts.ready (CRITICAL — OD Fix #1 proved font-loading timing causes false positives)
4. Inject animation-disable CSS
5. Screenshot viewport 0 (top of page) -> save as {name}-1440-vp00.png
6. Scroll down one viewport height (900px)
7. Screenshot viewport 1 -> save as {name}-1440-vp01.png
8. Repeat until bottom of page
9. Take one full-page screenshot -> {name}-1440-full.png
10. Resize to 768px width, repeat steps 2-9 with 768 prefix
```

**Target:** 8-12 viewport screenshots per page per viewport width.
**Total estimate:** 6 AD pages x 2 viewports x ~10 slices = ~120 viewport screenshots + ~12 full-page screenshots = ~132 screenshots minimum.

**Why slicing matters:** Full-page screenshots compress detail. Viewport slices let the agent see each component at native resolution. The OD comprehensive audit captured 24 screenshots (12 pages x 2 viewports) which was adequate for captain-level review but insufficient for component-level auditing.

### 2.5 Computed Style Checking (Not Just CSS Source)

**Binary rule:** Check COMPUTED values, not source code values.

```javascript
// WRONG: Reading CSS source
const style = element.style.borderRadius; // May show "" if set by class

// RIGHT: Reading computed value
const computed = getComputedStyle(element);
const borderRadius = computed.borderRadius; // Shows actual rendered value
```

**Why:** OD's 2.22px border rendering (XVIS-005) showed CSS source said `3px` but computed showed `2.22px` (DPI artifact). The comprehensive audit found this across ALL 12 pages. Structural audit confirmed it was a browser rendering issue, not a CSS source issue. Computed checks catch rendering artifacts that source reading misses.

**Critical:** Always await `document.fonts.ready` before checking font-family computed styles. The OD Fix #1 investigation proved that without this wait, fallback fonts report incorrectly and produce false positive findings.

### 2.6 Playwright Contention Mitigation

**The problem (from OD Retrospective 4.5):** Multiple agents navigating simultaneously causes tab switching and missed screenshots. Only 2 of 13 visual workers got actual Playwright access during the comprehensive audit.

**AD protocol — sequential access, not parallel:**

```
Option A (PREFERRED): Sequential per-page assignment
  - Agent 1: AD-001 at 1440px, then AD-001 at 768px -> done
  - Agent 2: AD-002 at 1440px, then AD-002 at 768px -> done
  - (etc.)
  - Each agent finishes one page completely before the next starts
  - Reduces parallelism but eliminates contention

Option B: Multiple HTTP ports
  - Serve each AD file on its own port (3001, 3002, 3003, etc.)
  - Agents can navigate independently without tab switching
  - Adds setup complexity but preserves parallelism
```

**Lesson from comprehensive audit:** Captain-Visual spawned 12+ workers but only some got Playwright access. The rest fell back to source-code analysis, which CANNOT detect visual rendering issues (fresh-eyes COMP-015 proved this). For AD, either use Option A (sequential) or ensure each visual worker has guaranteed Playwright access.

### 2.7 Soul Compliance Visual Checks

**Per-element checks (BINARY — 0 tolerance):**

| Check | Expected | Detection Method |
|-------|----------|-----------------|
| border-radius | 0 on every element | `getComputedStyle(el).borderRadius === '0px'` |
| box-shadow | none on every element | `getComputedStyle(el).boxShadow === 'none'` |
| filter | none on every element | `getComputedStyle(el).filter === 'none'` |
| opacity backgrounds | 1 (fully opaque) | Check for rgba() with alpha < 1 in backgrounds |
| 2px borders | 0 instances | Check all border-*-width !== '2px' |
| Font trio | Inter (body), Instrument Serif (display), JetBrains Mono (code) | Check computed font-family |

**Proven JavaScript evaluation pattern (from OD structural audit):**

```javascript
// Soul compliance sweep — run on every page
const allElements = document.querySelectorAll('*');
const violations = [];
allElements.forEach(el => {
  const cs = getComputedStyle(el);
  if (cs.borderRadius !== '0px') violations.push({el, type: 'border-radius', value: cs.borderRadius});
  if (cs.boxShadow !== 'none') violations.push({el, type: 'box-shadow', value: cs.boxShadow});
  if (cs.filter !== 'none') violations.push({el, type: 'filter', value: cs.filter});
  ['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'].forEach(prop => {
    if (cs[prop] === '2px') violations.push({el, type: '2px-border', prop, value: '2px'});
  });
});
return { total: allElements.length, violations: violations.length, details: violations.slice(0, 20) };
```

### 2.8 13 Binary Visual Gates (Per Page)

These gates are carried forward from the comprehensive audit specification with proven effectiveness. All 12 OD/DD pages were evaluated against these exact gates.

```
VA-01: Page renders (not blank)                                           — PASS/FAIL
VA-02: No visual overflow (content bleeding outside containers)           — PASS/FAIL
VA-03: No element misalignment                                            — PASS/FAIL
VA-04: Typography matches convention spec (font, size, weight, height)    — PASS/FAIL
VA-05: Colors match convention spec (header bg, code bg, text, accent)    — PASS/FAIL
VA-06: Spacing matches convention spec (section margins, padding, gaps)   — PASS/FAIL
VA-07: Border system compliant (ZERO 2px, correct category per border)    — PASS/FAIL
VA-08: Soul compliance visual (NO border-radius, NO box-shadow, NO filter)— PASS/FAIL
VA-09: Responsive layout functional at 768px                              — PASS/FAIL
VA-10: Code blocks consistent (dark bg per convention, monospace font)     — PASS/FAIL
VA-11: Headers consistent (dark bg per convention, content aligned)        — PASS/FAIL
VA-12: No dead zones (unexplained large empty gaps)                        — PASS/FAIL
VA-13: Research compliance (>= 5 research findings cited with evidence)    — PASS/FAIL
```

### 2.9 Research-Grounded Visual Audit (Per Component)

**For each visible component (header, code block, Q/A pair, callout, section divider):**

1. **Convention Check:** Compare computed appearance against AD-CONVENTION-SPEC.md. Record: property, expected, actual.
2. **EXT-* Visual Presence:** For each EXT-* finding cited in the page's HTML, verify the enrichment is VISUALLY PRESENT (not just in code).
3. **R-* Research Chain:** Trace component to original research. Is the RESEARCH INTENT satisfied?
4. **Soul Piece Check:** Verify 5 soul pieces visually intact per component.

### 2.10 Cross-AD Consistency Audit

**After all per-page agents complete, spawn a dedicated cross-page worker:**

- Read all per-page visual reports
- Open all AD pages in sequence via Playwright
- For each component TYPE (header, code block, callout, etc.):
  - Compare visual appearance across all AD pages
  - Note ANY inconsistency not documented as intentional variation
  - Cite AD-CONVENTION-SPEC.md for what should be uniform
- Report: CONSISTENT / INCONSISTENT per component type with evidence

**This worker catches the "3 dialects" problem that OD experienced.** OD-001/002 were "Polished," OD-003/004/005 were "Functional," OD-006 was "Editorial" — fresh-eyes said it looked like 3 different designers. AD must avoid this by catching cross-page inconsistency during audit, not after.

---

===============================================================================
## 3. AD STRUCTURAL AUDIT PROTOCOL
===============================================================================

### 3.1 DOM Traversal (What the OD Structural Audit Actually Checked)

The comprehensive structural audit checked 4,876 elements across 12 HTML files. For AD, the same scope applies:

**Per-file structural checks:**

| Check | Method | Gate |
|-------|--------|------|
| Element count | `document.querySelectorAll('*').length` | Record (no threshold) |
| Soul violations | Sweep all elements for border-radius/box-shadow/filter | 0 tolerance |
| 2px borders | Check all border-*-width properties | 0 tolerance |
| rgba() backgrounds | Find all rgba() with alpha < 1 | 0 tolerance (post-fix) |
| Font compliance | Check computed font-family on body, headings, code | Must match trio |
| Heading hierarchy | Count H1 (must be 1), check H-level ordering | No skips (h1->h3 = FAIL) |
| Main landmark | `<main>` element exists | Required |
| Skip link | Skip-to-content link at top of page | Required |
| Nav element | `<nav>` for pages with navigation | Required where applicable |
| ARIA regions | Count role attributes | Record (minimum varies) |
| Focus-visible | CSS `:focus-visible` rule exists | Required |
| Reduced-motion | `@media (prefers-reduced-motion)` exists | Required |
| Print media | `@media print` block exists | Required |

### 3.2 CSS Token Verification

**Verify :root values match AD-CONVENTION-SPEC.md exactly:**

```javascript
const root = getComputedStyle(document.documentElement);
const tokens = {
  '--color-primary':      root.getPropertyValue('--color-primary').trim(),
  '--color-background':   root.getPropertyValue('--color-background').trim(),
  '--color-text':         root.getPropertyValue('--color-text').trim(),
  '--color-text-secondary': root.getPropertyValue('--color-text-secondary').trim(),
  '--color-border':       root.getPropertyValue('--color-border').trim(),
  '--color-border-subtle': root.getPropertyValue('--color-border-subtle').trim(),
  '--type-page':          root.getPropertyValue('--type-page').trim(),
  '--type-section':       root.getPropertyValue('--type-section').trim(),
  '--type-subsection':    root.getPropertyValue('--type-subsection').trim(),
  '--type-body':          root.getPropertyValue('--type-body').trim(),
  '--type-code':          root.getPropertyValue('--type-code').trim(),
  '--type-meta':          root.getPropertyValue('--type-meta').trim(),
  '--border-radius':      root.getPropertyValue('--border-radius').trim(),
  '--box-shadow':         root.getPropertyValue('--box-shadow').trim(),
};
// Compare each against AD-CONVENTION-SPEC.md expected values
```

**Every token mismatch is a FAIL.** The OD structural audit found 0 token mismatches across 6 OD files (1 sanctioned OD-006 divergence documented). AD should achieve the same.

### 3.3 Border System Verification

**AD Border Categories (inherited from OD convention, may be adapted):**

| Category | Width | Use |
|----------|-------|-----|
| Cat 1: Structural | 3px | Section dividers, header borders, code block borders |
| Cat 2: Accent | 4px | Callout left borders, emphasis elements |
| Cat 3: Subtle | 1px | Table rules, separator lines |
| PROHIBITED | 2px | NEVER (the "uncertainty" width — commit to 1px or 3px+) |

**Verification JavaScript:**

```javascript
const allBorders = [];
document.querySelectorAll('*').forEach(el => {
  const cs = getComputedStyle(el);
  ['Top','Right','Bottom','Left'].forEach(side => {
    const w = cs[`border${side}Width`];
    if (w !== '0px') {
      allBorders.push({
        el: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''),
        side, width: w,
        prohibited: w === '2px'
      });
    }
  });
});
return { total: allBorders.length, prohibited: allBorders.filter(b => b.prohibited).length };
```

### 3.4 Typography Verification

**Check the font trio is correctly applied:**

| Element Type | Expected Font | Expected Size (Convention) |
|-------------|---------------|---------------------------|
| Body text | Inter | var(--type-body) = 1rem = 16px |
| H1 | Instrument Serif | var(--type-page) = 2.5rem = 40px |
| H2 | Instrument Serif | var(--type-section) = 1.625rem = 26px |
| H3 | Instrument Serif or Inter | var(--type-subsection) = 1.375rem = 22px |
| Code (block) | JetBrains Mono | var(--type-code) = 0.875rem = 14px |
| Code (inline) | JetBrains Mono | var(--type-code) = 0.875rem = 14px |
| Meta text | Inter | var(--type-meta) = 0.75rem = 12px |

**Critical lesson from OD Fix #7:** Inline code was computing at 10.8-11px instead of 14px because `font-size: 0.9em` compounded with parent reductions. Fix: explicit `font-size: var(--type-code)` on inline code. AD MUST use var-based sizing, never relative em on inline code.

### 3.5 Convention Compliance Checking

**Every AD file is checked against AD-CONVENTION-SPEC.md on these dimensions:**

1. Token values (:root block)
2. Border widths and categories
3. Type scale (sizes, weights, line-heights)
4. Color palette (only permitted hex values)
5. Spacing (section margins, element padding)
6. Soul rules (border-radius, box-shadow, filter, opacity)
7. Accessibility features (skip-link, focus-visible, reduced-motion, print)
8. Semantic HTML (main, nav, header, heading hierarchy, ARIA)
9. Code block styling (dark background, correct font, correct size)
10. Header styling (dark background, correct containment)

---

===============================================================================
## 4. AD FRESH-EYES PROTOCOL
===============================================================================

### 4.1 The Core Constraint: NO Convention Spec Reading

**This is the entire point of fresh-eyes.** The agent receives:
- Full accumulated identity knowledge (soul pieces, design philosophy)
- NO convention spec values (no specific px values, no specific hex colors)
- NO builder justifications (no "we did this because...")
- NO prior audit findings (no priming about what to look for)

**Why:** The OD retrospective (Part 2.2) said it definitively: "Fresh-eyes was the single highest-value agent. Cost: 1 agent. Value: 2 Nuclear Question contradictions that no other agent produced." The comprehensive audit's fresh-eyes produced 6 UNIQUE FRESH findings that spec-aware auditors were blind to (FRESH-COMP-010 through FRESH-COMP-015).

**The meta-observation from the comprehensive fresh-eyes report:** "Spec-driven auditing is excellent at compliance but blind to gestalt." Regular auditors achieved 0 soul violations across 4,876 elements but couldn't see that diagrams felt imported, navigation was inconsistent, or density markers looked like debug output.

### 4.2 Fresh-Eyes Agent Prompt Structure

```
You are reviewing these pages for the FIRST TIME. You have:
- Knowledge of what KortAI IS (the soul, the identity, the philosophy)
- NO knowledge of what specific values were chosen
- NO knowledge of why specific choices were made
- NO access to convention specs or audit results

Your ONLY question: "Does this look like a real product, or like a technical exercise?"

For each page, answer:
1. What is your first impression? (5 words maximum)
2. What is the single worst thing about this page?
3. What is the single best thing about this page?
4. Would a newcomer understand this is part of a design system showcase?
5. If you could change ONE thing, what would it be?
```

### 4.3 Fresh-Compare Classification

After fresh-eyes produces findings, a fresh-compare worker (or the fresh-eyes agent itself) classifies each finding:

| Classification | Meaning | Action |
|----------------|---------|--------|
| CONFIRMED | Same finding as regular audit | Validates regular audit accuracy |
| UNIQUE-FRESH | NOT caught by regular audit | HIGHEST VALUE — investigate immediately |
| SPEC-ONLY | Only visible with spec knowledge | Regular audit already covers this |

**Minimum threshold:** Fresh-eyes MUST produce >= 3 UNIQUE-FRESH findings. If < 3, the constraint wasn't strong enough — the agent may have inferenced convention values from the pages themselves. Consider respawning with even stricter isolation.

### 4.4 What OD Fresh-Eyes Found That Others Missed

For reference — these are the types of findings AD fresh-eyes should aim to catch:

1. **Pattern visualizations feel imported** (FRESH-COMP-010) — Visual compliance does not equal visual belonging
2. **Inconsistent navigation aids** (FRESH-COMP-011) — Cross-page experience was never audited
3. **Pages look like 3 different designers** (FRESH-COMP-012) — The dialect taxonomy legitimized variation that users would see as inconsistency
4. **Density markers look like debug output** (FRESH-COMP-013) — Implementation correctness is not the same as good design
5. **SVG illegible at 768px** (FRESH-COMP-015) — Only detectable via actual Playwright rendering, not source code
6. **Research metadata sections unstyled** (FRESH-COMP-014) — Accurate but visually undesigned

### 4.5 Dual Nuclear Questions (from Retrospective 4.2)

The OD retrospective identified that a single Nuclear Question ("would they understand the identity?") produces different answers depending on epistemic position. AD MUST split into two:

1. **Insider test:** "Does this communicate the identity to someone who already understands the system?"
2. **Outsider test:** "Does this communicate the identity to someone encountering it for the first time?"

Both are valid. Both tracked separately. Their DIVERGENCE is the interesting signal.

---

===============================================================================
## 5. AD FIX-AND-VERIFY PROTOCOL
===============================================================================

### 5.1 Per-File Ownership (Zero Contention)

**Binary rule:** Each fixer agent owns specific files. No agent touches a file they don't own. Ever.

```
OWNERSHIP MATRIX TEMPLATE:

| Agent | AD-001 | AD-002 | AD-003 | AD-004 | AD-005 | AD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| Fixer-A | OWN | OWN | | | | |
| Fixer-B | | | OWN | | | |
| Fixer-C | | | | OWN | OWN | OWN |
```

**Why:** OD fix execution proved this. 4 fixers, zero file conflicts. Fixer-B (1 file) finished first (~7 min); Fixer-A (2 complex files) ~10 min. No coordination overhead for file access.

### 5.2 Fix Priority Threshold

| Severity | Action | Timeline |
|----------|--------|----------|
| CRITICAL | MUST fix before commit | Gate 4 blocker |
| HIGH | MUST fix before commit | Gate 4 blocker |
| MEDIUM | Fix if time allows | Not a Gate 4 blocker |
| LOW | Document, don't fix | Tracked for future |
| NOTE | Record only | Informational |

**Lesson from OD:** OD Fix #17 (subjective header meta layout) was deferred because it was a judgment call, not a binary fix. Only Critical/High get fixed. Medium/Low get documented. This prevents fix scope creep.

### 5.3 Sequential Verification (Programmatic THEN Visual)

**Phase 1: Programmatic Verification**

Run the same JavaScript evaluations that found the original issues, but against the fixed files. Every fixed element must now PASS the check that previously flagged it.

```
For each fix:
1. Navigate to the fixed page via HTTP
2. Run the specific evaluation that detected the original issue
3. Verify the computed value now matches expected
4. Record: fix_id, original_value, expected_value, new_computed_value, PASS/FAIL
```

**Phase 2: Visual Verification (AFTER programmatic)**

Take screenshots of the fixed pages and visually confirm the changes are visible.

```
For each fixed page:
1. Navigate to page
2. Wait for document.fonts.ready
3. Inject animation-disable CSS
4. Take screenshot at 1440px
5. Take screenshot at 768px
6. Compare against pre-fix screenshots (if available)
7. Confirm: fix is visually apparent, no regression visible
```

**Why sequential:** Playwright contention. If programmatic and visual verification run simultaneously, they fight over the browser. Running programmatic first (no screenshots needed) then visual (screenshots only) eliminates contention. This was confirmed in both the OD granular audit and the comprehensive audit.

### 5.4 Scribe Protocol (Provenance Updates After Fixes)

The OD comprehensive audit used 3 scribes: scribe-headers, scribe-chain, scribe-tracking. For AD, the scribe role can be simplified based on lessons learned:

**Scribe Tasks (can be 1 agent or 3 depending on fix volume):**

1. **Header Updates:** Add `AD-COMPREHENSIVE-AUDIT.md | [fix description]` to the BUILT ON section of every modified file's inline threading header. Match each file's existing BUILT ON format.

2. **Chain Document Updates:** Update PIPELINE-MANIFEST.md, relevant STAGE-HEADER.md, and DISCOVERIES-LOG.md with:
   - Audit scope (agent count, pillars, page count)
   - Finding breakdown (Critical/High/Medium/Low/Note counts)
   - Key fixes applied (list with file references)
   - Soul compliance confirmation (X/Y elements, 0 violations)
   - Verification results (N programmatic tests PASS, M screenshots PASS)

3. **Research Tracking:** Update RESEARCH-ACTIVE.md with:
   - Which R-* findings were applied during AD build
   - Which EXT-* findings were generated or applied
   - Which findings remain unapplied

**Lesson from comprehensive audit:** Scribes spawned as direct agents (not through a Captain-Fix hierarchy) worked perfectly. They wrote files reliably because they had no Playwright dependency — file-only agents have a near-100% success rate for writing output.

### 5.5 Soul Compliance Re-Verification (Post-Fix)

After ALL fixes are applied, run the full soul compliance sweep ONE MORE TIME on every modified file:

```
Post-edit checks on ALL modified files:
- border-radius: 0 everywhere: YES/NO
- box-shadow: none: YES/NO
- filter: none: YES/NO
- No new rgba() < 1 on backgrounds: YES/NO
- No 2px borders: YES/NO
- No off-palette colors: YES/NO
```

**ZERO new soul violations is the bar.** The OD fix execution achieved this. AD must match it.

---

===============================================================================
## 6. AD WEAVER PROTOCOL
===============================================================================

### 6.1 What the Weaver Does

The Weaver is the cross-reference intelligence layer. It reads all captain/worker reports and identifies:

1. **Cross-references:** Same finding detected by multiple agents (increases confidence)
2. **Contradictions:** Conflicting findings between agents (requires resolution)
3. **Emergent patterns:** Systemic issues visible only when findings are compared cross-pillar
4. **Convention drift:** Gradual divergence from convention during build (detectable by comparing Wave 1 vs Wave 2 output)

### 6.2 Proven Weaver Value

The Weaver is a **proven pattern across 3 team executions** (OD build, OD audit, comprehensive audit):

- OD audit: 18 cross-references produced
- Comprehensive audit: 15 cross-references, 0 contradictions, 4 emergent patterns
- OD build: Maintained state file, tracked progress automatically

**The Weaver is infrastructure, not experimental.** Every AD team MUST include one.

### 6.3 Cross-Reference Tracking Format

```markdown
### XR-NNN: [Title] — [CONFIRMED/TENSION/NEW]

| Source | Finding |
|--------|---------|
| Captain-Visual | [finding ID and summary] |
| Captain-Structural | [finding ID and summary] |

**Reconciliation:** [How the findings relate — same issue from different angles, or genuine contradiction]
**Confidence:** [DEFINITIVE / HIGH / MODERATE based on independent source count]
```

### 6.4 Contradiction Detection

When two captains disagree:

1. **Identify the specific disagreement** (not "they said different things" but "Captain A says X and Captain B says Y about the SAME element")
2. **Determine the measurement plane** — are they measuring different things? (OD's 2.22px was CSS source vs rendered value — both correct from their perspective)
3. **Record resolution authority** — which captain's finding takes precedence and why
4. **If genuinely contradictory** — escalate to Lead for investigation

**OD result:** 0 genuine contradictions found across comprehensive audit. The closest was the 2.22px border rendering (XR-007) which was reconciled as same data, different measurement plane.

### 6.5 Emergent Pattern Identification

The Weaver looks for patterns that no single captain can see:

**From OD comprehensive audit, 4 emergent patterns identified:**

1. **Post-re-enrichment metadata drift** (SYSTEMIC) — 5 provenance findings traced to single root cause (chain infrastructure not updated after 43-agent re-enrichment). This accounted for ~15% of ALL findings.

2. **DD pre-convention gap** (EXPECTED) — 12 findings across Visual and Structural traced to DD files predating convention spec. Not a defect — an architectural gap.

3. **rgba() epidemic** (NEW) — 102 instances across 10/12 pages. NOT caught by prior 17-agent OD audit or 43-agent re-enrichment. Only visible when comparing across all pages simultaneously.

4. **Absolute soul lock** (CONFIRMED) — 0 violations across ~13,000 elements checked by 3 independent processes. The single strongest result of the comprehensive audit.

**AD Weaver should specifically monitor for:**

- Convention drift between Wave 1 and Wave 2 builds
- Metadata consistency (do counts in chain docs match actual counts?)
- Cross-page component uniformity (same component type rendered differently on different pages)
- Research citation completeness (are all claimed research applications actually present?)

### 6.6 Convention Drift Monitoring During Build

**AD-specific Weaver responsibility:** During the build phase (not just during audit), the Weaver periodically checks:

1. Are Wave 2 files using the same :root tokens as Wave 1 files?
2. Has any builder introduced a new variable not in AD-CONVENTION-SPEC.md?
3. Are all files still soul-compliant as new content is added?
4. Are research applications accumulating or being forgotten?

This catches drift DURING build instead of discovering it AFTER build (as happened with OD's rgba() epidemic).

### 6.7 State File Maintenance

The Weaver maintains AD-AUDIT-STATE.md (or AD-BUILD-STATE.md during build):

```markdown
# AD Build/Audit State
## Last Updated: [timestamp]
## Current Phase: [SETUP | BUILD-W1 | BUILD-W2 | AUDIT | FIX | VERIFY | FINAL]

### Gate Status
| Gate | Status | Timestamp |
|------|--------|-----------|
| Gate 0 | PASS/FAIL/PENDING | |
| Gate 1 | PASS/FAIL/PENDING | |
| ... | | |

### Agent Status
| Agent | Status | Files Written | Last Activity |
|-------|--------|--------------|---------------|

### Key Findings (Updated by Weaver)
| # | Severity | Source | Description |
|---|----------|--------|-------------|

### Cross-References
[Maintained by Weaver during audit phase]
```

**Why this matters:** If any agent (including the Lead) compacts context, they re-read this file to recover orientation. The comprehensive audit validated this: after the Weaver updated AUDIT-STATE.md, the lead could see phase status, key findings, and next actions without reading individual agent files.

---

===============================================================================
## 7. AGENT TEAM ARCHITECTURE LESSONS (What to Carry Forward)
===============================================================================

### 7.1 What WORKED (Apply to AD)

| Pattern | Evidence | AD Application |
|---------|----------|----------------|
| Hierarchical topology (Lead -> Captains -> Workers) | Comprehensive audit: Lead managed 7 direct reports, zero compactions (vs prior flat 43 causing 3+ compactions) | AD MUST use hierarchical topology |
| Per-file ownership | Fix execution: 4 fixers, zero file conflicts | AD fixers get per-file ownership |
| Visual-first then programmatic | Retrospective: "epistemologically sound" — visual catches perceptual issues, programmatic quantifies | AD audit uses wave model |
| Fresh-eyes as mandatory | 2 Nuclear Question contradictions, 6 UNIQUE FRESH findings from 1 agent | AD MUST include fresh-eyes |
| Weaver as infrastructure | 3 successful deployments across 3 different team structures | AD MUST include Weaver |
| File-writing emphasis in prompts | Workers without "MUST use Write tool" instruction frequently complete without writing files | AD worker prompts MUST include explicit file-writing instruction |
| Sequential Playwright access | Eliminates contention that prevented 11 of 13 visual workers from getting screenshots | AD visual agents get sequential access |
| Binary rules (not judgment) | 100% compliance vs ~0% for judgment rules | ALL AD gates are PASS/FAIL |
| Single recovery agents | More reliable than captain->worker hierarchies for recovery | If a captain's workers fail, replace with single recovery agent doing work directly |

### 7.2 What FAILED (Avoid in AD)

| Anti-Pattern | Evidence | AD Avoidance |
|-------------|----------|--------------|
| Flat team (43 direct reports) | Lead compacted 3+ times | Never more than 7 direct reports for Lead |
| Workers without file-writing instruction | Frequently complete without writing output | CRITICAL: Every worker prompt includes "You MUST write your output file using the Write tool" |
| Adversarial self-debate (one agent arguing both sides) | Nearly-all-IMPROVE verdict distribution; no genuine epistemic tension | Use adversarial PAIRING (separate attack/defend agents) or accept that single-agent adversarial is performative |
| Time-based attention instructions ("look for 30 seconds") | No mechanism in agent context | Use concrete questions per viewport instead |
| Over-specified procedures (17 sub-checks with exact JS patterns) | Agents approximate the spirit, skip the letter; ambition-to-capacity ratio ~3:1 | Describe OUTCOMES not PROCEDURES; prioritize which checks matter most |
| Broadcast messages | Kills context across all recipients | NO broadcasts — use targeted messages only |
| Parallel Playwright access | Only 2 of 13 workers got actual screenshots | Sequential access or multiple server ports |

### 7.3 File-Writing Enforcement

**CRITICAL — THE most common failure mode across all team executions:**

Every worker prompt MUST include this exact text:

```
CRITICAL: You MUST write your output file using the Write tool before you finish.
Your output file path is: [exact path]
If you do not write this file, your work is LOST — no one can read your findings.
```

**Evidence:** Workers spawned by captains via Task tool frequently complete without writing files. Provenance/Triage workers (file-only, no Playwright) wrote files reliably. Visual/Structural workers (Playwright-dependent) did NOT write files reliably. The comprehensive audit required v2 respawns of Captain-Visual and Captain-Structural with explicit "MUST use Write tool" instructions.

---

===============================================================================
## 8. PLANTED VIOLATION PROTOCOL (From Retrospective Open Question 6)
===============================================================================

### 8.1 Calibrating Audit Accuracy

The OD retrospective identified the fundamental epistemological problem: "the audit's reliability depends on agent thoroughness, which we can't independently verify without doing the audit ourselves."

**Solution:** Before the AD audit, intentionally plant 5 known violations:

```
Plant 1: border-radius: 4px on one callout (1 file)
Plant 2: box-shadow: 0 2px 8px rgba(0,0,0,0.1) on one code block (1 file)
Plant 3: filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1)) on one header (1 file)
Plant 4: An off-palette color (#FF6B35) on one label (1 file)
Plant 5: A 2px border on one section divider (1 file)
```

**Detection rate scoring:**
- 5/5 caught: High confidence in audit thoroughness
- 3-4/5 caught: Moderate confidence, specific blind spots identified
- 1-2/5 caught: Low confidence, methodology needs rework
- 0/5 caught: Audit is not functional

**Implementation:** Lead plants the violations BEFORE spawning audit agents. Lead records the exact locations. After audit completes, Lead checks which planted violations were caught. This costs nothing except the time to plant violations. The insight is invaluable.

**Post-audit:** Remove all planted violations before the fix phase. They are diagnostic, not permanent.

---

**END OF AD SKELETON: QUALITY GATES & AUDIT PROTOCOL**

**Files Read for This Section:**
1. OD-GRANULAR-AUDIT-PROMPT.md (400 lines — adversarial protocol, identity traversal, 17 sub-checks)
2. COMPREHENSIVE-AUDIT-SPECIFICATION.md (500 lines — hierarchical team, 4 pillars, binary gates)
3. OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md (300 lines — what worked/failed, fresh-eyes value, prompt overcalibration)
4. OD-FIX-EXECUTION-PROMPT.md (200 lines — per-file ownership, FIX-STATE.md, 17 fix items)
5. MASTER-AUDIT-REPORT.md (200 lines — 58 findings, fix allocation, severity breakdown)
6. CAPTAIN-VISUAL-REPORT.md (full — 22 findings, 13 binary gates, rgba epidemic)
7. CAPTAIN-STRUCTURAL-REPORT.md (full — 4,876 elements, 21 findings, 0 soul violations)
8. CAPTAIN-FRESHEYES-REPORT.md (full — 66 findings, 6 UNIQUE FRESH, gestalt insight)
9. WEAVER-SYNTHESIS.md (200 lines — 15 cross-references, 4 emergent patterns, 0 contradictions)
10. CAPTAIN-FIX-REPORT.md (full — 10 Critical/High fixes, 18 files modified, 0 new violations)
11. visual-od-001.md (100 lines — per-page gate format, token verification, finding format)
12. structural-od.md (100 lines — element counts, soul sweep, rgba tracking, type verification)
13. scribe-chain.md (full — 3 chain documents updated, cross-checked data)
14. scribe-headers.md (full — 14 files updated, format matching per file)
