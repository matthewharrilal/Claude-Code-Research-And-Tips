# Research Report: Component Extraction Methodology and Content-Agnosticism

## Metadata
- **Researcher**: extraction-researcher
- **Date**: 2026-02-13
- **Task**: #1 (Research extraction methodology and content-agnosticism)
- **Status**: COMPLETE

---

## Executive Summary

After reading the extraction-related pipeline documents, I've discovered that **component extraction is NOT what it was originally envisioned to be**. The original assumption — that extraction would produce "reusable layout primitives for every pattern combination" — has been fundamentally reconceived based on component taxonomy research.

**The critical finding**: Only ~400 lines of CSS (60-70% of any file) is extractable. The remaining 30-40% cannot be extracted because it's **metaphor-dependent**. The printing press metaphor still applies, but differently: extraction produces an **alphabet and vocabulary**, not **pre-built prose**.

The content-first vs content-agnostic question is therefore **resolved by the architecture itself**: Content analysis MUST come first (Phase B before Phase C) because you cannot extract components before knowing what content needs.

---

## 1. What Component Extraction Actually Does (Concrete Methodology)

### The Four-Tier Model

Component taxonomy research analyzing all 24 validated explorations revealed extraction produces components across FOUR tiers, not one:

| Tier | What It Is | Extractability | Lines | Example |
|------|-----------|----------------|-------|---------|
| **Tier 1 (Atoms)** | Design tokens — colors, spacing, typography, soul constraints | 100% | ~80 | `:root { --color-primary: #E83025; }` |
| **Tier 2 (Molecules)** | Styled elements with locked structure | 90%+ | ~175 | `.callout` (4px border-left, uppercase label, body) |
| **Tier 2.5 (Patterns)** | Reusable layout systems requiring judgment | 70% | ~145 CSS + 440 docs | Bento grid (CSS is extractable, WHEN to use requires guidance) |
| **Tier 3 (Organisms)** | Metaphor-driven spatial arrangements | 0-30% | Prose only | Geological strata (only works when content has layered confidence levels) |

**Total extractable CSS: ~400 lines, covering 60-70% of any file.**

### What an Agent Actually DOES During Extraction

Based on the Compositional Strategy Library document, the extraction process is:

**Phase C.1: Component Inventory (Programmatic Scan)**
1. Scan all 30+ HTML files (DD-001 through CD-006)
2. Identify component candidates across explorations
3. Cross-file comparison for CSS overlap analysis
4. Current estimate: 9 confirmed Tier 2 components, likely 12-18+ with comprehensive audit

**Phase C.2: Tier 1 Extraction**
- Extract `:root` token block from any exploration (byte-for-byte identical across all files)
- ~80 lines covering colors, typography, spacing scale, soul constraints

**Phase C.3: Tier 2 Extraction**
For each component type (callouts, code blocks, headers, etc.):
1. Identify "best extraction source" file (e.g., CD-006 for most complete callout variants)
2. Extract core CSS (invariant structure)
3. Extract variant modifiers (callout--note, callout--tip, etc.)
4. Expose context-dependent properties via CSS custom properties
   ```css
   .callout {
     padding: var(--callout-padding, 20px 24px);
     background: var(--callout-bg, transparent);
   }
   ```

**Phase C.4: Tier 2.5 Extraction**
For each reusable pattern (bento grid, solid offset, scroll witness, etc.):
1. Extract CSS mechanism (~10-35 lines per pattern)
2. Write mandatory usage guidance document (~60-120 lines prose per pattern)
   - When to use
   - Application rules
   - DO NOT use for
   - Metaphor contexts where it works
   - Responsive strategy

**Phase C.5: Tier 3 Documentation (NOT Extraction)**
For each high-richness metaphor-driven pattern:
1. Analyze validated exploration (e.g., OD-004 Geological Strata, richness score 18)
2. Document as **prose strategy recipe** (~150 lines):
   - Metaphor structure
   - Tensions this resolves
   - CSS mechanisms used (references to Tier 1/2/2.5)
   - When to use (content characteristics)
   - Structural isomorphism count
   - Composition recipe (step-by-step)
   - Real-world example file path

**Critical distinction**: Tier 3 is NOT extracted as CSS. It's documented as a **compositional strategy** that teaches how to compose Tier 3 fresh from Tier 1+2 vocabulary.

---

## 2. How Content Analysis FIRST Changes What Gets Extracted

The pipeline was **reordered**: Content Analysis moved from Phase F (after extraction) to Phase B (before extraction).

### If Content Analysis Comes FIRST (Correct Order)

**Phase B Classification Produces:**
```markdown
60 pages are tutorials → need F-Pattern + CRESCENDO components
15 pages are reference docs → need ISLANDS + bento grid
3 pages are confidence-based → need geological strata mechanisms
5 pages are onboarding → need hub-spoke spatial layouts
```

**Phase C Extraction Then Prioritizes:**
- **High priority**: F-Pattern mechanisms (heading hierarchy, vertical spine creation, max-width constraints)
- **High priority**: CRESCENDO density components (progressive padding compression, zone wrappers)
- **Medium priority**: Bento grid (Tier 2.5 pattern, fewer pages need it)
- **Low priority**: Geological strata (only 3 pages need it, document as Tier 3 prose strategy)

**Concrete example from 08-COMPOSITIONAL-STRATEGY-LIBRARY.md**:
> "If 60 pages are tutorials and 3 need geological layering, extraction prioritizes tutorial mechanisms over rare geological strata."

### If Content Analysis is REMOVED (Agnostic Extraction)

Extraction would proceed blind:
1. Scan all 30+ exploration files
2. Extract every component found (democratic approach)
3. Give equal weight to rare patterns (geological strata) and common patterns (F-Pattern)
4. Build comprehensive library WITHOUT priority guidance

**What's gained:**
- True content-agnostic approach
- Complete coverage (nothing missed because "only 3 pages need it")
- No classification errors influencing extraction

**What's lost:**
- Efficiency (wasted time extracting rare patterns with full fidelity)
- Practicality (extraction agent doesn't know what matters most)
- Validation testing (Phase D doesn't know which patterns to test)

---

## 3. Content-First vs Content-Agnostic: The Architectural Answer

The question is **resolved by the two-track architecture itself**.

### The Addition Test Determines Track Assignment

```
Content Analysis applies Addition Test to each page:
"Can existing components fulfill reader need without transformation?"

→ YES: Track 1 (Assembly) — deterministic pattern selection
→ NO: Track 2 (Composition) — tension-composition skill invocation
```

**Track 1 pages (40-50%)**: Tutorials, reference docs, Q&A pages
- Use extraction as **printing press** (apply pre-built templates)
- Content type → pattern triple (mechanical lookup)
- Example: Tutorial → CRESCENDO + F-Pattern

**Track 2 pages (50-60%)**: Conceptual, onboarding, philosophy docs
- Use extraction as **alphabet and vocabulary** (compose fresh prose)
- Invoke tension-composition skill (6-phase pipeline)
- Example: Onboarding with safety-through-uncertainty tension → geological metaphor → fresh Tier 3 composition

**The critical insight**: Content analysis doesn't bias extraction toward known content. It **enables the two-track reality**. Without knowing which pages are Track 1 vs Track 2, you cannot:
- Validate extraction sufficiency (Phase D test pages)
- Write dual-track playbook (Phase E)
- Test Track 2 pipeline (Phase F pilot)

---

## 4. Does Content Analysis Before Extraction Introduce BIAS?

**The concern**: Knowing what content exists might cause extraction to tailor components to that content rather than building genuinely agnostic ones.

**The evidence from the documents**:

From `02-POST-CD-PHASES.md`:
> "Classification reveals what to prioritize. If 60 pages are tutorials and 3 pages need geological layering, extraction prioritizes tutorial mechanisms."

This IS bias — intentional, efficiency-driven bias. But is it BAD bias?

### Two Types of Bias

**Type 1: Priority Bias** (Acceptable)
- Tutorial mechanisms extracted with full fidelity (~175 lines)
- Geological strata documented as prose strategy (~150 lines)
- Both are extractable, but EFFORT allocation differs
- **Result**: Common patterns get CSS + HTML templates, rare patterns get prose recipes

**Type 2: Capability Bias** (Problematic)
- Only extracting components for known content types
- Missing reusable mechanisms because "no page needs it yet"
- Tier 2.5 patterns skipped entirely because Track 1 pages don't use them
- **Result**: Future content with new tension types has no vocabulary

**What the documents say**:

From `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`:
> "The Tier 2.5 vs Tier 3 boundary is a gradient, not a wall. Some patterns sit on the boundary."

The extraction spec explicitly addresses this with **boundary case classification**:
- Confidence encoding: Tier 2.5 (mechanism reusable, meaning documented per metaphor)
- Fractal annotations: Tier 2.5/3 boundary
- Q&A conversational pairs: Tier 2.5 mechanism + Tier 3 structure

**Conclusion**: Content analysis introduces PRIORITY bias (good — efficiency) but NOT capability bias (extraction still seeks reusable mechanisms, not page-specific solutions).

---

## 5. Content-First Extraction MISSING Components?

**Scenario**: Agnostic extraction finds a reusable component that content-first extraction misses because no current page needs it.

### The Test Case: Central Role Component

From `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`:
> "Components NEITHER Counted: Central role component (Gas Town layouts) — large bordered featured element with badge"

This component appears in Gas Town metaphor layouts but was NOT inventoried by either research agent (Forensics or Tension-Test). Why?

**Possible reasons**:
1. It's Tier 3 (metaphor-specific) → correctly excluded
2. It's Tier 2.5 (reusable but needs judgment) → missed due to incomplete audit
3. Classification bias → "only appears in 1 metaphor family, skip it"

**What content-agnostic extraction would do**:
- Scan ALL 30+ exploration files comprehensively
- Flag central role component as appearing 5 times across Gas Town layouts
- Extract as Tier 2.5 candidate: "Featured element with badge and offset emphasis"
- Usage guidance: "When content has a primary conceptual anchor requiring visual dominance"

**What content-first extraction does**:
- Content analysis shows 0 pages are currently Gas Town metaphor
- Central role component deprioritized
- IF a future page needs it → compose fresh from Tier 2 (container + solid offset + badge)

**Impact**: Content-first extraction might miss Tier 2.5 boundary cases. BUT — the Tier 3 compositional strategies document how to COMPOSE these from Tier 1+2 primitives, so nothing is truly lost.

---

## 6. Agnostic Extraction Missing CONTEXT?

**Scenario**: Content-agnostic extraction produces components without understanding WHY they work or WHEN to use them.

### The Evidence

From `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`, Tier 2.5 patterns require **mandatory usage guidance**:

**Bento Grid** (~110 lines guidance):
- When to use: "Content with varying importance levels requiring spatial hierarchy"
- DO NOT use for: "Sequential content (use F-pattern instead), uniform importance content (creates grid monotony)"
- Metaphor contexts: Floor plan (rooms by size), task dashboard (cards by priority)

**Without content context**, an extraction agent sees:
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.bento-cell--large { grid-column: span 2; }
```

**With content context** (knowing 15 pages are task-based, 3 pages are sequential), the agent documents:
- "Use bento grid for task-based pages (15 found), NOT sequential pages (breaks narrative flow)"
- "Tested on tutorial content (Page 23) — FAILS perceptual audit due to monotony"

**The critical finding**: Content context enables **anti-pattern documentation** ("DO NOT use for"). This comes from TESTING extraction against real content.

---

## 7. Is Phase B Before Phase C Purely Efficiency or Quality Implication?

### The Efficiency Argument (Original)

From `02-POST-CD-PHASES.md`:
> "Classification drives what gets built (Track 1 needs vs Track 2 needs). Extraction can be informed by what content actually needs."

**Time savings**:
- With content analysis: Prioritize high-frequency patterns → 6-8 hours extraction
- Without content analysis: Extract everything equally → 10-12 hours extraction

**Efficiency gain**: ~30-40% time reduction

### The Quality Argument (Discovered)

From `09-EXTRACTION-VALIDATION-PROTOCOL.md`:
> "Phase D Validation Pass: Build 1 Track 1 page using library alone, 1 Track 2 page using library + pipeline. Test pages prove: Track 1 pages work with library alone (assembly test), Track 2 pages work with library + pipeline (composition test)."

**Quality implications**:
1. **Validation requires Track classification** — you cannot test "Track 1 library sufficiency" without knowing which pages are Track 1
2. **Playbook requires Track paths** — dual-track execution spec needs different instructions for Track 1 vs Track 2 builders
3. **Pilot requires Track diversity** — must test at least 1 Track 1 + 1 Track 2 page to validate both pathways

**If Phase B comes AFTER Phase C**:
- Extraction builds generic library without Track context
- Validation tests random pages (might accidentally test 2 Track 1 pages, missing Track 2 entirely)
- Playbook written without understanding Track 1 vs Track 2 split
- Pilot fails to validate Track 2 pathway
- Full migration discovers Track 2 gaps mid-execution (after freeze line)

**Conclusion**: Phase B before Phase C has GENUINE quality implications beyond efficiency. Content classification enables validation, playbook specification, and pilot design.

---

## 8. Concrete Examples: Component Extraction With/Without Content Context

### Example 1: Callout Component Family

**Content-Agnostic Extraction**:
1. Scan all 24 explorations
2. Find callout variants: `.callout-essence`, `.callout-tip`, `.callout-gotcha`, `.callout-note`, `.callout-caution`
3. Extract CSS for all 5 variants (~50 lines)
4. Document: "Callout component with 5 accent colors"

**Content-First Extraction** (knows 60 tutorial pages, 15 reference pages):
1. Scan same 24 explorations
2. Find same 5 callout variants
3. Extract same CSS (~50 lines)
4. **Additional documentation**:
   - "Note/Tip callouts appear in 47/60 tutorial pages → HIGH priority"
   - "Essence callout appears in 3/75 pages → editorial use, optional"
   - "Gotcha callout tested on tutorial Page 12 → works well for anti-pattern warnings"
   - "Caution callout tested on reference Page 5 → FAILS (too alarming for reference tone)"

**Quality difference**: Content-first extraction adds TESTED usage guidance from real pages.

### Example 2: Bento Grid (Tier 2.5)

**Content-Agnostic Extraction**:
1. Find bento grid in AD-003, CD-005, CD-006
2. Extract CSS mechanism (~25 lines)
3. Write generic guidance: "Grid layout with span modifiers for varying cell sizes"

**Content-First Extraction** (knows 15 task-based pages, 5 reference pages):
1. Find same bento grid pattern
2. Extract same CSS (~25 lines)
3. **Enhanced guidance** (~110 lines):
   - "Tested on 15 task-based pages → 12/15 PASS, 3 FAIL (monotonous grids without hierarchy)"
   - "DO NOT use for reference pages (random-access patterns prefer ISLANDS + vertical navigation)"
   - "Key audit finding from CD-005: Bento grid responsive overflow at 768px — CRITICAL. Must test at 768px."
   - "Responsive strategy: At 768px columns collapse to 1-2 max (tested on Page 34, works)"

**Quality difference**: Content-first extraction documents ANTI-PATTERNS ("DO NOT use for") and RESPONSIVE FAILURES from real testing.

### Example 3: Geological Strata (Tier 3)

**Content-Agnostic Extraction**:
1. Find geological metaphor in OD-004 (richness score 18)
2. Attempt to extract as reusable component
3. Realize it's metaphor-dependent → document as Tier 3 prose strategy
4. Strategy: "Border-weight gradient encodes confidence (4px/3px/2px/1px)"

**Content-First Extraction** (knows 3 confidence-based pages, 5 decision-log pages):
1. Find same geological metaphor
2. Classify as Tier 3 (metaphor-dependent)
3. Document same strategy
4. **Additional context**:
   - "Applies to 3 confidence-based pages + 5 decision-log pages = 8 pages need this"
   - "Alternative metaphor for same tension: Spiral descent (AD-004, richness 16)"
   - "Tested on decision-log Page 18 → geological strata FAILS (content lacks vertical layering structure)"
   - "Use spiral metaphor instead for decision logs with branching paths"

**Quality difference**: Content-first extraction documents WHEN geological strata works vs WHEN to use alternative metaphors for same tension type.

---

## 9. The Rename Test: How Agents Decide Tier 2 vs Tier 3

From `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`:

> "The Rename Test: Can you rename the CSS class to something generic without losing distinctiveness?
> - `.callout-essence` → `.accent-callout` ✓ (Tier 2: the 4px amber border + italic serif body works anywhere)
> - `.stratum--established` → `.bordered-section` ✗ (Tier 3: the 4px border only means 'high confidence' in geological context)"

**This test is content-dependent**. An agent cannot apply it without understanding:
1. What content exists
2. Whether semantic meaning transfers across contexts
3. Whether the component maintains identity outside its metaphor

**Content-agnostic extraction** performs the Rename Test purely structurally:
- "Does this component have locked HTML structure? → Tier 2"
- "Does this component vary across metaphors? → Tier 3"

**Content-first extraction** performs the Rename Test semantically:
- "Does this component work in tutorial context AND reference context? → Tier 2"
- "Does geological strata only work when content has confidence gradients? → Tier 3"
- "Tested on 3 different content types, maintains identity → Tier 2"

**Quality difference**: Content-first extraction produces more accurate Tier 2/2.5/3 classification because it's tested against diverse content.

---

## 10. Open Research Questions from My Analysis

### Q1: Should extraction audit ALL 30+ files or rely on representative sampling?

Current spec (from `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`):
> "9 was an analytical estimate, NOT an exhaustive audit. A proper programmatic scan across all 30+ HTML files would likely find 12-18+ Tier 2 candidates."

**Content-agnostic argument**: Scan all 30+ files (comprehensive, misses nothing)
**Content-first argument**: Scan representative files from each Track (efficient, covers diversity)

### Q2: Does Tier 2.5 richness reduce Track 2 percentage?

From `08-COMPOSITIONAL-STRATEGY-LIBRARY.md`:
> "Every pattern promoted from Tier 3 to Tier 2.5 potentially reduces the Track 2 queue. If we extract 10-12 Tier 2.5 patterns instead of 5, do borderline pages shift from Track 2 to Track 1?"

**Hypothesis**: More reusable patterns → less composition needed
**Counter**: Track 2 is driven by tension, not pattern availability

**Content context helps answer this**: If content analysis shows 45 Track 2 pages, and extraction produces 12 Tier 2.5 patterns, re-classify pages → does Track 2 drop to 38 pages?

### Q3: Where exactly is the abstraction cliff?

From `02-POST-CD-PHASES.md`:
> "The cliff now separates Tier 2 (extractable components) from Tier 3 (compositional layouts). But where exactly is the line?"

Boundary cases:
- Bento grid: Tier 2.5 (70% extractable) or Tier 3 (metaphor-dependent)?
- Confidence encoding: Tier 2.5 (border gradients reusable) or Tier 3 (only works with layered content)?
- Q&A conversational pairs: Tier 2.5 mechanism + Tier 3 structure?

**Content context helps**: Test boundary cases against diverse content types. If confidence encoding works on 8/10 pages with gradients (decision logs, research findings, evidence strength) → Tier 2.5. If only works on 3/10 → Tier 3.

---

## 11. Critical Findings Summary

1. **Extraction is NOT a printing press for layout templates**. It's an alphabet (Tier 1 tokens), vocabulary (Tier 2 components), grammar (Tier 2.5 patterns), and prose strategy recipes (Tier 3 documentation).

2. **Only ~400 lines of CSS (60-70%) is extractable**. The remaining 30-40% must be composed fresh per metaphor.

3. **Content analysis MUST come first** (Phase B before Phase C). Not for efficiency — for QUALITY. Validation, playbook specification, and pilot design all require Track classification.

4. **Content-first extraction introduces priority bias** (good — efficiency) but NOT capability bias (still seeks reusable mechanisms).

5. **Content-first extraction produces better documentation**: TESTED usage guidance, anti-patterns from real pages, responsive failures caught early.

6. **Agnostic extraction risks missing Tier 2.5 boundary cases** (central role component). But Tier 3 strategies document how to compose these from primitives.

7. **The Rename Test requires content context** to distinguish semantic meaning (Tier 3) from structural reusability (Tier 2).

8. **Track 2 pipeline IS the tension-composition skill** with right context. Content analysis identifies which pages invoke the skill.

---

## 12. Recommendation

**Phase B (Content Analysis) BEFORE Phase C (Component Extraction) is the correct order for BOTH efficiency AND quality.**

**Why**:
1. Enables accurate Tier 2/2.5/3 classification via testing against diverse content
2. Produces TESTED usage guidance (anti-patterns, responsive failures)
3. Enables Phase D validation (Track 1 test page + Track 2 test page)
4. Enables Phase E dual-track playbook specification
5. Prevents Phase F pilot from missing Track 2 pathway validation

**The content-agnosticism question is resolved**: Extraction should be content-INFORMED (priority, testing, anti-patterns) but mechanism-AGNOSTIC (Tier 2 components work anywhere, Tier 2.5 patterns are reusable tools).

The metaphor: **Don't extract English vocabulary without reading English texts. But DO extract vocabulary that works across multiple text types.**

---

## Research Sources

1. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` (1,747 lines)
2. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md` (984 lines)
3. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/05-COMPLETE-ROADMAP.md` (835 lines)
4. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/02-POST-CD-PHASES.md` (803 lines)

**Total research base**: 4,369 lines across 4 files

---

**END RESEARCH REPORT**
