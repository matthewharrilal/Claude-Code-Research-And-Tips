<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/DESIGN-SYSTEM/CLAUDE.md
Tier: C | Batch: 5 | Date: 2026-02-06
═══════════════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
Navigation file for agents entering the DESIGN-SYSTEM/ directory. Identifies
README.md (109K) as "THE KORTAI DESIGN MIND" that must be read first.
Describes tokens, patterns, provenance, and the transferable reasoning model.

3. STATUS
ACTIVE

5. BUILT ON
- README.md (109K — the KortAI Design Mind)
- BACKBONE.md (structural backbone)
- Directory structure knowledge (tokens/, patterns/, provenance/, anti-patterns/)

8. CONSUMED BY
- No direct inbound references (read automatically on directory entry)
- All agents entering DESIGN-SYSTEM/ read this first

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
 -->

# CLAUDE.md — KortAI Design System

═══════════════════════════════════════════════════════════════════════════════
## 0. THE KORTAI DESIGN MIND — READ FIRST
═══════════════════════════════════════════════════════════════════════════════

**BEFORE DOING ANYTHING, READ:** `README.md` (THE KORTAI DESIGN MIND)

This is not a style guide. It is the operating manual for understanding, digesting,
and THINKING WITH this design system. It explains:

- **Part I:** What this system IS and why it's different (discovered vs decided)
- **Part II:** How the 5-stage research pipeline works and compounds
- **Part III:** The provenance chain — 7 structures, 2 traversals, living system metaphor
- **Part IV:** The 4 levels of engagement and 7-step digestion protocol
- **Part V:** The interception framework + sub-agent paradigm (4 types, 3 dimensions)
- **Part VI:** How to reproduce this methodology (7 structures as day-one)
- **Part VII:** File structure as embodied knowledge + new files required
- **Part VIII:** The meta-insight — this is a design MIND, not just a system
- **Part IX:** Retroactive update bridge — execution sequence and verification tests

**Three Reading Modes:**
- **Mode 1: First Read** (45-60 min) — Philosophy → Understanding
- **Mode 2: Task Execution** (15-20 min) — Reference → Action
- **Mode 3: Context Recovery** (5-10 min) — Reset → Reorientation

**The core question:** Can a system absorb the REASONING behind design decisions
well enough to make NEW decisions consistent with prior ones — even when those
new decisions were never explicitly specified?

**If you skip README.md, you will apply rules mechanically. If you absorb it,
you will THINK the way the system thinks.**

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
- **Mind:** The transferable reasoning documented in README.md

═══════════════════════════════════════════════════════════════════════════════
## 2. HOW TO READ
═══════════════════════════════════════════════════════════════════════════════

**Start with:** `README.md` (THE KORTAI DESIGN MIND) — Understand HOW to think
**Then:** `BACKBONE.md` — The master narrative of the entire system

| I want to... | Read |
|--------------|------|
| **Understand how to THINK with this system** | `README.md` ★★★ |
| Understand the whole system narrative | `BACKBONE.md` |
| Apply a pattern | `patterns/PATTERN-INDEX.md` |
| Look up token values | `tokens/*.md` |
| Trace a finding | `provenance/PIPELINE-MANIFEST.md` |
| Start AD work | `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` |
| Understand components | `components/OVERVIEW.md` |
| Avoid anti-patterns | `anti-patterns/registry.md` |
| Migrate a page | `guides/migration-guide.md` |

═══════════════════════════════════════════════════════════════════════════════
## 3. WHAT'S HERE
═══════════════════════════════════════════════════════════════════════════════

| Directory/File | Status | Purpose |
|----------------|--------|---------|
| `README.md` | ✅ | **THE KORTAI DESIGN MIND** — How to think with this system ★★★ |
| `BACKBONE.md` | ✅ | Master narrative of the pipeline |
| `QUICK-START.md` | ✅ | Quick reference |
| `tokens/` | ✅ | Locked design values |
| `patterns/` | ✅ | Validated rhythms (density complete, org complete) |
| `components/` | ✅ | Component specifications |
| `anti-patterns/` | ✅ | What to avoid |
| `guides/` | ✅ | Migration and usage guides |
| `provenance/` | ✅ | **The research chain** — 3-layer architecture: inline headers (490 files), light sections (244 files), formal chain documents |

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

**This is a DESIGN MIND, not just a design system.**

The skeleton (tokens, patterns, rules) tells you WHAT.
The muscle (provenance chain) tells you WHY.
The DNA (soul pieces) tells you what CANNOT change.
README.md teaches you HOW TO THINK with all of it.

**The Four Levels of Engagement (from README.md):**
- **Level 1: Application** — Apply patterns mechanically (sufficient for covered cases)
- **Level 2: Understanding** — Follow provenance backward (when fit isn't obvious)
- **Level 3: Extension** — Absorb chain, make new decisions (for uncovered cases)
- **Level 4: Validation** — Use chain as criteria (always, after building anything)

**When there's a question about how something should look:**
- Check `tokens/` for locked values
- Check `patterns/` for validated rhythms
- Check `anti-patterns/` for what to avoid
- Check `provenance/` for WHY
- Check `README.md` for HOW TO REASON about it

**When there's a conflict between code and design system:**
- The design system wins
- Update the code to match
- Don't update the design system to match code

**The chain is the proof.** Every pattern traces back to research. Every research
finding was validated through exploration. Every exploration was audited for soul
compliance. If you skip the chain, you're building on sand.

**The mind is transferable.** Anyone who follows the structure absorbs the mind.
Anyone who extends the structure grows the mind.

═══════════════════════════════════════════════════════════════════════════════
