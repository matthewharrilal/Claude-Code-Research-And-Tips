# Component Taxonomy Synthesis
## Answering the Core Questions

**Date:** 2026-02-13
**Sources:** 4 research reports (forensics, pipeline analysis, tension-test analysis, visual comparison)
**Team:** component-taxonomy (4 agents, 1 wave)

---

## THE ANSWER IN ONE SENTENCE

**Components are frozen. Composition creates variety. The pipeline sits ON TOP of extracted components, not instead of them.**

---

## Question 1: Are components the same across DD/OD/AD/CD?

**YES. The atoms are identical. The molecules crystallized early.**

### Evidence (converged across all 4 reports):

| Component | DD | OD | AD | CD | Verdict |
|-----------|----|----|----|----|---------|
| Callout (2-zone, 4px border-left) | Present | Present | Present | Present | **FROZEN** |
| Code block (dark bg, mono font) | Present | Present | Present | Present | **FROZEN** |
| Table (3px border, alternating rows) | Present | Present | Present | Present | **FROZEN** |
| Page header (dark bg, 3px red border) | Present | Present | Present | Present | **FROZEN** |
| Inline code (subtle bg, mono) | Present | Present | Present | Present | **FROZEN** |

- **Tier 1 tokens**: Byte-for-byte identical across all 24 explorations
- **Tier 2 components**: Structurally identical since DD phase
- **HTML structure**: 100% stable (zero evolution)
- **CSS core**: 92-98% stable (only spacing/background modifiers vary)

### What DID evolve (minor):
- Callout variant vocabulary fluctuated: 4 → 7 → 5 → 6 variants
- Background enforcement matured: rgba → opaque (audit fix)
- Accessibility infrastructure accumulated: skip-links, ARIA
- Border semantics refined: 2px eliminated post-audit
- Syntax highlighting sophistication increased progressively

**None of these change the COMPONENT. They refine the IMPLEMENTATION.**

---

## Question 2: What's the boundary between component and compositional layout?

**The Rename Test**: Can you rename the CSS class to something generic without losing distinctiveness?

- **YES → Component (Tier 2)**: `.callout-essence` → `.accent-callout` works. The 4px amber border + italic serif body works anywhere.
- **NO → Composition (Tier 3)**: `.stratum--established` → `.bordered-section` fails. The 4px border only means "high confidence" in geological context.

### The Three Tiers

| Tier | What It Is | Extractable? | Example |
|------|-----------|-------------|---------|
| **Tier 1 (Atoms)** | Design tokens, constraints | 100% (~80 lines CSS) | `--color-primary: #E83025`, `border-radius: 0` |
| **Tier 2 (Molecules)** | Styled elements with internal structure | 90%+ (~175 lines CSS) | Callout box, code block, table, page header |
| **Tier 2.5 (Patterns)** | Reusable layout systems requiring judgment | 70% (~145 lines CSS) | Bento grid, solid offset, confidence encoding |
| **Tier 3 (Organisms)** | Metaphor-driven arrangements | 0-30% (prose only) | Geological strata, density islands, floor plan rooms |

**Total extractable CSS: ~400 lines, covering 60-70% of any file.**
**The remaining 30-40% is Tier 3 composition — must be composed fresh per page.**

### The Language Analogy (all 4 reports converge here):

```
Tier 1 = ALPHABET (26 letters, fixed)
Tier 2 = VOCABULARY (~50 words, slowly growing)
Tier 3 = PROSE (infinite variety from finite vocabulary)
```

**The design system is a printing press, not a template library.**

---

## Question 3: Does composition bleed into components?

**NO. The boundary is clean.**

### Evidence from tension-test analysis (15 layouts):

A quote box appears in all 5 Boris metaphors:
- Codex: `.marginalia` (purple border-left, italic serif)
- Geological: `.fossil` (purple border-left, italic serif)
- Workbench: `.craftsman-note` (purple border-left, italic serif)
- Curriculum: `.master-annotation` (purple border-left, italic serif)
- Vault: `.preserved-doc` (purple border-left, italic serif)

**HTML structure: 100% identical across all 5.**
**CSS core: 95% identical. The 5% variance: padding (16px vs 24px), background (transparent vs zone-bg), margin spacing.**

### The 8% Rule:

Across all 15 tension-test layouts, ~18 CSS properties out of ~220 total component CSS change between metaphors = **8% variance**. This variance is ONLY in:
- Spacing modifiers (padding, margin, gap)
- Background context (transparent vs zone-bg)
- Typography micro-adjustments (font-size, letter-spacing)

**The component STRUCTURE (HTML, core CSS) never changes.**

### Component Stability is BINARY:
- Either 95%+ CSS overlap (Tier 2, extractable)
- Or 0% overlap (Tier 3, metaphor-specific)
- **No gradual spectrum.** The hybrid zone exists but is tiny (8%).

---

## Question 4: Does the tension-composition pipeline replace or sit on top of component extraction?

**SITS ON TOP. They are SYNERGISTIC.**

### The Two-Layer Architecture:

**Layer 1: Frozen Component Library (Tier 2)**
- 9 component types with locked HTML + CSS
- Exposed CSS custom properties for context modifiers
- **Provides the VOCABULARY**

**Layer 2: Tension-Composition Pipeline (Tier 3)**
- Generates zone wrappers fresh per metaphor
- Consumes Tier 2 components from library
- Sets CSS custom properties for context adaptation
- **Composes the PROSE**

### Why Both Are Required:

| Approach | Outcome | Problem |
|----------|---------|---------|
| **Library ONLY** | Stable but static | No compositional variety, manual metaphor building |
| **Pipeline ONLY** | Variety but wasteful | 95% CSS duplication, component drift risk |
| **Library + Pipeline** | Stable AND varied | DRY, locked semantics, generative composition |

### The Workflow:

```
1. Pipeline reads content, derives tension (Phase 0-2)
2. Pipeline selects metaphor (Phase 3)
3. Pipeline GENERATES Tier 3 zone wrappers (strata, chambers, zones)
4. Pipeline CONSUMES Tier 2 components from library (callouts, code, tables)
5. Pipeline SETS CSS custom properties to adapt Tier 2 to Tier 3 context
6. Output: Library components arranged in pipeline-generated composition
```

---

## Question 5: What needs to change in the post-CD pipeline?

### Phase Reordering Required:

**OLD:**
```
CD → Component Extraction → Content Analysis → Playbook → Pilot → Migration
```

**NEW:**
```
CD → Content Analysis → Component Extraction → Validation → Playbook → Pilot → Migration
```

**Why Content Analysis must come FIRST:**
- Classification drives what gets built (Track 1 assembly vs Track 2 composition)
- Extraction should be informed by what content actually needs
- Tension pre-screening identifies which pages need the pipeline

### Per-Step Changes:

| Phase | Status | Change |
|-------|--------|--------|
| **CD** | KEEP | Add Track 1 vs Track 2 validation |
| **Content Analysis** | REORDER to Phase B | Add Track 1/2 classification + tension pre-screening |
| **Component Extraction** | MODIFY HEAVILY | Scope reduced: ~400 lines CSS + prose pattern docs (not "printing press") |
| **Extraction Validation** | ADD NEW | Test 2-3 pages using only extracted base |
| **Playbook** | EXPAND | Add Track 2 spec invoking tension-composition skill |
| **Pilot** | EXPAND | Must include 1+ Track 2 page |
| **Refinement** | KEEP | No changes |
| **Migration** | RECOGNIZE TWO TRACKS | Track 1: parallelizable (45-90 min/page). Track 2: creative bottleneck (3-5 hrs/page) |

### Two-Track Migration Reality:

```
Track 1 (Assembly): ~80-85% of pages (60-65 pages)
  - Deterministic pattern selection
  - Mechanical composition using Tier 1+2
  - Parallelizable (6 agents, 6 pages)
  - 45-90 min per page

Track 2 (Composition): ~15-20% of pages (10-15 pages)
  - Tension-composition pipeline invocation
  - Creative metaphor selection
  - Sequential (creative bottleneck)
  - 3-5 hours per page
```

---

## Question 6: What are the migration implications?

### With Component Library:
1. Extract 9 Tier 2 components → freeze as design system base
2. Pipeline references frozen components, generates Tier 3 fresh
3. CSS custom properties bridge the layers
4. Result: Consistent vocabulary + infinite compositional variety

### Without Component Library:
1. Pipeline generates EVERYTHING from scratch each time
2. Quote boxes have 15 different CSS implementations
3. 95% CSS overlap is wasted (not DRY)
4. Component drift risk: font-size 1.0625rem vs 1.125rem

### With Component Library + Existing Tension-Test Evidence:

The 15 tension-test layouts (Boris × 5, Gas Town × 5, Playbook × 5) prove:
- Same content + different metaphors = different compositions using SAME components
- Components are metaphor-agnostic primitives (100% recognition in isolation)
- Metaphors change LABELS and SPATIAL ARRANGEMENT, not component structure
- The pipeline CONSUMES components and ARRANGES them, it doesn't regenerate them

**Migration path:**
1. Extract Tier 1+2 base (~400 lines CSS)
2. Document Tier 3 compositional strategies as prose patterns
3. Build pipeline that references Tier 2 components
4. Classify content as Track 1 (assembly) or Track 2 (composition)
5. Execute: Track 1 with extracted base, Track 2 with pipeline + base

---

## THE CORE PRINCIPLE

**"The metaphor shapes the COMPOSITION. The components provide the VOCABULARY. Both are required."**

Or equivalently:

**"Extract the alphabet (Tier 1). Extract the vocabulary (Tier 2). Document the grammar (Tier 2.5). Compose the prose fresh (Tier 3) from each page's unique tension."**

---

## CONVERGENCE EVIDENCE

All 4 independent research streams arrived at the same conclusion:

| Report | Core Finding |
|--------|-------------|
| **Forensics** | "THE ATOMS DID NOT CHANGE. ~95% of variety is Tier 3 composition." |
| **Pipeline Analysis** | "Extraction scope is ~400 lines CSS, not printing press. Content Analysis must precede extraction." |
| **Tension-Test** | "Component library + pipeline are SYNERGISTIC. Pipeline CONSUMES Tier 2, GENERATES Tier 3." |
| **Visual Comparison** | "Components LOOK different due to COMPOSITIONAL CONTEXT, not component changes." |

**Zero contradictions across 4 independent analyses.**

---

END SYNTHESIS
