# CLAUDE.md — KortAI Design System

═══════════════════════════════════════════════════════════════════════════════
## 1. IDENTITY
═══════════════════════════════════════════════════════════════════════════════

**Name:** KortAI Design System
**Anatomical Role:** The authority — the skeleton (tokens) and muscles (patterns)
that give the body its form and movement.

This is NOT a component library. It's a system with:
- **Tokens:** The locked values (geometry, colors, typography, spacing)
- **Patterns:** The validated rhythms (density, organization, axis, combination)
- **Provenance:** The research chain that justifies everything

═══════════════════════════════════════════════════════════════════════════════
## 2. HOW TO READ
═══════════════════════════════════════════════════════════════════════════════

**Start with:** `BACKBONE.md` — The master narrative of the entire system

| I want to... | Read |
|--------------|------|
| Understand the whole system | `BACKBONE.md` |
| Apply a pattern | `patterns/PATTERN-INDEX.md` |
| Look up token values | `tokens/*.md` |
| Trace a finding | `provenance/PIPELINE-MANIFEST.md` |
| Start OD work | `provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` |
| Understand components | `components/OVERVIEW.md` |
| Avoid anti-patterns | `anti-patterns/registry.md` |
| Migrate a page | `guides/migration-guide.md` |

═══════════════════════════════════════════════════════════════════════════════
## 3. WHAT'S HERE
═══════════════════════════════════════════════════════════════════════════════

| Directory/File | Status | Purpose |
|----------------|--------|---------|
| `BACKBONE.md` | ✅ | Master narrative — **START HERE** |
| `QUICK-START.md` | ✅ | Quick reference |
| `README.md` | ✅ | Overview |
| `tokens/` | ✅ | Locked design values |
| `patterns/` | ✅ | Validated rhythms (density complete, org pending) |
| `components/` | ✅ | Component specifications |
| `anti-patterns/` | ✅ | What to avoid |
| `guides/` | ✅ | Migration and usage guides |
| `provenance/` | ✅ | **The research chain** |

═══════════════════════════════════════════════════════════════════════════════
## 4. HOW THIS CONNECTS
═══════════════════════════════════════════════════════════════════════════════

### TO EXPLORATIONS
`../../explorations/` contains the validated artifacts (HTML files).
Their PROVENANCE lives here in `provenance/`.

### TO CHECKPOINTS
`../../checkpoints/` contains operational files (live audit tracking).
Some are synced here for archival (SOUL-DISCOVERIES, RESEARCH-ACTIVE).

### TO COMPONENTS
`../../../../components/` contains the actual React components.
Their SPECIFICATIONS live here in `components/`.

═══════════════════════════════════════════════════════════════════════════════
## 5. MINDSET
═══════════════════════════════════════════════════════════════════════════════

**The design system is the AUTHORITY.**

When there's a question about how something should look:
- Check `tokens/` for locked values
- Check `patterns/` for validated rhythms
- Check `anti-patterns/` for what to avoid
- Check `provenance/` for WHY

When there's a conflict between code and design system:
- The design system wins
- Update the code to match
- Don't update the design system to match code

**The chain is the proof.** Every pattern traces back to research. Every research
finding was validated through exploration. Every exploration was audited for soul
compliance. If you skip the chain, you're building on sand.

═══════════════════════════════════════════════════════════════════════════════
