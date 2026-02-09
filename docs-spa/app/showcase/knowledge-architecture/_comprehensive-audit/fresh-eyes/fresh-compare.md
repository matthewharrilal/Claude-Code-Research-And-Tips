# Fresh-Eyes Comparison Report (Recovery Agent)
## Comparing Fresh Findings Against Regular Audit Reports
**Reviewer:** Fresh-Eyes Recovery Agent
**Date:** 2026-02-09
**Sources compared:** fresh-od-all.md, fresh-dd-all.md vs CAPTAIN-VISUAL-REPORT.md, CAPTAIN-STRUCTURAL-REPORT.md

---

## Methodology

1. Took fresh visual impressions from all 12 pages BEFORE reading any audit reports
2. Read CAPTAIN-VISUAL-REPORT.md and CAPTAIN-STRUCTURAL-REPORT.md
3. For each fresh finding, checked if regular audits caught the same issue
4. Classified as CONFIRMED (regular audit caught it) or UNIQUE-FRESH (they missed it)

---

## CONFIRMED Findings (Fresh matches Regular)

| ID | Fresh Finding | Regular Match | Assessment |
|----|--------------|---------------|------------|
| FRESH-COMP-001 | FRESH-DD-029: VS Code syntax colors in all DD code blocks | Visual Report Systemic #2: Off-Palette Code Block Colors | CONFIRMED -- both caught the same jarring DD code colors |
| FRESH-COMP-002 | FRESH-DD-030: White headers on all DD pages | Visual Report Systemic #5: Header Convention Divergence | CONFIRMED -- regular report noted white vs dark header gap |
| FRESH-COMP-003 | FRESH-DD-019: Multiple H1 elements in DD-004 | Structural Report STR-DD-001: 3 H1 elements in DD-004 | CONFIRMED -- structural caught the broken heading hierarchy |
| FRESH-COMP-004 | FRESH-DD-032: No skip-links or accessibility landmarks in DD | Structural Report STR-DD-004/005/008: Missing skip-link, focus-visible, ARIA | CONFIRMED -- structural caught all DD accessibility gaps |
| FRESH-COMP-005 | FRESH-DD-023: H1/H2 same visual size in DD-005 | Structural Report STR-DD-002: H2 at 32px same as H1 | CONFIRMED -- structural caught the flat heading hierarchy |
| FRESH-COMP-006 | FRESH-013: OD-004 header lighter than other ODs | Visual Report notes OD-004 unique findings | CONFIRMED -- recognized as a divergence |
| FRESH-COMP-007 | FRESH-DD-031: DD callout styling simpler than OD | Visual Report Systemic #5 + #6: Header/base style gaps | CONFIRMED -- regular report noted DD pre-convention gaps |
| FRESH-COMP-008 | FRESH-012: Stray "+" text below collapsed OD-003 islands | Not directly matched but OD-003 had 17 findings in visual report | PARTIAL -- visual report had OD-003 findings but this specific "+" artifact may have been one of them |
| FRESH-COMP-009 | FRESH-DD-018: DD-004 traffic-light effect | Visual Report: DD-004 "traffic-light adjacency (green tip next to coral gotcha)" | CONFIRMED -- exact same observation |

---

## UNIQUE FRESH Findings (What Biased Agents Missed)

These are findings that appear ONLY in the fresh-eyes review and were NOT caught by spec-aware auditors. This is the gold -- things that look wrong to a human eye but weren't flagged by agents looking through a compliance lens.

| ID | Fresh Finding | Why Regular Missed It | Significance |
|----|--------------|----------------------|--------------|
| FRESH-COMP-010 | FRESH-030: Pattern viz diagrams (OD-001 bar chart, OD-002 Freytag, OD-005 wave) use completely different visual vocabulary from text content -- feel "imported from elsewhere" | Regular auditors checked these against SPEC compliance (correct colors, correct tokens). They never asked: "does this diagram LOOK like it belongs on this page?" Spec compliance != visual cohesion. | **HIGH** -- These diagrams are the first thing a user sees. If they feel like imports from a PowerPoint deck rather than native design elements, the page's visual authority is undermined from the start. |
| FRESH-COMP-011 | FRESH-028/006: Scroll witness sidebar inconsistently present (only OD-001 and OD-006 have it, others don't). No pattern for when navigation aids appear | Regular auditors checked each page independently. They verified "does OD-002 have what it should?" but never asked "why does OD-001 have navigation and OD-002 doesn't?" Cross-page UX consistency was not in their scope. | **HIGH** -- A user browsing multiple pages would notice this immediately. Some pages help you navigate; others abandon you. This is a UX gap, not a code gap. |
| FRESH-COMP-012 | FRESH-029: Header styles across 6 OD pages feel like 3 different designers made them. OD-001/002 are "polished serif", OD-003 is "functional with colored blocks", OD-004 is "minimal", OD-005/006 are "ambitious/creative" | Regular auditors noted the "3 dialects" (Polished, Functional, Editorial) as a known classification. But they ACCEPTED this as intentional variation rather than QUESTIONING whether it serves the user. The spec legitimized the inconsistency. | **MEDIUM** -- The "3 dialects" framing makes this sound deliberate, but from a fresh-eyes perspective, it just looks inconsistent. A new user wouldn't know about dialects -- they'd just see pages that don't match. |
| FRESH-COMP-013 | FRESH-DD-002: INHALE/EXHALE density markers in DD-001 look like debug annotations left in the page | Regular auditors recognized these as intentional "density breathing" indicators per the DD-001 hypothesis. They evaluated them as correct implementation of the concept. A fresh eye sees: "why is there uppercase green text saying EXHALE floating above the section?" | **MEDIUM** -- These labels serve the exploration hypothesis but look unprofessional to someone not "in on the concept." If these pages are ever shown to stakeholders, the markers need visual polish. |
| FRESH-COMP-014 | FRESH-003/026: Research Enrichments Applied sections (OD bottom) and OD-006 footer metadata block are walls of unstyled text | Regular auditors verified that research citations EXIST and are CORRECT. They never evaluated whether the presentation of this metadata is good design. The metadata is accurate but ugly. | **LOW** -- This is "backstage" content that most readers won't reach. But for the small percentage who scroll to the bottom, it makes the otherwise polished page end with a whimper. |
| FRESH-COMP-015 | FRESH-018: OD-005 density wave visualization is nearly illegible at 768px | Regular auditors noted OD-005 was compliant. The wave visualization's readability at small sizes was not tested because most auditors were using source-code analysis (Playwright contention meant only 2/13 workers got actual visual verification). | **MEDIUM** -- This is a real rendering issue that source-code analysis cannot catch. The SVG scales poorly. |

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Total Fresh Findings (OD + DD) | 66 |
| CONFIRMED (matches regular audit) | 9 |
| UNIQUE FRESH (regular audit missed) | 6 |
| Remaining (minor findings not in either category) | 51 |

---

## Key Insight

The regular auditors were **excellent at compliance** (soul violations, token values, border widths, accessibility attributes) but **weak at gestalt** (does the page feel cohesive? do the diagrams belong? is the cross-page experience consistent?). This is the fundamental limitation of spec-driven auditing: it can verify "does this match the rule?" but not "does this look right to a human?"

The 6 UNIQUE FRESH findings cluster into two themes:
1. **Visual cohesion of diagrams/visualizations** (FRESH-COMP-010, 015) -- the diagrams are technically correct but visually alien
2. **Cross-page UX consistency** (FRESH-COMP-011, 012) -- each page passes its own audit but the set doesn't feel unified
