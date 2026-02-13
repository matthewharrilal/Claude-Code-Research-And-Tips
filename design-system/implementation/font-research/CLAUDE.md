<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/font-research/CLAUDE.md
Tier: C | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering font-research/. Documents the completed
typography research that led to selecting Instrument Serif as the KORTAI display
font. The decision is LOCKED and feeds into T1 synthesis via DESIGN-TOKEN-SUMMARY.md.

3. STATUS
ACTIVE (decision is final and locked — folder is read-only archive)

5. BUILT ON
7 font specimens, 5 comparison analyses, feasibility study, letterform analysis.
Created during Phase 2A Part 3 classification.

8. CONSUMED BY
Agents needing font rationale read FINAL-DECISION.md. The Instrument Serif
decision feeds into typography-system/ and DESIGN-TOKEN-SUMMARY.md (--font-display).

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# font-research — CLAUDE.md

## STATUS: ARCHIVE — Complete (Instrument Serif Decision Final)

This folder contains the typography research that led to selecting **Instrument Serif** as the KORTAI display font. The research is complete and the decision is locked.

## What This Folder Contains

Typography research and decision documentation:
- **FINAL-DECISION.md** — Why we chose Instrument Serif
- **comparisons/** — 5 font comparison analyses + ranking summary
- **specimens/** — 7 font specimens + comparison summary
- **feasibility.md** — Technical feasibility analysis
- **letterform-analysis.md** — Character-by-character analysis

## Why This Exists

Early in the design system work, we needed to select a display font that embodied the "Unhurried Editor" soul piece. This research:
1. Evaluated 7 serif options (Instrument Serif, Bodoni Moda, Right Didone, Libre Bodoni, Abril Fatface, Domaine Display, Noe Display)
2. Compared readability, character, and soul alignment
3. Assessed technical feasibility (web fonts, licensing)
4. Made final decision: **Instrument Serif**

The decision is LOCKED and feeds into T1 synthesis via DESIGN-TOKEN-SUMMARY.md.

## Pipeline Position

```
[FONT-RESEARCH] ──(complete)──> perceptual-audit-v2/ → T1 Synthesis
       ↓
   Instrument Serif decision locked in:
   DESIGN-TOKEN-SUMMARY.md → --font-display: 'Instrument Serif'
```

## Constraints

- **DO NOT change the font decision** — Instrument Serif is locked
- **DO NOT add new font research** — The decision is final
- **Reference FINAL-DECISION.md** if explaining why Instrument Serif

## Key Files (Start Here)

| File | Purpose | Status |
|------|---------|--------|
| `FINAL-DECISION.md` | Why Instrument Serif was chosen | KEEP+FULL (authoritative) |
| `feasibility.md` | Technical feasibility analysis | KEEP+LIGHT |
| `letterform-analysis.md` | Character-by-character comparison | KEEP+LIGHT |
| `identification-results.md` | Font identification findings | KEEP+LIGHT |
| `classification-research.md` | Font classification context | KEEP+LIGHT |

## What You'll Find Here

| Item | Type | Description |
|------|------|-------------|
| `FINAL-DECISION.md` | File | The authoritative font decision document |
| `feasibility.md` | File | Technical analysis of font options |
| `letterform-analysis.md` | File | Character-by-character comparison |
| `identification-results.md` | File | Font identification results |
| `classification-research.md` | File | Font classification research |
| `PROGRESS.md` | File | Status tracking |
| `comparisons/` | Directory | 5 font comparisons + RANKING-SUMMARY.md |
| `specimens/` | Directory | 7 font specimens + COMPARISON-SUMMARY.md |

## Where To Go Next

| If You Want To... | Go To |
|-------------------|-------|
| Understand why Instrument Serif | `FINAL-DECISION.md` |
| See the locked token value | `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` |
| See font in use | `../../docs-spa/app/showcase/explorations/density/DD-006-fractal.html` |
| Compare specific fonts | `comparisons/` |

## Upstream Sources

- Sanrok Studio reference screenshots (Instrument Serif identification)
- Google Fonts specimen pages and font foundry documentation
- Design system soul requirements (display font must embody "Unhurried Editor")

## Downstream Consumers

- `../component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` — `--font-display: 'Instrument Serif'`
- `../typography-system/typography.css` — Implements the Instrument Serif decision in production CSS

## For Context Recovery

**Status:** COMPLETE (decision locked)
**Decision:** Instrument Serif for display font
**Locked in:** `--font-display: 'Instrument Serif'` in DESIGN-TOKEN-SUMMARY.md
