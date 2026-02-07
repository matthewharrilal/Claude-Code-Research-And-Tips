<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/04-cross-directory-analysis.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Analyzes the cross-directory relationships between showcase/ (83 files),
design-extraction/ (350 files), and design-system/ (30 files). Contains the
complete token value comparison table, duplicate detection registry, token
divergence severity assessments, integration point analysis, and system
maturity comparison across all three directories.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| showcase-analysis.md (Agent ALPHA)      | Showcase token and structure data      |
| design-extraction-analysis.md (Agent BETA) | T1 token values and provenance data |
| design-system-analysis.md (Agent GAMMA) | Divergent token values and namespaces  |
| cross-pollination-investigation.md      | Integration point evidence             |
| 02-threading-data/ (all 3 files)        | Per-file dependency records consumed   |

6. MUST HONOR
- Core locked tokens (primary, background, text, border, geometry) are identical between T1 and showcase
- Secondary tokens show documented drift (accent-amber, accent-purple, bg-info, bg-tip)
- design-system/ has 4 CRITICAL divergences (border-radius, box-shadow, primary red, type scale)
- All 15 intentional showcase duplicates are documented and must be preserved

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| 05-cleanup-recommendations.md           | Derives cleanup actions from analysis  |
| 07-QUESTIONS-FOR-HUMAN.md              | Q-001, Q-006 reference token data      |
| PHASE-2B-BATCH-MANIFEST.md             | References as Batch 10 file #164      |
| Phase 2B threading header work          | Token comparison informs header content|

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# Cross-Directory Analysis

**Generated:** 2026-02-05
**Directories under analysis:**
1. `docs-spa/app/showcase/` (83 files) -- Agent ALPHA
2. `design-extraction/` (350 project files, 205 junk) -- Agent BETA
3. `design-system/` (30 files) -- Agent GAMMA

---

## Directory Relationship Map

```
design-extraction ──── 13 documented edges ────> showcase
design-extraction ──── 1 undocumented edge ────> showcase  (R5 file path refs)
showcase ──── 0 edges ────> design-extraction    (STRICTLY ONE-DIRECTIONAL)

design-extraction ──── 1 undocumented edge ────> design-system  (Instrument Serif font)
design-system ──── 0 edges ────> showcase
showcase ──── 0 edges ────> design-system
design-system ──── 0 edges ────> design-extraction
```

### Visual Dependency Graph

```
                    ┌─────────────────────┐
                    │  design-extraction   │
                    │  (350 project files) │
                    │  17 T1 files         │
                    └──────┬──────┬────────┘
                           │      │
              13+1 edges   │      │  1 undocumented edge
              (documented) │      │  (Instrument Serif)
                           │      │
                           v      v
              ┌────────────┐     ┌──────────────┐
              │  showcase   │     │ design-system │
              │  (83 files) │     │  (30 files)   │
              │  10 T1      │     │  0 T1         │
              └────────────┘     └──────────────┘
                    │                    │
                    └────── 0 edges ─────┘
```

**Nature of the relationship:** design-extraction is the T1 foundation that both showcase and design-system draw from, but they do so independently and with different results. Showcase is the documented, provenance-traced consumer. Design-system is an independent, earlier extraction effort that predates the perceptual-audit-v2 work.

---

## Token Value Comparison

### Core Tokens (Locked Values)

| Token | design-extraction T1 (DESIGN-TOKEN-SUMMARY.md) | showcase tokens (DESIGN-SYSTEM/tokens/) | design-system tokens.css | Match? |
|-------|------------------------------------------------|----------------------------------------|--------------------------|--------|
| `--color-primary` | `#E83025` | `#E83025` | `#FF0000` (as `--sanrok-red`) | A=B, C DIVERGES |
| `--color-background` | `#FEF9F5` | `#FEF9F5` | `#FBF5EF` (as `--sanrok-cream`) | A=B, C DIVERGES |
| `--color-text` | `#1A1A1A` | `#1A1A1A` | `#171717` (as `--sanrok-black`) | A=B, C DIVERGES |
| `--color-text-secondary` | `#666666` | `#666666` | Not defined | A=B, C ABSENT |
| `--color-border` | `#E0D5C5` | `#E0D5C5` | `rgba(0,0,0,0.08)` | A=B, C DIVERGES (approach differs) |
| `--color-border-subtle` | `#F0EBE3` | `#F0EBE3` | Not defined | A=B, C ABSENT |
| `--font-display` | `'Instrument Serif', Georgia, serif` | `'Instrument Serif', Georgia, serif` | `'Instrument Serif', 'Playfair Display', Georgia, serif` | A=B, C has extra fallback |
| `--font-body` | `'Inter', system-ui, sans-serif` | `'Inter', system-ui, sans-serif` | `'Inter', system-ui, -apple-system, sans-serif` | A=B, C has extra fallback |
| `--border-radius` | `0` | `0` | Not defined (has `--radius-sm: 0.25rem` through `--radius-full: 9999px`) | A=B, C VIOLATES |
| `--box-shadow` | `none` | `none` | Not defined (has 6 non-none shadow tokens) | A=B, C VIOLATES |

### Type Scale

| Token | design-extraction T1 | showcase tokens | design-system tokens.css | Match? |
|-------|---------------------|-----------------|--------------------------|--------|
| `--text-xs` | `0.75rem` (12px) | `0.75rem` | `0.625rem` (10px) | A=B, C DIVERGES |
| `--text-sm` | `0.875rem` (14px) | `0.875rem` | `0.75rem` (12px) | A=B, C DIVERGES |
| `--text-base` | `1rem` (16px) | `1rem` | `1rem` (16px) | ALL MATCH |
| `--text-lg` | `1.125rem` (18px) | `1.125rem` | `1.333rem` (21px) | A=B, C DIVERGES |
| `--text-xl` | `1.5rem` (24px) | `1.5rem` | `1.777rem` (28px) | A=B, C DIVERGES |

**Analysis:** design-system uses a Perfect Fourth (1.333) modular scale. T1 and showcase use editorial proportions. The type scales are fundamentally different mathematical systems.

### Secondary/Semantic Tokens (Token Drift)

| Token | design-extraction COLOR-TOKENS.md | showcase DESIGN-SYSTEM colors.md | Match? | Notes |
|-------|----------------------------------|----------------------------------|--------|-------|
| accent-blue | `#4A90D9` | `#4A90D9` | YES | |
| accent-green | `#4A9D6B` | `#4A9D6B` | YES | |
| accent-amber | `#C49052` | `#D97706` | NO | Drift during showcase exploration work |
| accent-purple | `#7B68EE` | `#7C3AED` | NO | Drift during showcase exploration work |
| bg-info | `#F0F7FF` | `#F5F8FA` | NO | Showcase refined during DD work |
| bg-tip | `#F0F7F0` | `#F5FAF5` | NO | Showcase refined during DD work |
| text-secondary | `#444444` | `#444444` | YES | |
| text-tertiary | `#888888` | `#888888` | YES | |

**Analysis:** Core locked tokens (primary, background, text, border, geometry) are identical between T1 and showcase. Secondary/semantic tokens show drift. The tracking sheets (COLOR-TOKENS.md) are earlier working documents; the synthesis (DESIGN-TOKEN-SUMMARY.md) has the final values that showcase adopted. Some showcase semantic tokens continued evolving during exploration work.

---

## Duplicate Detection

### Intentional Duplicates (showcase)

The showcase directory contains 15 intentional duplicates following a documented operational/archival sync protocol:

| File | Location A (operational) | Location B (archival/provenance) | Size | Protocol |
|------|--------------------------|----------------------------------|------|----------|
| R1-DOCUMENTATION-PATTERNS.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 21,684 | REFERENCE vs CHAIN INTEGRATION |
| R2-CREATIVE-LAYOUTS.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 32,253 | Same |
| R3-DENSITY-DIMENSIONS.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 17,994 | Same |
| R4-AXIS-INNOVATIONS.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 38,704 | Same |
| R5-COMBINATION-THEORY.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 25,152 | Same |
| RESEARCH-SYNTHESIS.md | research/ | DESIGN-SYSTEM/provenance/original-research/ | 13,117 | Same |
| SOUL-DISCOVERIES.md | checkpoints/ | DESIGN-SYSTEM/provenance/ | 10,683 | OPERATIONAL vs ARCHIVAL |
| RESEARCH-ACTIVE.md | checkpoints/ | DESIGN-SYSTEM/provenance/ | 30,252 | OPERATIONAL vs ARCHIVAL |
| FOUNDATION-REMEDIATION-SYNTHESIS.md | checkpoints/ | DESIGN-SYSTEM/provenance/stage-1-components/ | 11,420 | OPERATIONAL vs ARCHIVAL |
| DD-REAUDIT-CHECKPOINT.md | checkpoints/ | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | 10,749 | OPERATIONAL vs ARCHIVAL |
| DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | checkpoints/ | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | 24,673 | OPERATIONAL vs ARCHIVAL |

**All are SIZE-IDENTICAL.** The duplication is documented in `checkpoints/CLAUDE.md` (defines sync protocol) and `research/CLAUDE.md` (documents reference vs chain integration purpose).

**Recommendation:** KEEP BOTH in all cases. The operational/archival distinction is well-documented and serves pipeline integrity.

### Unintentional/Dangerous Duplicates

| Concept | File A | File B | Risk |
|---------|--------|--------|------|
| Playwright node_modules | 4 separate installations in design-extraction | Identical packages | 5.4 MB bloat, should be gitignored |
| Playwright reports | 3 report HTML files in design-extraction | Generated output | 1.83 MB bloat, should be gitignored |

### Token Divergences (Cross-Directory)

| Concept | design-extraction T1 | design-system tokens.css | Severity |
|---------|---------------------|--------------------------|----------|
| Primary red | `--color-primary: #E83025` | `--sanrok-red: #FF0000` | **CRITICAL** -- Different reds |
| Background | `--color-background: #FEF9F5` | `--sanrok-cream: #FBF5EF` | MODERATE -- Slightly different creams |
| Text color | `--color-text: #1A1A1A` | `--sanrok-black: #171717` | MODERATE -- Slightly different blacks |
| Border radius | `--border-radius: 0` (SOUL LOCKED) | `--radius-sm: 0.25rem` through `--radius-full: 9999px` | **CRITICAL** -- Soul violation |
| Box shadow | `--box-shadow: none` (SOUL LOCKED) | 6 shadow tokens with actual values | **CRITICAL** -- Soul violation |
| Border approach | `--color-border: #E0D5C5` (solid hex) | `--color-border: rgba(0,0,0,0.08)` (transparent) | MODERATE -- Different philosophy |
| Token namespace | Single namespace (`--color-*`, `--font-*`) | 5 namespaces (base, `--blend-*`, `--mb-*`) + 3 JS inline objects = 8 sources of truth | **CRITICAL** -- Namespace proliferation |

---

## Integration Points

### Where the 3 Systems Touch

#### 1. Instrument Serif Font (design-extraction -> design-system, UNDOCUMENTED)

- **Origin:** `design-extraction/font-research/FINAL-DECISION.md` documents the selection of Instrument Serif (30/40 match score vs Sanrok original).
- **T1 codification:** `design-extraction/.../DESIGN-TOKEN-SUMMARY.md` locks `--font-display: 'Instrument Serif', Georgia, serif`.
- **design-system consumption:** `design-system/src/styles/typography.css` imports Instrument Serif from Google Fonts CDN. No provenance documentation exists in design-system/. This is an **undocumented dependency**.
- **showcase consumption:** `showcase/DESIGN-SYSTEM/tokens/typography.md` defines `--font-display: 'Instrument Serif', Georgia, serif` with documented provenance.

**Risk:** If the font decision is revisited, design-system/ would need manual notification since no formal dependency link exists.

#### 2. Soul Pieces (design-extraction -> showcase, DOCUMENTED)

- **Origin:** `design-extraction/component-system/perceptual-audit-v2/` discovered 5 soul pieces during Phase 4 work.
- **Showcase codification:** `showcase/DESIGN-SYSTEM/provenance/stage-1-components/` documents full provenance chain.
- **design-system status:** Zero soul compliance. No soul pieces referenced. Uses border-radius > 0 and box-shadow values that violate all 5 soul pieces.

**Risk:** design-system components (TSX files) that use Tailwind's `rounded-full`, `shadow-md`, etc. produce output that contradicts the T1 soul definition. Any page using both systems would have visual contradictions.

#### 3. Anti-Pattern Definitions (design-extraction -> showcase, DOCUMENTED)

- **Origin:** `design-extraction/.../ANTI-PATTERNS-REGISTRY.md` defines "The Soul Test."
- **Showcase derivative:** `showcase/DESIGN-SYSTEM/anti-patterns/registry.md` condenses and reorganizes.
- **design-system status:** Every TSX component would FAIL the Soul Test: "Could this component exist in a Bootstrap/Tailwind/Material project without modification? If yes, you've failed." All Sanrok components use standard Tailwind patterns.

#### 4. Token Values (Potential Conflict)

If both showcase and design-system are active on the same page:
- `--color-primary` would conflict (`#E83025` vs implicit `#FF0000`)
- Border-radius utilities would conflict (showcase enforces 0, design-system provides ranges)
- Shadow utilities would conflict (showcase bans shadows, design-system provides them)

**design-system's `medieval-blend.css` is especially dangerous:** It sets tokens on `:root` in addition to `[data-theme="medieval-blend"]`, meaning loading it would override base tokens globally.

---

## System Maturity Comparison

| Dimension | design-extraction | showcase | design-system |
|-----------|------------------|----------|---------------|
| Provenance tracking | Supersession chains documented | Full pipeline with YAML-like metadata | None |
| Soul compliance | T1 source files define soul | Enforced in all explorations | Zero compliance |
| Structured finding IDs | 0 (V1/V2 = 0) | 337+ findings (R1-R5), DD-F, COMP-F | 0 (V1/V2 = 0) |
| Navigation (CLAUDE.md) | 1 file (stale for Phase 4+) | 14 CLAUDE.md files, comprehensive | 0 files |
| Deprecation markers | 20 (V8 hits) | Minimal direct | 0 |
| Total file count | 350 project + 205 junk | 83 | 30 |
| Orphan rate | ~1.4% (5/350) | 0% (0/83) | 100% (from T1 perspective) |
| Documentation quality | Research-grade (350KB+ of deep research) | Pipeline-grade (provenance chain at every level) | Thin (4 docs, no provenance) |

---

## Conclusions

1. **The design-extraction -> showcase relationship is a model of documented cross-directory dependency.** Every edge is tracked, every soul piece has provenance, every token value is traced to its source.

2. **The design-system/ directory is an independent parallel effort** that predates the perceptual-audit-v2 work. It uses different token values, different naming conventions, and has zero soul compliance. It is not "wrong" -- it was built before the soul definition was finalized. But it is out of alignment.

3. **No circular dependencies exist.** All flow is unidirectional: design-extraction -> showcase. No reverse flow, no cross-system loops.

4. **The critical integration risk is design-system/ being used alongside showcase** without awareness of the token divergences. An agent or developer picking up design-system components and placing them on showcase pages would produce soul-violating output.

5. **The Instrument Serif font is the only undocumented cross-directory dependency.** All other edges are explicitly documented in provenance files, CLAUDE.md navigation files, or CSS comments.
