<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: design-extraction/component-system/perceptual-audit-v2/CLAUDE.md
Tier: C | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Navigation file for agents entering perceptual-audit-v2/. Documents the folder's
role as the T1 SYNTHESIS AUTHORITY — the 6 canonical synthesis files that define
the KORTAI design system's soul, tokens, characters, anti-patterns, and rules.

3. STATUS
ACTIVE (T1 authority — highest precedence in design-extraction)

5. BUILT ON
The 6 T1 synthesis files in synthesis/, 11 component audits, foundation research,
and tracking registries. Created during Phase 2A Part 3 classification.

8. CONSUMED BY
All agents doing design work read this to locate T1 authority files. Routes agents
to synthesis/ and enforces constraints (border-radius: 0, box-shadow: none, locked tokens).

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# perceptual-audit-v2 — CLAUDE.md

## STATUS: ACTIVE — T1 SYNTHESIS AUTHORITY

This folder contains the **canonical source of truth** for the KORTAI design system. The 6 T1 synthesis files in `synthesis/` are the highest authority for soul, tokens, patterns, and constraints.

## What This Folder Contains

The complete perceptual audit of 11 KORTAI components, including:
- **Foundation work** — Soul extraction, essence research, translation guide
- **Component audits** — Per-component analysis (challenge-callout, code-snippet, etc.)
- **T1 Synthesis** — The 6 authoritative files that define the design system
- **Tracking** — Token registries, perceptual truths, named characters

This represents months of perceptual deepening work distilled into actionable specifications.

## Why This Exists

The original component-system/ analysis was too scattered. This v2 audit used a structured "perceptual deepening protocol" to:
1. Extract soul pieces through visual analysis
2. Lock token values through consistency verification
3. Name component characters through pattern recognition
4. Register anti-patterns through violation analysis

The result: 6 T1 files that any downstream work MUST consume.

## Pipeline Position

```
Research → [T1 SYNTHESIS ← YOU ARE HERE] → DD → OD → AD → CD
           ↑                               ↓
    Receives from:                   Feeds into:
    - showcase/research/             - showcase/explorations/density/
    - component-system/archive/      - DESIGN-SYSTEM/patterns/
    - font-research/                 - knowledge-architecture/
```

## Constraints (Read Before Modifying Anything)

- **DO NOT modify synthesis/ files without Phase-level approval** — These are locked T1 sources of truth
- **DO NOT add new token values** — All tokens are locked in DESIGN-TOKEN-SUMMARY.md
- **DO NOT create new soul pieces** — The 5 soul pieces are final
- **DO NOT bypass the synthesis files** — Never reference component audits directly; always go through synthesis
- **ASSUME nothing is optional** — Every constraint in PRODUCTION-RULES.md is mandatory
- **border-radius MUST be 0** — This is soul-locked, no exceptions
- **box-shadow MUST be none** — This is soul-locked, no exceptions

## Key Files (Start Here)

| File | Purpose | Inbound Refs |
|------|---------|--------------|
| `synthesis/MASTER-SOUL-SYNTHESIS.md` | The 5 soul pieces that define KORTAI's character | 15+ |
| `synthesis/DESIGN-TOKEN-SUMMARY.md` | Complete locked :root block with all CSS variables | 18+ |
| `synthesis/CHARACTER-FAMILY-COMPLETE.md` | 11 named component characters with specifications | 6+ |
| `synthesis/ANTI-PATTERNS-REGISTRY.md` | "The Soul Test" — what violates the design system | 6+ |
| `synthesis/PRODUCTION-RULES.md` | Mandatory rules for any implementation | 5+ |
| `foundation/KORTAI-ESSENCE-FOUNDATION.md` | Deep soul research backing the synthesis | 8+ |

## What You'll Find Here

| Item | Type | Description |
|------|------|-------------|
| `synthesis/` | Directory | **T1 FILES** — 6 authoritative synthesis documents |
| `foundation/` | Directory | Soul essence research: KORTAI-ESSENCE-FOUNDATION.md, SOUL-TRANSLATION-GUIDE.md |
| `tracking/` | Directory | Token registries (COLOR-TOKENS, TYPOGRAPHY-TOKENS, etc.) |
| `components/` | Directory | Per-component audits (11 components) |
| `coexistence/` | Directory | Cross-component analysis |
| `re-audit/` | Directory | Follow-up audits and verification |
| `delta-pairs/` | Directory | Before/after comparison pairs |
| `pages/` | Directory | Page-level audit work |
| `screenshots/` | Directory | Visual evidence from audits |
| `soul-extractions/` | Directory | Raw soul extraction work |
| `checkpoints/` | Directory | Session state preservation |
| `MASTER-INDEX.md` | File | Navigation index for this folder |
| `EXECUTION-STATE.md` | File | Current state of audit work |
| `DECISION-LOG.md` | File | Decision history |
| `CONSISTENCY-REGISTRY.md` | File | Verified consistency tracking |
| `CHECKPOINT-CURRENT.md` | File | Current checkpoint state |
| `CONTEXT-RESTORATION.md` | File | Context recovery instructions |
| `VISUAL-AUDIT-TRACKER.md` | File | Visual audit progress |

## Where To Go Next

| If You Want To... | Go To |
|-------------------|-------|
| Understand the soul | `synthesis/MASTER-SOUL-SYNTHESIS.md` |
| Get CSS token values | `synthesis/DESIGN-TOKEN-SUMMARY.md` |
| See component characters | `synthesis/CHARACTER-FAMILY-COMPLETE.md` |
| Know what NOT to do | `synthesis/ANTI-PATTERNS-REGISTRY.md` |
| See implementation rules | `synthesis/PRODUCTION-RULES.md` |
| Understand soul translation | `foundation/SOUL-TRANSLATION-GUIDE.md` |
| Understand a specific component | `components/[component-name]/` |

## Upstream Sources

- `../../../docs-spa/app/showcase/research/` — R1-R5 research findings
- `../archive/` — Historical token explorations (SUPERSEDED)
- `../../card-system/` — Original soul thinking (SUPERSEDED)
- `../../font-research/` — Instrument Serif decision

## Downstream Consumers

- `../../../docs-spa/app/showcase/explorations/density/` — DD explorations consume soul + tokens
- `../../../docs-spa/app/showcase/DESIGN-SYSTEM/` — Public-facing docs consume T1 synthesis
- `../../../docs-spa/app/showcase/knowledge-architecture/` — Pipeline docs reference T1 files
- Any OD/AD/CD work — MUST consume synthesis/ before starting

## For Context Recovery

**Audit status:** COMPLETE for all 11 components
**T1 synthesis:** COMPLETE and LOCKED
**What to verify:** Run integrity check against DESIGN-TOKEN-SUMMARY.md for any new work
**Pending:** None in this folder — downstream work (OD/AD/CD) is pending
