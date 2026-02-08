# Structural Integrity Audit — All 6 ODs

**Auditor:** STRUCTURAL
**Date:** 2026-02-07
**Method:** Playwright browser_evaluate + browser_run_code on http://localhost:8080
**Scope:** Semantic HTML, ARIA, Focus Management, HTML Validation, Distributed Checks (12-14)

---

## OD-001: Conversational Structure

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | WARN | Only 1 heading (H1). Chapter titles, section titles all rendered as styled divs, not h2/h3. Screen readers see a flat document. |
| Landmark regions | PARTIAL | header: 1, nav: 1, section: 3 -- but **no `<main>`**. Content body is a generic div. |
| List usage | MINIMAL | 1 ul (summary list). Q&A pairs, enrichment items, code line numbers all use div sequences. |
| Table usage | PASS | 1 table with proper thead/tbody/th (Server vs Client comparison). |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 1 | Nav element labeled. |
| aria-labelledby | 0 | Sections not labeled by their headings (because headings are divs). |
| aria-expanded | 0 | 2 `<details>` elements have no aria-expanded. Native `<details>` handles this implicitly in modern browsers — ACCEPTABLE. |
| role attributes | 0 | No explicit roles. Relying on semantic elements where present. |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 4 anchors with # hrefs (scroll witness nav links). No dedicated "Skip to content" link. |
| Tab order | 7 focusable elements (4 anchors, 2 copy buttons, 1 unknown). Logical within what exists. |
| tabindex usage | 0 | No custom tabindex — acceptable for static content. |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 duplicates |
| Missing alt text | PASS — 0 images without alt |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |
| Orphaned labels | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE — uses browser default scrollbar |
| 13 | Selection color (::selection) | NONE — uses browser default selection |
| 14 | Print styles (@media print) | NONE — no print stylesheet |

### Details/Summary Elements
- 2 `<details>` elements, both with proper `<summary>` children
- "Dive deeper -- serialization boundary rules"
- "Dive deeper -- Server Actions vs API Routes"

### Severity Summary
- **CRITICAL:** No `<main>` landmark. Screen readers cannot identify the primary content area.
- **HIGH:** Only 1 heading (H1). All chapter titles and section headers are styled divs — heading hierarchy is completely flat. Screen reader navigation by heading is impossible.
- **MEDIUM:** No skip-to-content link.
- **LOW:** No ::selection styling, no print styles, no custom scrollbar.

---

## OD-002: Narrative Arc Structure

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | WARN | Only 1 heading (H1). Same issue as OD-001 — act titles, section titles all styled divs. |
| Landmark regions | PARTIAL | header: 1, section: 2 -- **no `<main>`**, **no `<nav>`**. |
| List usage | MINIMAL | 1 ul (summary list). Code line sequences, act sections all div-based. |
| Table usage | PASS | 1 table with proper thead/tbody/th (Tutorial vs Production comparison). |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 0 | Nothing labeled. |
| aria-labelledby | 0 | No section-heading associations. |
| aria-expanded | 0 | No collapsible sections in OD-002. |
| role attributes | 0 | No explicit roles. |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 0 | No anchor links at all. No nav structure. |
| Tab order | 4 focusable elements (copy buttons only). |
| tabindex usage | 0 | |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 |
| Missing alt text | PASS — 0 |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |
| Orphaned labels | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE |
| 13 | Selection color | NONE |
| 14 | Print styles | NONE |

### Details/Summary Elements
- 0 `<details>` elements.

### Severity Summary
- **CRITICAL:** No `<main>` landmark.
- **HIGH:** Only 1 heading (H1). All act titles and section headers are divs. Completely flat heading tree.
- **HIGH:** Zero ARIA attributes of any kind. Least accessible of all 6 ODs.
- **MEDIUM:** No skip-to-content link. No navigation structure at all.
- **LOW:** No ::selection, no print styles, no scrollbar styling.

---

## OD-003: Task-Based Structure

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | PASS | 10 headings: H1 > H2 (x8) > H3 (x1). No skips. Proper hierarchy. **Best of all ODs.** |
| Landmark regions | PASS | **main: 1**, header: 1, section: 2, **article: 6** (one per task island). Excellent semantic structure. |
| List usage | GOOD | 2 ul + 6 ol. Task steps use ordered lists — semantically correct. |
| Table usage | PASS | 1 table with thead/tbody/th (Pattern Analysis). |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 1 | Checklist labeled. |
| aria-labelledby | 8 | Task islands properly linked to their headings. **Best ARIA of all ODs.** |
| aria-expanded | 0 | 6 `<details>` elements — native handling acceptable. |
| role attributes | 12 roles | banner: 1, main: 1, separator: 10. Explicit roles reinforce semantics. |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 0 | No skip-to-content. No internal anchors despite long scrolling page. |
| Tab order | 0 focusable elements detected. Copy buttons may not be present in OD-003. |
| tabindex usage | 0 | |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 |
| Missing alt text | PASS — 0 |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |
| Orphaned labels | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE |
| 13 | Selection color | NONE |
| 14 | Print styles | NONE |

### Details/Summary Elements
- 6 `<details>` with proper `<summary>` — one per task island ("If This Fails" troubleshooting).

### Severity Summary
- **NONE CRITICAL.** OD-003 has the best semantic structure of all 6 ODs.
- **MEDIUM:** No skip-to-content link (long page — would benefit from one).
- **MEDIUM:** 0 focusable interactive elements despite having copy-able code blocks.
- **LOW:** No ::selection, no print styles, no scrollbar styling.

---

## OD-004: Confidence-Based Structure

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | PASS | 18 headings: H1 > H2 (x7) > H3 (x10). No skips. Proper hierarchy. |
| Landmark regions | PASS | **main: 1**, header: 1, section: 6 (one per stratum + survey + summary), **article: 11** (one per practice). |
| List usage | GOOD | 5 ul. Lists used for evidence bullets within articles. |
| Table usage | PASS (trivially) | 0 tables. All data presented as structured prose/callouts. |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 15 | Extensive labeling — stratum regions, separators, progress indicators all labeled. **Highest aria-label count.** |
| aria-labelledby | 0 | Sections use aria-label directly rather than aria-labelledby. |
| aria-expanded | 0 | 1 `<details>` — native handling. |
| role attributes | tablist: 1, tab: 3, separator: 4 | Tab interface for confidence filter. |

### Tab Interface ARIA Audit
| Check | Result | Notes |
|-------|--------|-------|
| role="tablist" | PASS — 1 tablist | "Confidence level filter" |
| role="tab" | PASS — 3 tabs | "Facts Only", "Full Analysis", "Everything" |
| aria-selected | PARTIAL — 1 of 3 | Only the active tab has aria-selected. Other tabs should have aria-selected="false". |
| aria-controls | FAIL — 0 of 3 | No tab links to its controlled panel via aria-controls. |
| role="tabpanel" | FAIL — 0 tabpanels | No tabpanel roles found. The content sections lack tabpanel semantics. |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 0 | No skip-to-content. |
| Tab order | 0 focusable elements (tabs may be clickable divs without tabindex). |
| tabindex usage | 0 | Tab elements should have tabindex for keyboard access. |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 |
| Missing alt text | PASS — 0 |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE |
| 13 | Selection color | NONE |
| 14 | Print styles | NONE |

### Severity Summary
- **HIGH:** Tab interface incomplete — missing aria-controls, tabpanel roles, and tabindex on tabs. Keyboard users cannot operate the confidence filter.
- **HIGH:** Tabs have no tabindex — they are not keyboard-focusable.
- **MEDIUM:** aria-selected missing on inactive tabs (should be `aria-selected="false"`).
- **MEDIUM:** No skip-to-content link.
- **LOW:** No ::selection, no print styles, no scrollbar styling.

---

## OD-005: Spatial/Hub-Spoke Structure

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | PASS | 26 headings: H1 > H2 (x8) > H3 (x17). No skips. Most headings of any OD — reflects hub + spoke depth. |
| Landmark regions | EXCELLENT | **main: 1**, header: 1, footer: 1, **nav: 6** (territory navs), section: 8, **aside: 6** (spoke sidebars). **Most complete landmark structure.** |
| List usage | GOOD | 6 ul. |
| Table usage | PASS | 2 tables, both with thead/th. |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 20 | **Highest of all ODs.** Nav regions, asides, sections all labeled. |
| aria-labelledby | 0 | Uses aria-label pattern. |
| aria-expanded | 0 | No collapsible sections. |
| role attributes | banner: 1, main: 1, contentinfo: 1 | Explicit footer role via `contentinfo`. |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 26 anchor links | Hub-spoke internal navigation is extensive. Territory cards link to spoke sections. |
| Tab order | 33 focusable elements | Highest count — reflects rich navigation between hub and spokes. |
| tabindex usage | 0 | Natural tab order via anchor elements. |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 |
| Missing alt text | PASS — 0 |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE |
| 13 | Selection color | NONE |
| 14 | Print styles | NONE |

### Severity Summary
- **NONE CRITICAL.** OD-005 has the most complete structural implementation.
- **LOW:** No ::selection, no print styles, no scrollbar styling.

---

## OD-006: Creative/Emergent Synthesis

### Semantic HTML
| Check | Result | Notes |
|-------|--------|-------|
| Heading hierarchy | PASS | 12 headings: H1 > H2 (x6) > H3 (x5). No skips. |
| Landmark regions | PASS | **main: 1**, header: 1, footer: 1, nav: 1, section: 6. |
| List usage | NONE | 0 ul, 0 ol. All content in prose/callouts/tables. Appropriate for synthesis format. |
| Table usage | PASS | 2 tables, both with thead/tbody/th. |

### ARIA Attributes
| Check | Result | Notes |
|-------|--------|-------|
| aria-label | 2 | Nav and one section. |
| aria-labelledby | 6 | Sections linked to their headings. |
| aria-expanded | 0 | 1 `<details>` — native handling. |
| role attributes | main: 1, navigation: 1, separator: 5 | |

### Focus Management
| Check | Result | Notes |
|-------|--------|-------|
| Skip links | 7 anchor links | Section navigation in nav element. |
| Tab order | 9 focusable elements | Nav links + anchors. |
| tabindex usage | 0 | |

### HTML Validation
| Check | Result |
|-------|--------|
| Duplicate IDs | PASS — 0 |
| Missing alt text | PASS — 0 |
| Empty links | PASS — 0 |
| Empty buttons | PASS — 0 |

### Distributed Checks (Section 13)
| # | Check | Result |
|---|-------|--------|
| 12 | Scrollbar styling | NONE |
| 13 | Selection color | NONE |
| 14 | Print styles | NONE |

### Details/Summary Elements
- 1 `<details>` with `<summary>`: "What makes this emerging rather than established..."

### Severity Summary
- **NONE CRITICAL.** Solid semantic structure.
- **MEDIUM:** No skip-to-content link.
- **LOW:** No ::selection, no print styles, no scrollbar styling.

---

## CROSS-OD FINDINGS SUMMARY

### Finding Matrix

| Finding | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---------|--------|--------|--------|--------|--------|--------|
| Has `<main>` | NO | NO | YES | YES | YES | YES |
| Heading hierarchy | FLAT (1) | FLAT (1) | GOOD (10) | GOOD (18) | GOOD (26) | GOOD (12) |
| Has `<article>` | NO | NO | YES (6) | YES (11) | NO | NO |
| Has `<nav>` | YES (1) | NO | NO | NO | YES (6) | YES (1) |
| Has `<footer>` | NO | NO | NO | NO | YES | YES |
| Has `<aside>` | NO | NO | NO | NO | YES (6) | NO |
| aria-label count | 1 | 0 | 1 | 15 | 20 | 2 |
| aria-labelledby count | 0 | 0 | 8 | 0 | 0 | 6 |
| Skip links | 4 | 0 | 0 | 0 | 26 | 7 |
| Focusable elements | 7 | 4 | 0 | 0 | 33 | 9 |
| Duplicate IDs | 0 | 0 | 0 | 0 | 0 | 0 |
| Empty links/buttons | 0 | 0 | 0 | 0 | 0 | 0 |
| `<details>` elements | 2 | 0 | 6 | 1 | 0 | 1 |
| Custom scrollbar | NO | NO | NO | NO | NO | NO |
| ::selection styling | NO | NO | NO | NO | NO | NO |
| @media print | NO | NO | NO | NO | NO | NO |
| Tab ARIA complete | N/A | N/A | N/A | FAIL | N/A | N/A |

### CRITICAL Findings (must fix)

1. **STR-001: OD-001 and OD-002 lack `<main>` landmark.** Screen readers cannot identify the primary content area. This is the most basic accessibility requirement for page structure. Both ODs wrap content in generic `<div>` elements instead.

2. **STR-002: OD-001 and OD-002 have completely flat heading hierarchies.** Both have only a single H1 with all subsequent titles as styled divs. Chapter titles, section headers, and subsections are invisible to heading navigation. This makes these two ODs essentially un-navigable for assistive technology users.

3. **STR-003: OD-004 tab interface has incomplete ARIA.** The confidence filter tabs have `role="tablist"` and `role="tab"` but are missing `aria-controls` on all 3 tabs, `role="tabpanel"` on content sections, `aria-selected="false"` on inactive tabs, and `tabindex` for keyboard focusability. The tabs are likely not keyboard-operable.

### HIGH Findings

4. **STR-004: OD-002 has zero ARIA attributes.** No aria-label, no aria-labelledby, no roles. Least accessible OD.

5. **STR-005: Inconsistent landmark patterns across ODs.** OD-003 through OD-006 were built with proper landmark structures; OD-001 and OD-002 were not. This suggests OD-001 and OD-002 were built before the team established landmark conventions.

### MEDIUM Findings

6. **STR-006: No skip-to-content link on any OD.** While OD-005 has extensive internal navigation, none of the 6 ODs has a dedicated "Skip to main content" link as the first focusable element.

7. **STR-007: OD-003 has 0 focusable elements despite having code blocks.** The code blocks in OD-003 use non-interactive elements. Copy buttons (if present) are not in the accessibility tree.

### LOW Findings (consistent across all 6)

8. **STR-008: No custom ::selection styling.** All 6 ODs use browser default text selection colors. For brand consistency, a warm selection color from the palette (e.g., light red tint) could be added.

9. **STR-009: No @media print styles.** None of the 6 ODs include print-specific CSS. For documentation that users might print, hiding navigation, adjusting margins, and ensuring content fits paper would be beneficial.

10. **STR-010: No custom scrollbar styling.** All 6 use default browser scrollbars. This is a minor consistency concern — could add subtle warm-toned scrollbar tracks to match the design system.

---

## COMPACTION-SAFE SUMMARY

**Agent:** STRUCTURAL
**Files audited:** 6 (OD-001 through OD-006)
**Method:** Playwright programmatic evaluation on localhost:8080
**Total findings:** 10

**Critical (3):**
- STR-001: OD-001+002 missing `<main>` landmark
- STR-002: OD-001+002 flat heading hierarchy (only H1)
- STR-003: OD-004 tab ARIA incomplete (no aria-controls, no tabpanel, no tabindex)

**High (2):**
- STR-004: OD-002 zero ARIA attributes
- STR-005: Inconsistent landmarks (OD-001+002 vs OD-003-006)

**Medium (2):**
- STR-006: No skip-to-content on any OD
- STR-007: OD-003 code blocks not focusable

**Low (3):**
- STR-008: No ::selection styling (all 6)
- STR-009: No print styles (all 6)
- STR-010: No custom scrollbar (all 6)

**Best-structured ODs:** OD-005 (most complete landmarks + ARIA), OD-003 (best heading hierarchy + article usage)
**Worst-structured ODs:** OD-002 (zero ARIA, no main, flat headings), OD-001 (no main, flat headings)
