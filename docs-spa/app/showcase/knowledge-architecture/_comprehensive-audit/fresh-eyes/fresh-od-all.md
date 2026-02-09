# Fresh Eyes OD Findings (Recovery Agent)
## Unbiased Visual Review of 6 OD HTML Pages
**Reviewer:** Fresh-Eyes Recovery Agent
**Date:** 2026-02-09
**Method:** Playwright screenshots at 1440px and 768px, no spec reading, pure visual impression

---

## OD-001: Conversational Structure

**Overall Impression:** Strong. Professional, readable, clear Q&A pattern. The dark header with serif title is striking. Scroll witness sidebar (left nav) works well at 1440px.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-001 | MINOR | Pattern visualization at top has a bright red block that feels jarring against the otherwise muted palette -- the bar chart element with red/gray bars looks like a placeholder or debug element |
| FRESH-002 | MINOR | At 768px, the scroll witness sidebar disappears but the content width doesn't fully utilize the recovered space -- dead margin on the left |
| FRESH-003 | MINOR | "Research Enrichments Applied" section at bottom is very dense -- feels like metadata dump rather than designed content |
| FRESH-004 | INCONSISTENT | The pattern viz diagram uses different visual language (colored bars, horizontal layout) than the rest of the page |

## OD-002: Narrative Arc Structure

**Overall Impression:** Very similar DNA to OD-001. Strong typography. Act structure with Roman numerals is elegant. Tension meter on act headers is a nice touch.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-005 | MINOR | The "Tension" meter on act headers is so subtle it's almost invisible -- a thin colored line that doesn't read at a glance |
| FRESH-006 | INCONSISTENT | No scroll witness sidebar (unlike OD-001). Same design system, completely different navigation affordance |
| FRESH-007 | MINOR | The Freytag 5-Beat Model diagram at top has the "imported from elsewhere" feel |
| FRESH-008 | MINOR | "Turning Point" callout between Act II and Act III uses different visual treatment than "Essence" callouts |

## OD-003: Task-Based Structure

**Overall Impression:** Distinctive. Task island pattern with collapsible sections and numbered badges is well-executed. Header with colored task blocks gives good overview.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-009 | UGLY | At 768px, the task archipelago blocks in the header (numbered 1-6) are cramped and text gets very small |
| FRESH-010 | INCONSISTENT | Color coding for difficulty (green/beginner, red/intermediate, purple/advanced) introduces colors not seen anywhere else in OD pages |
| FRESH-011 | MINOR | The "+" and "-" expand/collapse indicators are plain text characters rather than styled icons |
| FRESH-012 | BROKEN | Stray "+" text appears below collapsed task islands in both widths -- rendering artifacts from collapse mechanism |

## OD-004: Confidence-Based Structure

**Overall Impression:** Good concept. Geological strata metaphor works well. Progress bars between strata are a nice touch. Tab filter is useful.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-013 | INCONSISTENT | Header is lighter/simpler than OD-001/002/006 -- no dark full-bleed header, feels like a different generation |
| FRESH-014 | MINOR | The nav buttons (Established, Probable, Speculative, Open) at top right are very small and low-contrast |
| FRESH-015 | UGLY | "What Would Change This Rating" boxes use heavy dark background creating stark contrast jumps |
| FRESH-016 | MINOR | Progress indicators between strata are tiny and hard to see at 768px |
| FRESH-017 | INCONSISTENT | Side-by-side comparison boxes break at 768px with unclear stacking behavior |

## OD-005: Spatial/Hub-Spoke Structure

**Overall Impression:** Most unique page. Hub-spoke navigation with territory cards is conceptually strong. Two-column layout works well.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-018 | UGLY | The density wave visualization at top is extremely hard to read -- tiny labels, thin lines, SVG feels too compressed. Nearly illegible at 768px |
| FRESH-019 | INCONSISTENT | Territory navigation cards have colored left borders (different colors per territory) introducing new colors not in standard palette |
| FRESH-020 | MINOR | Breadcrumb navigation uses a plain ">" character instead of a styled separator |
| FRESH-021 | MINOR | "Return to Map" link is styled as plain text with arrow character -- not obviously clickable |
| FRESH-022 | MINOR | Footer territory summary repeats same cards in different layout |

## OD-006: Creative/Emergent Structure

**Overall Impression:** Most ambitious page. Left sidebar with section progress is excellent. Visual index grid is creative. Feels like a capstone.

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-023 | UGLY | Miniature pattern visualizations in visual index grid are so small they're hard to decipher |
| FRESH-024 | MINOR | Fractal scale annotation sidebar crowds main content at certain scroll positions |
| FRESH-025 | INCONSISTENT | Section transition dividers use red horizontal rules -- the red feels aggressive |
| FRESH-026 | MINOR | Footer metadata block is a wall of unstyled text with no visual hierarchy |
| FRESH-027 | MINOR | At 768px, both sidebars disappear but content doesn't reflow to use full width |

---

## Cross-OD Observations

| ID | Severity | Finding |
|----|----------|---------|
| FRESH-028 | INCONSISTENT | Scroll witness sidebar present in OD-001 and OD-006 only -- no clear pattern for when navigation aids appear |
| FRESH-029 | INCONSISTENT | Header styles vary significantly across 6 pages -- feels like 3 different designers |
| FRESH-030 | UGLY | Pattern viz diagrams (OD-001 bar chart, OD-002 Freytag, OD-005 wave) all use different visual vocabulary from text content |
| FRESH-031 | INCONSISTENT | Code block header bar varies -- some have language label + copy button, some just copy |
| FRESH-032 | MINOR | Serif italic font in Essence callouts reads as decorative rather than authoritative when text is very long |

---

**Total OD Fresh Findings: 32**
- UGLY: 4
- BROKEN: 1
- INCONSISTENT: 8
- MINOR: 19
