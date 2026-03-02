# Compositional-Core -- Operational Vocabulary for KortAI Pages

**Last Updated:** 2026-03-01

The compositional-core is the operational vocabulary for building KortAI pages. It sits between abstract specification (`specification/`) and concrete explorations (`validated-explorations/`). Think of it as the jazz model: vocabulary (tokens), theory (mechanisms), recordings (case studies for inspiration, not sheet music to copy), and instrument constraints (refusals).

This is a CONSTRUCTED extraction using an Identity + Enablement hybrid lens. It enables creativity within identity constraints, stopping before it prescribes solutions. Different lenses would produce different extractions -- all valid within their frames.

This is NOT a component library, template system, or comprehensive design taxonomy.
This IS a phase-gated vocabulary + grammar for building KortAI pages.

For the full build protocol, phase-gated workflow, anti-gravity rules, and metacognitive framing, see `CLAUDE.md` (700 lines). This README covers architecture and file inventory only.

---

## 7-File Vocabulary

The core system is 7 files totaling ~1,319 lines. These contain everything needed to build a page.

| Layer | File | Lines | Contents |
|-------|------|-------|----------|
| Identity | `identity/identity.md` | 87 | Character, 2 soul principles, 3 identity signatures, refusals, diagnostics |
| Identity | `identity/vocabulary.md` | 55 | Design decisions & rationale (palette, typography, spacing, borders, container width) |
| Vocabulary | `vocabulary/tokens.css` | 124 | 65 CSS tokens in `:root` block (colors, fonts, spacing, borders, syntax, transitions) |
| Grammar | `grammar/mechanisms.md` | 88 | 20+ mechanisms with Name Test + Transfer Test, transition grammar |
| Grammar | `grammar/grammar.md` | 149 | Compositional rules: nesting, rhythm, zones, density, sequencing, responsive |
| Components | `components/components.css` | 779 | CSS implementations for all components (callouts, code, tables, grids, zones) |
| Components | `components/components.md` | 37 | Component inventory with velocity/weight classifications |

---

## Always-Load Protocol

**4 files, ~1,045 lines. Read BEFORE any action in compositional-core/.**

1. **identity/identity.md** (87 lines) -- Character + soul principles (angular geometry, no shadows) + refusals (absolute and conditional) + Bootstrap Test diagnostic
2. **identity/vocabulary.md** (55 lines) -- WHY the system makes each design choice. Connects tokens to rationale.
3. **vocabulary/tokens.css** (124 lines) -- 65 CSS custom properties. Soul constraints embedded (`--border-radius: 0`, `--box-shadow: none`). Color palette, typography trinity, spacing scale, border weights.
4. **components/components.css** (779 lines) -- CSS implementations for all components. Reference layer for how mechanisms become code.

---

## 6-Layer Ontology

```
compositional-core/
|
|-- identity/               Layer 1: WHO IT IS (always load)
|   |-- identity.md         Character + soul + refusals (87 lines)
|   +-- vocabulary.md       Design decisions & rationale (55 lines)
|
|-- vocabulary/             Layer 2: ATOMS (always load)
|   +-- tokens.css          65 CSS tokens in :root block (124 lines)
|
|-- grammar/                Layer 3: COMBINES (Phase 4+)
|   |-- mechanisms.md       20+ mechanisms with categories (88 lines)
|   +-- grammar.md          Compositional rules + sequencing (149 lines)
|
|-- components/             Layer 4: IMPLEMENTS (CSS always load; inventory Phase 4+)
|   |-- components.css      CSS implementations (779 lines)
|   +-- components.md       Inventory with velocity/weight (37 lines)
|
|-- case-studies/            Layer 5: PROVES (Phase 5 only -- anti-prescription)
|   |-- README.md            Index with titles + tensions
|   |-- ANTI-PRESCRIPTION-TEMPLATE.md
|   +-- 12 case study files  (9 unique explorations: DD-003, DD-004, DD-006,
|                              OD-001, OD-004, OD-006, CD-001, CD-005, CD-006)
|
+-- guidelines/             Layer 6: DECIDES (when facing semantic ambiguity)
    |-- usage-criteria.md    When to use what
    |-- semantic-rules.md    Appropriateness criteria
    +-- responsive-strategy.md  768px breakpoint + compression rules
```

**Ordering rationale:** Identity (IMMUTABLE) -> Vocabulary (MUTABLE) -> Grammar (COMPOSITIONAL) -> Components (STRUCTURAL) -> Case Studies (PROOF) -> Guidelines (SEMANTIC). Each layer depends on those above it.

---

## Phase-Gated Access

| Phase | Permitted Files | Prohibited |
|-------|----------------|------------|
| Phase 0 (always-load) | identity.md, vocabulary.md, tokens.css, components.css | case-studies/, grammar/ |
| Phases 1-3 (TC blind) | Same as Phase 0 | case-studies/, grammar/, prior explorations |
| Phase 3.5 (metaphor lock) | case-studies/README.md (titles only, for divergence check) | Full case study content |
| Phase 4 (mechanisms) | grammar/mechanisms.md, grammar/grammar.md, components/components.md | -- |
| Phase 5 (comparison) | case-studies/*.md (2-3 most similar, for divergence verification) | -- |
| Audit agents | Everything | No restrictions |

**Entry point:** `/compose <content-path>` (orchestrates all phases automatically)

---

## Anti-Gravity Mechanisms

5 mechanisms prevent case studies from becoming templates. Detailed rules in `CLAUDE.md`.

| ID | Mechanism | Type | Protection |
|----|-----------|------|------------|
| R1 | Phase-Gated Library Access | Structural | Directory separation enforces timing |
| R2 | Mechanism/Metaphor Separation | Structural | mechanisms.md (tools) vs case-studies/ (proof) |
| R3 | Anti-Prescription Framing | Behavioral | Every case study opens with "NOT A TEMPLATE" |
| R5 | Binary Sequential Phase Rules | Behavioral | MUST follow exact phase order; violation invalidates derivation |
| R6 | Divergence Mandate | Behavioral | Success = novel metaphor; convergence requires justification |

---

## Case Studies

12 files covering 9 unique explorations in anti-prescription format:

- **DD-003** (islands + visual companion) -- Bento grid isolation
- **DD-004** (layers + visual companion) -- Layered depth
- **DD-006** (fractal + visual companion) -- Self-similarity at 4 scales
- **OD-001** -- Conversational rhythm
- **OD-004** -- Geological confidence stratification
- **OD-006** -- Creative organizational pattern
- **CD-001** -- Reasoning inside code
- **CD-005** -- Multi-axis transition
- **CD-006** -- Pilot migration (Ceiling-tier: 39/40)

Each case study documents the TENSION that produced it, not criteria for when to use it. "When to use" triggers lookup mode. "Tension that produced this" triggers derivation mode.

---

## Supporting Directories

### validation/
- `anti-gravity-compliance.md` -- Mechanism deployment audit
- `convergence-check.md` -- Pattern convergence tracking
- `gap-check.md` -- Coverage gaps + contingencies

### process/
- `lens-manifesto.md` -- WHY Identity + Enablement lens was chosen
- `construction-narrative.md` -- HOW the extraction was built
- `extraction-provenance.md` -- WHAT was extracted and excluded
- `assumption-log.md` -- Invisible bias tracking

### guidelines/
- `usage-criteria.md` -- When to use what
- `semantic-rules.md` -- Appropriateness criteria
- `responsive-strategy.md` -- 768px breakpoint + compression

### skill-enrichments/
- `tension-composition-additions.md` -- Phase-gated access rules for TC skill
- `perceptual-auditing-additions.md` -- Guardrail enrichments for PA skill

---

## _superseded/ Directory

10 old files kept for provenance. NOT operational -- do not use for building.

| Superseded File | Replaced By |
|----------------|-------------|
| `prohibitions.md` | `identity/identity.md` |
| `soul-constraints.md` | `identity/identity.md` |
| `mechanism-catalog.md` | `grammar/mechanisms.md` |
| `compositional-rules.md` | `grammar/grammar.md` |
| `border-system.md` | Absorbed into `grammar/grammar.md` |
| `mechanism-combinations.md` | Absorbed into `grammar/grammar.md` |
| `tokens-mutability.md` | Absorbed into `vocabulary/tokens.css` |
| `component-inventory.md` | `components/components.md` |
| `components-dd-od.css` | Merged into `components/components.css` |
| `components-cd-tt.css` | Merged into `components/components.css` |

---

## Key Constraints

**Soul Principles (IMMUTABLE):**
- `border-radius: 0` -- always sharp edges, zero exceptions
- `box-shadow: none` -- no shadow/depth simulation of any kind

**Container Width:** 860-1100px range. Consistent within a single page, variable across pages based on content needs. Narrow (860px) for dense reading-focused content, standard (900-1000px) for general purpose, wide (1100px) for multi-axis spatial layouts.

**Typography Trinity:** Instrument Serif (display headings only), Inter (body text), JetBrains Mono (code).

**Spacing:** 4px base unit. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.

**Border Weights:** 3-weight system (4px structural, 3px accent, 1px micro). 2px deliberately skipped.

**Warm Palette:** Background `#FEF9F5`, text `#1A1A1A`, primary `#E83025`. No cool grays.

---

## Relationship to Other Folders

```
ABSTRACT <------------ COMPOSITIONAL-CORE ------------> CONCRETE

specification/         compositional-core/              validated-explorations/
(token specs)          (operational vocabulary)          (DD/OD/CD HTML files)
```

- `specification/` = CONTEXT-oriented (why it exists, research provenance) -- use for UNDERSTANDING
- `compositional-core/` = CHOICE-oriented (what to use, when) -- use for BUILDING
- `validated-explorations/` = PERMANENT REFERENCE (frozen artifacts) -- use for DEEP CONTEXT

**compositional-core/ is the ONLY folder agents use to build.** Everything else is planning, validation, or historical artifacts.

---

## Entry Points

| Task | Start Here |
|------|-----------|
| Build a page | `/compose <content-path>` |
| Understand the protocol | `compositional-core/CLAUDE.md` |
| Audit an existing page | `identity/identity.md` then `validation/` |
| Research the extraction | `process/lens-manifesto.md` then `process/construction-narrative.md` |
| Trace provenance | `process/extraction-provenance.md` |
