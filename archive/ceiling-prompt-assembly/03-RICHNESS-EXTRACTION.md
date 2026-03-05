# CEILING RICHNESS DIFFERENTIATORS — Complete Extraction

**Date:** 2026-02-16
**Agent:** richness-extractor (ceiling-prompt-team)
**Task ID:** #3
**Sources:** 5 files (tier comparison, richness comparison, pipeline reproducibility, skill audit, provenance metacognition) — ALL lines read

---

## EXECUTIVE SUMMARY

**The #1 richness gap between Middle and Ceiling: FRACTAL SCALE DEPTH**

Middle deployed 12 mechanisms (same as DD-006) but achieved only 2-scale coherence (page + component). DD-006 achieved 4-scale coherence (navigation + page + section + component). The missing section-scale coherence accounts for ~15-20% of perceived richness gap.

**Critical insight:** Middle and Ceiling use THE SAME 18-mechanism catalog. The difference is WHY you select them. Middle: "This content has callouts → mechanism #2." Ceiling: "This metaphor encodes depth through compression + weight + color ALL TOGETHER."

**Richness provenance:** Richness comes from mechanism deployment (vocabulary fluency + compositional fluency), NOT from provenance chain access. Provenance was the historical discovery process (337 findings → 18 mechanisms). Tiers apply those mechanisms WITHOUT re-running discovery.

---

## 1. TIER DIFFERENTIATORS — What Makes Ceiling DIFFERENT from Middle

### 1.1 Mechanism Count & Selection Logic

**Middle: 8-10 mechanisms (natural landing: 8-12)**
- **Selection logic:** Content-structure mapping (lookup with coverage requirement)
- **Per-category minimum:** S:1+, H:1+, C:1+, D:1+, N:1+ (ALL 5 categories)
- **Selection process:** "Content has hierarchy → border-weight gradient. Content has callouts → 2-zone DNA. Content has sections → zone backgrounds."
- **Each mechanism serves DIFFERENT problem INDEPENDENTLY**
- **Mechanism selection:** Independent lookup (mechanism catalog → content needs)

**Ceiling: 12-15 mechanisms (natural landing: 12-15)**
- **Selection logic:** Metaphor-driven multi-channel coherence
- **Per-category minimum:** S:2+, H:2+, C:3+, D:2+, N:2+ (elevated minimums)
- **Selection process:** "Metaphor = geological strata. Strata have pressure → spacing compression. Strata have consolidation → border-weight gradient. Strata have material layers → zone backgrounds. ALL THREE encode 'depth' TOGETHER."
- **3+ mechanism pairs must REINFORCE each other (multi-channel encoding)**
- **Mechanism selection:** Derivation (metaphor → shared semantic dimension → multiple mechanisms encoding that dimension)

**THE KEY DISTINCTION:**
- Middle: mechanisms work independently, solving different problems
- Ceiling: mechanisms work together, encoding shared semantic dimensions

**Concrete example (encoding "security threat importance"):**

Middle:
- Border-weight handles hierarchy (4px critical → 1px low)
- Color encoding handles semantic signal (red/coral/gray)
- Zone backgrounds handle section breaks (sparse/dense/breathing)
- They coexist but don't interact

Ceiling:
- Border-weight + spacing + zone backgrounds ALL encode "threat importance" TOGETHER
- Critical section: 4px border + 40px padding + darkest background (#FAF5ED)
- Low section: 1px border + 24px padding + lightest background (#FEFEFE)
- Three CSS channels saying "importance" simultaneously = multi-channel coherence

---

### 1.2 Scale Coverage (Fractal Coherence Depth)

**Middle: 2 scales REQUIRED (Page + Component)**

**Page scale:** Overall scroll rhythm (sections flow sparse → dense → sparse)
- Example: Section padding 80px → 48px → 64px (CRESCENDO via F-PATTERN)

**Component scale:** Individual elements mirror page rhythm
- Example: Callouts have sparse label (12px) + dense body (16px) — 2-zone DNA

**Verification:** Squint at page (page scale visible). Zoom to callout (component scale visible). Do they echo same direction?

---

**Ceiling: 4 scales REQUIRED (Navigation + Page + Section + Component)**

**Navigation scale:** Header/TOC structure echoes pattern
- Example: Density meter shows section is "dense" (75% fill)
- Logo-only header (sparse) progressing to logo+breadcrumb+TOC (dense) at scroll

**Page scale:** Overall scroll rhythm
- Example: Section padding 32px (dense section in page arc)

**Section scale:** How sections INTERNALLY organize (not just how they sequence)
- **THIS IS THE CRITICAL GAP BETWEEN MIDDLE AND CEILING**
- Example: EACH threat layer INTERNALLY progresses sparse intro (12px) → dense detail (24px) → sparse mitigation (12px)
- Middle sections have UNIFORM internal structure (components are placed)
- Ceiling sections have RHYTHMIC internal structure (components compose into arcs)

**Component scale:** Individual elements
- Example: Callouts use varying styles per zone (minimal → solid offset → minimal)

**Verification:** Cycle through header screenshot → page scroll → section zoom → callout detail. Same design direction at all 4 levels?

---

**THE FRACTAL SCALE DEPTH GAP (Most Important Finding):**

DD-006 deployed mechanisms across 4 scales. Middle experiment deployed mechanisms across 2 scales. The missing 2 scales (section + partial character) account for:
- ~15-20% of perceived richness (section-scale fractal coherence)
- ~5-10% additional (character-scale partial coherence)

**Concrete difference:**

DD-006 Section scale (fractal rhythm at section level):
Each of the 4 scale demonstration blocks has INTERNAL progression:
- Sparse section header (12px label)
- Dense demonstration box (24px padding, content)
- Sparse example code (16px body text)
- Dense explanation paragraph (18px body text)

Middle Section scale (uniform internal structure):
Architecture section:
- Heading (uniform treatment)
- Problem callout (uniform padding 20px 24px)
- Diagram (uniform treatment)
- Benefit subsections (uniform border-bottom 1px, uniform padding)

**Impact:** Section-scale coherence is ~15-20% of perceived richness. When you read ONE section in isolation, DD-006 feels "designed" because the section itself has rhythm. Middle sections feel "assembled" because components are just placed.

---

### 1.3 Multi-Channel Encoding (Saturation Depth)

**Middle: 2-3 channels active per section**

Example (Architecture section):
1. **Spacing:** 32px section padding (moderate)
2. **Border-weight:** 4px callout border, 3px diagram border — NO gradient within section
3. **Zone backgrounds:** 3 values but no progression (uniform #FEFEFE section bg, #FEF9F0 callout bg, #1A1A1A diagram bg)
4. **Typography:** Hierarchy present but not encoding depth (2rem section → 0.75rem callout → 0.875rem diagram)

**Channels active: 2** (spacing shows variation, typography shows hierarchy)
**They encode DIFFERENT semantics:** spacing = "moderate density," typography = "structural hierarchy," borders = "emphasis," backgrounds = "separation"

---

**Ceiling: 4 channels active per section, ALL encoding SAME semantic**

Example (Critical threat layer, encoding "maximum security importance"):
1. **Border-weight:** 4px (heaviest available) → encodes "critical priority"
2. **Spacing:** 32px 40px padding (most space) → encodes "importance deserves attention"
3. **Zone backgrounds:** Darkest (#FAF5ED) → encodes "highlight this"
4. **Typography:** Largest badge (0.625rem bold) + heading (1.5rem) → encodes "top of hierarchy"

**ALL FOUR channels say "critical importance" simultaneously.**

**The gap:** Multi-channel coherence is ~25-30% of perceived richness. It's what creates "atmosphere" vs "assembled components."

**Why this matters:** DD-006 says "fractal depth" in 4 CSS languages simultaneously. Middle says "hierarchy" in typography, "separation" in borders, "zones" in backgrounds — but they're not REINFORCING a single semantic dimension.

---

### 1.4 Metaphor vs Pattern

**Middle: PATTERN (lookup table, no metaphor required)**

**4-option pattern table (M5 — tier routing):**
- Tutorial/step-by-step → CRESCENDO (sparse intro → dense peak → sparse resolution)
- Reference/lookup/API → F-PATTERN (dense left navigation, sparse right content)
- Overview/dashboard → BENTO (grid-based modular sections)
- Narrative/story arc → PULSE (rhythmic dense-sparse-dense alternation)

**Selection logic:** Match content type to pattern. NO creative judgment.

**Metaphor:** NONE. Pattern provides spatial organization skeleton only.

**Concrete example:** SYSTEM remote Mac documentation = technical tutorial → F-PATTERN selected via lookup.

---

**Ceiling: METAPHOR (derived through Phases 1-3)**

**No lookup table.** Builder runs full tension-composition pipeline:
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Phase 2: Tension derivation (richness scoring via formula)
- Phase 3: Metaphor collapse (structural isomorphism → domain search)

**Output:** "Geological strata" (for infrastructure docs), "Botanical growth" (for onboarding), "Theatrical acts" (for narrative)

**Pattern emerges FROM metaphor:** If metaphor is "geological," the pattern is likely CRESCENDO (surface → core). If metaphor is "architectural," pattern might be BENTO (floor plan).

**Concrete example from OD-004:**
- Tension: "This content feels foundational but speculative at edges"
- Metaphor: Geological strata (bedrock certainty → surface speculation)
- Pattern: Progressive compression (confident sections sparse, speculative sections dense)

**Metaphor:** REQUIRED. Derived independently before consulting library.

---

### 1.5 Interaction Complexity

**Middle: Limited interaction (content-driven combinations)**

Mechanisms work independently BUT occasionally combine when content demands it.

**Example from Middle experiment:**
- Border-weight gradient (4px → 3px → 3px → 1px) for security layers
- Color encoding (red for critical, blue for informational)
- These TWO mechanisms combine: critical sections get 4px red, informational sections get 3px blue
- **But this is emergent from content, not required by tier**

**Interaction requirement:** NONE explicitly. May happen naturally.

---

**Ceiling: Required interaction (metaphor-driven combinations)**

**3+ mechanism pairs must REINFORCE each other (multi-channel encoding)**

**Example from OD-004 (geological depth metaphor):**
- Border-weight + zone backgrounds + spacing compression ALL encode geological depth
- As you scroll DOWN (deeper into strata):
  - Borders get HEAVIER (1px → 4px)
  - Backgrounds get DARKER (sparse cream → dense charcoal)
  - Spacing gets TIGHTER (40px → 16px)
- Three CSS channels saying "deeper" simultaneously = multi-channel coherence

**Interaction requirement:** 3+ mechanism pairs documented with shared semantic dimension. Must be EXPLICIT in build plan, not emergent.

---

### 1.6 Build Time (Parallel Agent Model)

**Middle: 70-100 minutes estimated (35 minutes ACTUAL in experiment)**

**Team:** 8 agents (content-selector, planner, builder, 2 auditors, comparative-auditor, novelty-evaluator, verdict-synthesizer)
**Bottleneck:** Per-category mechanism selection (lookup requires reading catalog, matching content needs)

**Timing discrepancy:** The tier model estimated 70-100 minutes (sequential human time). The Middle experiment took ~35 minutes (parallel agent time). The 2-3x gap reflects planning model error (sequential vs parallel execution).

**Revised estimate for Middle builds:** 30-50 minutes with flat file-bus topology.

---

**Ceiling: 150-220 minutes estimated (45-100 minutes PROJECTED with parallel agents)**

**Team:** 10-12 agents (add metaphor-derivation agent, perceptual-auditor-2, intermediate verification agents)
**Bottleneck:** Metaphor derivation (Phases 1-3, creative judgment, divergence verification)

**Why longer than Middle:** Metaphor derivation is NOT fully parallelizable (continuation bias prevents self-revision). Two-instance pattern means planner → builder is sequential dependency.

**Revised estimate based on Middle learning:** 45-100 minutes with flat topology + agent messaging.

**The timing gap Middle→Ceiling might only be +10-65 minutes (not +80-120 minutes as originally estimated). If true, Ceiling ROI is MUCH higher than expected.**

---

### 1.7 CSS Complexity (Lines of Custom CSS)

**Middle: 350-500 lines**

**Composition:**
- :root block = 100 lines
- 8-10 mechanisms (each 15-30 lines) = 150-250 lines
- Responsive strategy (768px breakpoint) = 100 lines
- Component customizations = 50-100 lines

**Example from Middle experiment:**
- Actual CSS: ~400 lines
- Mechanisms: border-weight gradient (20 lines), 2-zone callouts (50 lines), zone backgrounds (30 lines), dark header (30 lines), code blocks (40 lines), etc.

---

**Ceiling: 700-1000 lines**

**Composition:**
- :root block = 100 lines
- 12-15 mechanisms (each 20-40 lines) = 300-500 lines
- **Metaphor-specific classes** (.stratum, .layer, .depth-marker) = 150-250 lines
- **Multi-channel interaction CSS** (border-weight + spacing + zone all coordinated) = 100-150 lines
- Responsive + scale coherence = 150 lines

**Example from OD-004:**
- Actual CSS: ~800 lines
- Metaphor vocabulary: .stratum--bedrock, .stratum--topsoil, .confidence-indicator, .layer-boundary (**metaphor-specific, NOT in mechanism catalog**)

**THE KEY DIFFERENCE:** Ceiling adds 150-250 lines of metaphor-specific vocabulary that doesn't exist in the catalog. Middle uses catalog vocabulary only.

---

### 1.8 Quality Ceiling & Evaluation Criteria

**Middle: PA-05 DESIGNED (4 sub-criteria)**

**Passing criteria:**
- PA-05a: Compositional variety (3+ different visual treatments) — PASS
- PA-05b: Padding range ratio ≥ 2.0x (sparse vs dense sections) — PASS (exactly 2.0x)
- PA-05c: Visual hierarchy present (squint test reveals structure) — PASS
- PA-05d: Custom composition ≥ 15% (not pure template assembly) — PASS

**Quality ceiling:** "Designed, not just formatted" BUT "specifications applied correctly, not composition felt through" (from Middle retrospective)

**Why:** Vocabulary fluency (knowing many mechanisms) crosses DESIGNED threshold but lacks compositional PURPOSE. Feels "professionally stiff."

**Reader perception:**
- Sections flow with rhythm (not uniform)
- Visual hierarchy is clear (squint test reveals structure)
- Components echo page-level rhythm (callouts feel "of a piece")
- Custom composition visible (not pure template)

**Builder skill:** Vocabulary fluency (knowing many mechanisms, when to use each)

**What's missing:** Sense of PURPOSE. Why is border-weight 4px here and 1px there? "Because hierarchy" (Middle answer) vs "Because geological consolidation pressure" (Ceiling answer).

---

**Ceiling: PA-05 DESIGNED + atmosphere/coherence**

**Passing criteria:**
- All Middle criteria (PA-05 4/4)
- Multi-channel coherence (3+ mechanisms reinforce shared semantic dimension)
- Metaphor authenticity (independently derived, not library pattern-matching)
- 4-scale fractal coherence (Navigation + Page + Section + Component)

**Quality ceiling:** "Compositionally felt through" — the page has REASON for its choices (metaphor), not just breadth (vocabulary)

**Why:** Metaphor provides PURPOSE. Mechanisms aren't just "covering categories" — they're expressing a coherent concept.

**Reader perception:**
- Page has atmosphere (geological depth, botanical growth, theatrical tension)
- Mechanisms reinforce each other (border-weight + zone backgrounds + spacing all say "deeper" together)
- Visual treatments aren't arbitrary — they encode a shared concept
- 4 scales feel intentionally designed (header, scroll, section, callout all echo same direction)

**Builder skill:** Compositional fluency (deriving metaphor from content, selecting mechanisms to EXPRESS that metaphor)

**What's present:** PURPOSE. Mechanisms aren't just solving different problems — they're expressing the SAME thing through multiple channels.

---

### 1.9 Novelty Expectations

**Middle: Structural resemblance expected, VALUES should differ**

**D3 Novelty Tests (from Phase D validation):**
- D3.1: Visual fingerprint (mental blur test) — should NOT match library pages exactly
- D3.2: CSS value overlap < 30% — most values should be unique to THIS content
- D3.3: Mechanism combination novelty — at least 1 mechanism pair not in library

**What's novel:** Border-weight values (4px → 3px → 1px for security vs 4px → 2px → 1px for confidence), mechanism COMBINATIONS (border-weight + color encoding), content-driven semantic encoding

**What's NOT novel:** Using border-weight gradient (mechanism #1 is from catalog), using 2-zone callouts (mechanism #2), using dark header (mechanism #13)

**Family resemblance is EXPECTED.** Shared vocabulary = shared mechanisms. Divergence happens in VALUES and COMBINATIONS, not mechanisms themselves.

**Middle experiment result:** 3/3 NOVEL (visual fingerprint distinct, CSS overlap <30%, border-weight gradient for security layers not in library)

---

**Ceiling: Metaphor should be unique, mechanisms may overlap**

**D3 Novelty Tests + metaphor divergence:**
- All Middle novelty tests
- D3.4: Metaphor NOT in case-studies/_INDEX.md (if convergence → 5-dimension justification)
- D3.5: Mechanism interaction novel (multi-channel encoding not in library)

**What's novel:** The METAPHOR (geological vs botanical vs theatrical), mechanism INTERACTION (3+ mechanisms encoding shared dimension), metaphor-specific VOCABULARY (.stratum vs .growth-stage vs .act)

**What's NOT novel:** The MECHANISMS (border-weight gradient, spacing compression, zone backgrounds are from catalog)

**Ceiling paradox:** Output may LOOK structurally similar to showcase pages (both use border-weight + spacing + zone backgrounds) while being SEMANTICALLY distinct (one encodes geological depth, other encodes narrative tension).

**This is vocabulary fluency, not template copying.** Same mechanisms (grammar), different metaphors (meaning).

---

## 2. FRACTAL SCALE DEPTH — The #1 Richness Gap

### 2.1 What Fractal Coherence IS

**Definition:** The SAME design pattern must appear at multiple scales simultaneously.

**Scales in order (Ceiling requires 4):**
1. **Navigation scale:** Header/TOC structure
2. **Page scale:** Section sequencing
3. **Section scale:** Internal organization WITHIN sections
4. **Component scale:** Individual elements
5. **Character scale:** Inline text (Flagship only)

**The fractal principle:** If page is CRESCENDO (sparse → dense → sparse), then:
- Navigation should show CRESCENDO (minimal header → full header at scroll)
- Page sections should follow CRESCENDO arc (sparse intro → dense middle → sparse conclusion)
- **EACH section internally should follow CRESCENDO** (sparse opening → dense content → sparse closing)
- Components should echo CRESCENDO (callouts start minimal, peak at solid offset, return to minimal)

---

### 2.2 DD-006 Fractal Implementation (4 Scales)

**Page scale:**
- Sparse intro (80px padding, minimal content)
- 4 demonstration blocks (48px padding each, dense content)
- Sparse conclusion (64px padding, summary)

**Section scale (EACH demonstration block):**
- Sparse section header (12px label, "Page Scale" text)
- Dense demonstration box (24px padding, fractal visualization)
- Sparse example code (16px body text, code snippet)
- Dense explanation paragraph (18px body text, detailed text)

**Component scale:**
- Callouts: sparse label (12px uppercase) + dense body (16px paragraph)
- Demonstration boxes: sparse border (1px) + dense content (code + explanation)

**Character scale:**
- Code comments: lighter weight (400)
- Code logic: regular weight (500)
- Bold terms: heavy weight (700)

**Verification:** Pick ANY scale. Does the pattern hold?
- Page: sparse → dense → sparse ✓
- Section (demo block 1): sparse header → dense visualization → sparse code ✓
- Component (callout): sparse label → dense body ✓
- Character (code): sparse comments → dense logic ✓

**All 4 scales echo the SAME rhythm.**

---

### 2.3 Middle Experiment Fractal Implementation (2 Scales)

**Page scale:**
- Sparse overview (80px padding, introductory content)
- Dense architecture (32px padding, diagram + problem callout)
- Moderate installation (48px padding, two-column options)
- Dense security (32px padding, four threat layers)

**Pattern: CRESCENDO variant (sparse → dense with moderate breathing)**

---

**Component scale:**
- Callouts: sparse label (0.75rem uppercase) + dense body (1rem paragraph)
- Architecture diagram: dense content (dark background + 3px border)
- Code blocks: dense content (syntax highlighting + dark bg)

**Pattern: 2-zone DNA (sparse label + dense body) repeated across component types**

---

**Section scale: NOT PRESENT**

Architecture section:
- Heading (uniform treatment, 2rem)
- Problem callout (uniform padding 20px 24px)
- Diagram (uniform treatment, dark bg + 3px border)
- Benefit subsections (uniform border-bottom 1px, uniform padding)

**NO internal progression.** Components are PLACED (not composed into rhythm).

Security section:
- Heading (uniform treatment)
- 4 threat layers (each has SAME internal structure: label + description + mitigation)
- NO progression within section

**Verification:** Security section in isolation:
- Does it have internal sparse → dense → sparse arc? NO
- Are threat layers uniform or progressive? UNIFORM (all 20px 24px padding, all same structure)
- Would removing one threat layer change the rhythm? NO (they're additive, not compositional)

**The gap:** Section-scale coherence is MISSING. Sections are containers for components, not rhythmic compositions.

---

### 2.4 How to Achieve Section-Scale Coherence (Ceiling Requirement)

**The requirement:** Each section must INTERNALLY progress (sparse → dense OR dense → sparse), not just contain uniform components.

**Example 1: Threat Model Section (Ceiling implementation)**

**Section-level arc: Progressive compression (critical → low)**

Threat layer 1 (Critical):
- Padding: 32px 40px (MOST space — sparse internal structure)
- Border: 4px (heaviest)
- Background: #FAF5ED (darkest)
- Internal structure:
  - Sparse intro (lead text, 12px padding)
  - Dense detail (attack vector + impact, 24px padding, bordered)
  - Sparse mitigation (summary, 12px padding)

Threat layer 2 (High):
- Padding: 24px 32px (MODERATE space)
- Border: 3px (medium)
- Background: #FEF9F5 (mid-tone)
- Internal structure: SAME 3-part rhythm (sparse → dense → sparse)

Threat layer 4 (Low):
- Padding: 16px 24px (LEAST space — dense internal structure)
- Border: 1px (thinnest)
- Background: #FEFEFE (lightest)
- Internal structure: SIMPLIFIED (intro + mitigation only, no detailed attack vector)

**Section-scale coherence achieved:**
- Section OVERALL progresses critical (spacious) → low (compressed)
- EACH threat layer INTERNALLY progresses sparse → dense → sparse
- Page-level CRESCENDO echoes at section-level (compression toward end)

---

**Example 2: Tutorial Section (Ceiling implementation)**

**Section-level arc: CRESCENDO (sparse intro → dense procedure → sparse conclusion)**

Section intro (sparse):
- 80px padding
- Single paragraph (overview)
- No callouts or components

Section body (dense):
- 32px padding
- 5-step procedure (each step has code block + explanation + callout)
- Bento grid layout (2-column, dense information)

Section conclusion (sparse):
- 64px padding
- Summary paragraph
- Single "Next steps" link

**Section-scale coherence achieved:**
- Section progresses sparse → dense → sparse
- Page-level CRESCENDO echoes at section-level (tutorial arc)

---

### 2.5 Why Section-Scale Coherence Matters (15-20% Richness)

**Impact on reader perception:**

**Middle (no section-scale coherence):**
- Sections feel like "containers for components"
- Reading ONE section in isolation feels "assembled"
- Components are placed, not composed
- Rhythm exists at page level (sections sequence with arc) but not within sections

**Ceiling (with section-scale coherence):**
- Sections feel like "mini-pages with their own arc"
- Reading ONE section in isolation feels "designed"
- Components compose into rhythm (not just placed)
- Rhythm exists at page level AND section level (fractal)

**The difference:** When you read the Architecture section of Middle experiment in isolation, it's functional (diagram + callout + benefits) but FLAT. When you read a Ceiling section in isolation, it has its OWN rhythm (sparse opening → dense core → sparse closing).

**This is ~15-20% of perceived richness.** It's the difference between "page is designed" (Middle) and "even sections are designed" (Ceiling).

---

### 2.6 M2 Fractal Gate Modification (Implementation)

**Current M2 gate (Middle tier):**
- Checks page-level + component-level coherence
- Verifies 2-zone DNA at component scale
- Does NOT require section-internal rhythm

**Modified M2 gate (Ceiling tier):**
- Checks page-level + section-level + component-level coherence
- **NEW REQUIREMENT:** Section-internal rhythm verification

**Proposed gate addition:**

```markdown
### M2 Fractal Gate (Phase 3.5) — CEILING TIER

**BEFORE proceeding to Phase 4, verify fractal coherence at 4 scales.**

**Scale coverage table (MANDATORY deliverable):**

| Scale | Pattern Expression | Evidence |
|-------|-------------------|----------|
| **Navigation** | [How does header/TOC echo pattern?] | [CSS selectors + description] |
| **Page** | [How do sections sequence?] | [Section padding progression] |
| **Section** | [How do sections INTERNALLY progress?] | **NEW: Each section must have internal arc** |
| **Component** | [How do components echo pattern?] | [2-zone DNA, callout treatment] |

**Section-scale requirement (CRITICAL FOR CEILING):**

Pick the LONGEST section (highest word count). Document its internal progression:
- Does it open sparse and compress? (CRESCENDO)
- Does it open dense and expand? (INVERSE CRESCENDO)
- Does it alternate? (PULSE)
- Is it uniform? (FAIL — section-scale coherence missing)

**Example PASS:**

Security Threat Model section:
- Threat 1 (Critical): 40px padding, detailed 3-part structure
- Threat 2 (High): 32px padding, moderate 3-part structure
- Threat 3 (High): 32px padding, moderate structure
- Threat 4 (Low): 24px padding, simplified 2-part structure

**Internal arc: Progressive compression (spacious → compressed)**

**Example FAIL:**

Security Threat Model section:
- Threat 1: 24px padding, uniform structure
- Threat 2: 24px padding, uniform structure
- Threat 3: 24px padding, uniform structure
- Threat 4: 24px padding, uniform structure

**No internal arc. Components are placed uniformly.**

**If section-scale coherence is MISSING, return to Phase 2 (metaphor) and derive section-internal rhythm.**
```

---

## 3. REINFORCING PAIRS — Multi-Channel Coherence

### 3.1 What Multi-Channel Encoding IS

**Definition:** 2+ mechanisms encoding the SAME semantic dimension through different CSS channels simultaneously.

**The channels:**
1. **Border-weight** (1px → 4px)
2. **Spacing** (tight → generous padding/margin)
3. **Zone backgrounds** (light → dark, or warm → cool)
4. **Typography** (small → large, light → bold)
5. **Color** (accent/primary/secondary semantic encoding)

**Multi-channel coherence:** When border-weight + spacing + zone backgrounds ALL say "importance" TOGETHER (not different things).

---

### 3.2 DD-006 Multi-Channel Encoding (4 Channels Active)

**Semantic dimension: "Fractal depth" (4 scales of self-similarity)**

At Section scale (fractal demonstration blocks):

**Channel 1: Border-weight (encodes fractal level)**
- Page-scale demo: 4px border (top-level)
- Section-scale demo: 3px border (mid-level)
- Component-scale demo: 2px border (micro-level)
- Character-scale demo: 1px border (inline-level)

**Channel 2: Spacing (encodes fractal density)**
- Page-scale demo: 48px padding (spacious)
- Section-scale demo: 32px padding (moderate)
- Component-scale demo: 24px padding (tight)
- Character-scale demo: 16px padding (minimal)

**Channel 3: Zone backgrounds (encodes fractal zones)**
- Page-scale demo: #FEF9F5 (sparse cream)
- Section-scale demo: #F0EBE3 (breathing tan)
- Component-scale demo: #FFFFFF (dense white)
- Character-scale demo: #1A1A1A (bedrock dark — code blocks)

**Channel 4: Typography (encodes fractal hierarchy)**
- Page-scale demo: 1.625rem heading (largest)
- Section-scale demo: 1.375rem heading (large)
- Component-scale demo: 1rem body (moderate)
- Character-scale demo: 0.875rem code (small)

**All 4 channels encode "fractal depth."** As you descend scales (page → character), borders thin, spacing compresses, backgrounds shift, type scales down.

**Perceptual impact:** You don't just SEE the fractal pattern — you FEEL it. Four CSS languages saying "self-similarity at 4 scales" simultaneously.

---

### 3.3 Middle Experiment Multi-Channel Encoding (2-3 Channels Active, Partial)

**Example: Architecture section**

**Channel 1: Spacing**
- Section padding: 32px (dense — page-level arc position)
- Callout padding: 20px 24px (moderate)
- Diagram padding: 24px 32px (moderate)

**Partial encoding:** Spacing shows SOME variation (32 vs 24) but doesn't encode a single semantic. Section is "dense" (32px), callout is "moderate" (24px), diagram is "moderate" (32px). No clear progression.

**Channel 2: Border-weight**
- Callout border: 4px (emphasis)
- Diagram border: 3px (structural)

**Partial encoding:** Border-weight shows hierarchy (4px > 3px) but within-section borders don't form gradient. Callout and diagram have DIFFERENT borders for DIFFERENT reasons (emphasis vs structure), not encoding shared dimension.

**Channel 3: Zone backgrounds**
- Section background: #FEFEFE (dense zone, off-white)
- Callout background: #FEF9F0 (breathing zone, warm cream)
- Diagram background: #1A1A1A (bedrock, dark)

**No encoding:** Backgrounds differentiate component TYPES (callout vs diagram) but don't encode shared semantic. Callout is warm because it's a callout, diagram is dark because it's a diagram. Not coordinated.

**Channel 4: Typography**
- Section heading: 2rem
- Callout label: 0.75rem
- Diagram text: 0.875rem

**Standard hierarchy:** Typography shows heading > label > body hierarchy but doesn't encode Architecture-section-specific semantic.

---

**Channels encoding SHARED semantic: 0-1** (spacing partially)

**Channels encoding DIFFERENT semantics:**
- Spacing → "section density in page arc"
- Border-weight → "emphasis hierarchy"
- Zone backgrounds → "component type differentiation"
- Typography → "structural hierarchy"

**They coexist but don't REINFORCE each other.**

---

### 3.4 Ceiling Multi-Channel Encoding (4 Channels Active, ALL Reinforcing)

**Example: Critical Threat Layer (encoding "maximum security importance")**

**Semantic dimension: Security threat importance (critical > high > low)**

**Channel 1: Border-weight (importance signal)**
- Critical: 4px solid primary (RED)
- High: 3px solid coral
- Low: 1px solid border

**Encodes: "How important is this threat?" Heavy border = critical priority.**

**Channel 2: Spacing (attention allocation)**
- Critical: 32px 40px padding (most space = most attention)
- High: 24px 32px padding (moderate attention)
- Low: 16px 24px padding (least attention)

**Encodes: "How much space/attention does this deserve?" More padding = more importance.**

**Channel 3: Zone backgrounds (visual weight)**
- Critical: #FAF5ED (darkest available = strongest emphasis)
- High: #FEF9F5 (mid-tone = moderate emphasis)
- Low: #FEFEFE (lightest = minimal emphasis)

**Encodes: "How visually prominent should this be?" Darker = more important.**

**Channel 4: Typography (hierarchy signal)**
- Critical badge: 0.625rem bold uppercase + border (strongest treatment)
- High badge: 0.625rem bold uppercase + border (same — intentional, shows these are BOTH high-priority)
- Low badge: 0.625rem regular (lighter weight = lower importance)

**Encodes: "Where in hierarchy?" Badge weight encodes importance.**

---

**ALL FOUR channels encode "threat importance."**

- Critical gets: heavy border + spacious padding + dark background + bold badge
- Low gets: thin border + tight padding + light background + regular badge

**Perceptual impact:** You see a Critical threat layer and IMMEDIATELY understand it's critical — not because you read the label, but because 4 CSS channels are SHOUTING "important" at you simultaneously.

**This is multi-channel coherence.** It's not just using border-weight, it's using border-weight + spacing + zone-bg + typography to say the SAME THING.

---

### 3.5 How to Verify Multi-Channel Coherence (Ceiling Requirement)

**Mechanism interaction requirement (from Ceiling tier spec):**

"For 3+ mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same semantic dimension)."

**Verification table (MANDATORY for Ceiling):**

| Mechanism Pair | Shared Semantic | Channel 1 | Channel 2 | Evidence |
|----------------|-----------------|-----------|-----------|----------|
| Border-weight + Spacing | Threat importance | Heavy border (4px critical) | Spacious padding (40px critical) | Both say "critical priority" |
| Spacing + Zone backgrounds | Threat importance | Spacious padding (40px critical) | Dark background (#FAF5ED critical) | Both say "emphasize this" |
| Border-weight + Typography | Threat importance | Heavy border (4px critical) | Bold badge (700 weight critical) | Both say "top of hierarchy" |

**Minimum: 3 mechanism pairs documenting shared semantic dimension.**

**Anti-example (Middle-tier, NO multi-channel coherence):**

| Mechanism Pair | Shared Semantic | Channel 1 | Channel 2 | Evidence |
|----------------|-----------------|-----------|-----------|----------|
| Border-weight + Spacing | NONE | Border encodes emphasis | Spacing encodes page-arc position | Different semantics |
| Spacing + Zone backgrounds | NONE | Spacing encodes density | Zone-bg encodes component type | Different semantics |

**Why Middle fails verification:** Mechanisms work independently, encoding DIFFERENT semantics. No shared dimension.

---

### 3.6 Anti-Examples: What Multi-Channel Encoding is NOT

**Anti-example 1: "Mechanisms deployed from same category"**

- Using #1 Border-Weight + #4 Spacing Compression + #11 Typography Scale
- All three are from Hierarchy category
- BUT encoding DIFFERENT things: Border = emphasis, Spacing = density arc, Typography = structural hierarchy
- **NOT multi-channel.** Being in same category ≠ encoding shared semantic.

**Anti-example 2: "Mechanisms applied to same content"**

- Architecture section has border-weight (4px callout, 3px diagram) + spacing (32px section padding) + zone backgrounds (3 colors)
- All three appear in same section
- BUT encoding DIFFERENT things: Border = per-component emphasis, Spacing = page-level arc, Zone-bg = component type
- **NOT multi-channel.** Appearing together ≠ reinforcing each other.

**Anti-example 3: "Mechanisms with coordinated values"**

- Critical section: 4px border, 40px padding, #FAF5ED background
- High section: 3px border, 32px padding, #FEF9F5 background
- Values progress together (4→3, 40→32, dark→light)
- BUT encoding DIFFERENT semantics: Border = structural emphasis, Spacing = content density, Zone-bg = section differentiation
- **NOT multi-channel.** Coordinated values ≠ shared semantic.

**The test for multi-channel coherence:**

Ask: "What does the border-weight encode?"
Answer: "Threat importance (critical > high > low)"

Ask: "What does the spacing encode?"
Answer: "Threat importance (critical > high > low)"

Ask: "What does the zone background encode?"
Answer: "Threat importance (critical > high > low)"

**SAME ANSWER = multi-channel coherence.**

If answers are different ("border encodes emphasis," "spacing encodes density," "zone-bg encodes separation"), it's NOT multi-channel.

---

## 4. VOCABULARY vs COMPOSITIONAL FLUENCY

### 4.1 The Two Dimensions of "Designed"

**Vocabulary fluency (Middle tier):**
- Knowing many mechanisms (8-10 deployed across 5 categories)
- Knowing WHEN to use each (content has callouts → mechanism #2)
- Knowing HOW to combine them (border-weight + color encoding both on callouts)
- Achieving breadth (all 5 categories covered)

**Compositional fluency (Ceiling tier):**
- Knowing WHY mechanisms are selected (metaphor drives selection)
- Knowing HOW mechanisms work TOGETHER (multi-channel encoding)
- Achieving unity (mechanisms express shared concept, not just coverage)
- Deriving metaphor BEFORE consulting catalog (not lookup-driven)

---

**PA-05 DESIGNED at Middle tier:**
- PA-05a: Compositional variety (3+ treatments) — PASS (callouts, diagram, tables)
- PA-05b: Padding range 2.0x — PASS (80px vs 40px)
- PA-05c: Visual hierarchy — PASS (dark header + diagram focal points)
- PA-05d: Custom composition ≥15% — PASS (estimated)

**Result: DESIGNED (vocabulary fluency)**

**But perceptual verdict noted:** "specifications applied correctly, not composition felt through," "professionally stiff," "60% structural expression, 40% labeled"

**What this means:** Page is designed (mechanisms deployed, rhythm present, hierarchy clear) but lacks COMPOSITIONAL PURPOSE. You can see the mechanisms, but you can't feel the concept.

---

**PA-05 DESIGNED at Ceiling tier:**
- All Middle criteria PASS
- PLUS: Multi-channel coherence (3+ pairs reinforce shared semantic)
- PLUS: Metaphor authenticity (independently derived)
- PLUS: 4-scale fractal coherence (section-internal rhythm)

**Result: DESIGNED + "felt through" (compositional fluency)**

**Perceptual verdict (projected):** "atmosphere present," "mechanisms reinforce each other," "page expresses coherent concept"

**What this means:** Page is designed (mechanisms deployed) AND purposeful (mechanisms express metaphor). You don't just see the mechanisms — you FEEL the concept (geological depth, botanical growth, theatrical tension).

---

### 4.2 Middle Tier's Ceiling: "Professionally Stiff"

**Why vocabulary fluency alone maxes out at "professionally stiff":**

**Middle tier CAN achieve:**
- Mechanism deployment (8-10 mechanisms)
- Category coverage (all 5 categories)
- Page-level rhythm (sparse → dense → sparse arc)
- Component-level coherence (2-zone DNA)
- Novelty (3/3 signals)

**Middle tier CANNOT achieve:**
- Compositional PURPOSE (WHY is border-weight 4px here? "Because hierarchy" is not expressive)
- Multi-channel unity (mechanisms work independently, not reinforcing shared semantic)
- Atmosphere (page feels "organized" not "meaningful")
- Section-scale fractal (sections are containers, not compositions)

**The gap:** Vocabulary fluency gets you TO "designed" threshold but not THROUGH it. You cross PA-05 (mechanisms present, rhythm visible, hierarchy clear) but stop at "professionally stiff" (correct but not expressive).

---

### 4.3 Ceiling Tier's Requirement: Metaphor + Agent Collaboration

**Compositional fluency requires TWO things vocabulary alone can't provide:**

**1. Metaphor-driven selection (not content-driven lookup)**

Middle: "Content has security layers → border-weight gradient"
- Selection based on content STRUCTURE (layers exist)
- Mechanism solves FUNCTIONAL need (showing hierarchy)

Ceiling: "Metaphor is 'fortified perimeter' → border-weight encodes perimeter rings"
- Selection based on metaphor CONCEPT (concentric protection)
- Mechanism expresses SEMANTIC meaning (outer wall 1px → vault 4px)

**The difference:** Middle mechanism serves CONTENT. Ceiling mechanism expresses METAPHOR.

---

**2. Agent collaboration (not file-only isolation)**

**Middle experiment (file-only):**
- Builder couldn't ask planner clarifying questions
- Footer specified in plan but missing in output (WOULD-NOT-SHIP)
- "Footer Mirror" concept ambiguous — builder guessed, guessed wrong
- Result: B+ quality (missing footer, token compliance 66.5%)

**CD-006 (with messaging):**
- Builder → Planner: "What does Footer Mirror look like?"
- Planner → Builder: "Dark background + 3px border-top + mirrored header structure"
- Builder implements correctly
- Result: 39/40 (A quality)

**Phase C (with messaging):**
- 11/11 criteria MET
- Zero WOULD-NOT-SHIP findings
- Agent messaging caught ambiguities DURING build

**Finding #9 from retrospective:** "Agent communication is essential for quality. Zero SendMessage = fast execution (35 min) but B+ quality. CD-006 WITH messaging = 39/40. Missing footer = smoking gun (builder couldn't ask planner)."

---

**The architectural principle:**

Vocabulary fluency (Middle) = agent + catalog (file-only handoffs work)

Compositional fluency (Ceiling) = agent + catalog + metaphor + agent messaging (file-only breaks down)

**Why:** Metaphor introduces AMBIGUITY that content-driven selection doesn't have. "Apply border-weight gradient to security layers" is clear. "Express 'fortified perimeter' through border-weight" requires interpretation. Interpretation requires conversation.

---

### 4.4 The 60-65% Richness Ceiling (Middle Tier Maximum)

**Why Middle maxes out at 60-65% of showcase richness:**

**What Middle HAS (same as DD-006):**
- 12 mechanisms deployed (SAME COUNT)
- Mechanisms from same 18-mechanism catalog (SAME TOOLS)
- Soul compliance (SAME CONSTRAINTS)
- Fresh-eyes auditing (SAME PROCESS)

**What Middle LACKS (vs DD-006):**
- 2 scales vs 4 scales → ~15-20% gap
- 2-3 channels vs 4 channels → ~10% gap
- 30% metaphor saturation vs 100% saturation → ~15% gap (but metaphor not REQUIRED for Middle)
- 0 iterations vs 5 iterations → ~10-15% gap (process, not vocabulary)

**Total gap: 35-40% richness**

**Middle achieves: 60-65% of DD-006 richness**

**Breakdown:**
- Mechanism vocabulary: 100% (same catalog, same count)
- Scale depth: 50% (2 scales vs 4)
- Multi-channel coordination: 50-60% (2-3 channels vs 4)
- Metaphor unity: 30% (not required for Middle, so acceptable)
- Iteration refinement: 0% (single-pass vs 5 explorations)

**The 60-65% ceiling is EXPECTED and ACCEPTABLE for Middle tier.** Middle is NOT supposed to achieve showcase-level richness. Middle is the PRODUCTION FLOOR (fast, reproducible, "designed not formatted"). Ceiling closes the scale + coordination gaps.

---

## 5. PIPELINE MODIFICATIONS for Ceiling Tier

### 5.1 Phase Structure Differences (Middle vs Ceiling)

**Middle Pipeline (Track 1 — Assembly):**

```
Phase 0: Content Selection (800-1,200 words, 4+ structural types)
Phase 1: Planning (pattern selection via lookup table, per-category minimums S:1+ H:1+ C:1+ D:1+ N:1+)
Phase 2: Build (mechanisms → CSS, self-check CPL/token/landmarks)
Phase 3: Programmatic Audit (binary compliance)
Phase 4: Perceptual Audit (PA questions, single fresh-eyes auditor)
Phase 5: Evaluation (comparative + novelty)
Phase 6: Verdict
```

**Timing:** 30-50 minutes (8 agents, flat topology, file-bus + messaging)

---

**Ceiling Pipeline (Track 2 — Composition):**

```
Phase 0: Content Selection (same as Middle)
Phase 0.5: Addition Test (does content FAIL Addition Test? If YES → Ceiling, if NO → Middle)

Phase 1: Metaphor Derivation (NEW — NOT in Middle)
  Round 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + conditionals)
  Round 2: Tension derivation (richness scoring formula)
  Round 3: Metaphor collapse (tension → single guiding metaphor)
  Output: Metaphor statement + 3+ CSS mappings
  Gate: Metaphor appropriateness review (team-lead approval)

Phase 2: Planning (metaphor-driven selection, per-category minimums S:2+ H:2+ C:3+ D:2+ N:2+)
  NEW: Mechanism interaction table (3+ pairs document shared semantic dimension)

Phase 3: Build (same as Middle)

Phase 3.5: Fractal Gate (MODIFIED — adds section-scale requirement)
  NEW: Section-internal rhythm verification

Phase 4: Programmatic Audit (same as Middle)

Phase 5: Perceptual Audit (DUAL fresh-eyes auditors, reconcile if verdicts differ)

Phase 6: Evaluation (same as Middle)

Phase 7: Verdict
```

**Timing:** 45-100 minutes (10-12 agents, flat topology, file-bus + messaging)

---

### 5.2 Key Additions for Ceiling

**Addition 1: Metaphor Derivation (Phases 1-3 from tension-composition skill)**

**Why necessary:** Ceiling requires compositional PURPOSE (not just vocabulary breadth). Metaphor provides that purpose. Without metaphor derivation, Ceiling is just "Middle with more mechanisms" — no atmosphere, no unity.

**What it does:**
- Identifies content's irreducible tensions (FEEL vs UNDERSTAND vs DO vs BECOME)
- Scores tensions via richness formula (prominence × irreducibility × semantic gap)
- Collapses tensions into single guiding metaphor (structural isomorphism + domain search)
- Outputs metaphor + 3+ CSS mappings (border-weight = consolidation pressure, spacing = layer depth, zone-bg = material composition)

**Time cost:** ~10-15 minutes (1 agent, 3 sequential rounds)

**Gate:** Team-lead reviews metaphor appropriateness BEFORE Phase 2. If metaphor is strained ("remote access is like gardening") → reject, re-derive with different axis.

---

**Addition 2: Mechanism Interaction Table (Phase 2 — Planning)**

**Why necessary:** Ceiling requires multi-channel coherence (mechanisms reinforcing shared semantic). Without interaction documentation, agents might deploy 12-15 mechanisms INDEPENDENTLY (hitting mechanism count but missing coherence).

**What it does:**
- Builder documents 3+ mechanism pairs
- For each pair, states shared semantic dimension
- Shows how BOTH mechanisms encode that dimension (border-weight = importance, spacing = importance)

**Example:**

| Mechanism Pair | Shared Semantic | Evidence |
|----------------|-----------------|----------|
| Border-weight (#1) + Spacing (#4) | Threat importance | 4px + 40px = critical, 1px + 24px = low |
| Spacing (#4) + Zone backgrounds (#7) | Threat importance | 40px + dark bg = critical, 24px + light bg = low |
| Border-weight (#1) + Color (#9) | Threat importance | 4px primary = critical, 1px gray = low |

**Minimum: 3 pairs (Middle has 0 requirement, Ceiling has 3+ requirement)**

**Time cost:** ~5 minutes (documentation only, thinking happens during selection)

---

**Addition 3: Section-Scale Fractal Verification (Phase 3.5 — Fractal Gate)**

**Why necessary:** Section-scale coherence is THE #1 richness gap (15-20% of perceived richness). Without explicit verification, builders will produce page-level + component-level rhythm but miss section-internal rhythm.

**What it does:**
- Builder picks longest section
- Documents internal progression (sparse → dense OR dense → sparse OR alternating)
- Shows how section INTERNALLY echoes page-level pattern

**Example PASS:**

Security Threat Model section (page-level CRESCENDO):
- Threat 1 (Critical): 40px padding, 3-part structure (sparse intro → dense detail → sparse mitigation)
- Threat 2 (High): 32px padding, 3-part structure
- Threat 4 (Low): 24px padding, 2-part structure (simplified)

**Internal arc: Progressive compression (spacious → tight) echoes page-level CRESCENDO**

**Example FAIL:**

Security section:
- Threat 1: 24px padding, uniform structure
- Threat 2: 24px padding, uniform structure
- Threat 3: 24px padding, uniform structure
- Threat 4: 24px padding, uniform structure

**No internal arc. Return to Phase 2, derive section-internal rhythm.**

**Time cost:** ~5 minutes (documentation + verification)

---

**Addition 4: Dual Perceptual Auditors (Phase 5 — Perceptual Audit)**

**Why necessary:** "Felt through" quality is SUBJECTIVE. Single auditor has bias (might see atmosphere where none exists, or miss it). Dual auditors with reconciliation reduces single-evaluator variance.

**What it does:**
- Two fresh-eyes agents (zero context, no build plan)
- Both see same screenshots
- Both answer same 48 PA questions
- Both produce independent verdicts
- If verdicts MATCH (both "felt through") → PASS
- If verdicts DIFFER (one "felt through," one "professionally stiff") → third auditor OR team-lead reconciliation

**Time cost:** ~6 minutes each (parallel, so +6 min total vs Middle's single auditor)

---

### 5.3 Timing Reconciliation (Projected vs Actual)

**Tier model PROJECTED (sequential human time):**
- Middle: 70-100 minutes
- Ceiling: 150-220 minutes
- Gap: +80-120 minutes

**Middle experiment ACTUAL (parallel agent time):**
- Middle: 35 minutes (~50% of projected)

**If parallel scaling holds, Ceiling ACTUAL (projected):**
- Ceiling: 45-100 minutes (~50% of projected 150-220 min)
- Gap from Middle: +10-65 minutes (not +80-120 minutes)

**This changes the ROI calculation:**

Original model:
- Middle 85 min → Ceiling 185 min = +100 min for +25% richness (65% → 90%)
- ROI: MEDIUM

Revised model (if timing holds):
- Middle 35 min → Ceiling 70 min = +35 min for +25% richness (65% → 90%)
- ROI: HIGH (comparable to Floor→Middle, which is +25 min for +35% richness)

**Critical uncertainty:** Will Ceiling's metaphor derivation (Phases 1-3) compress like Middle's planning did? Or is metaphor derivation inherently sequential (continuation bias prevents parallelization)?

**Recommendation:** Run Ceiling experiment to measure ACTUAL timing. If Ceiling is 45-100 min (not 150-220 min), the tier model's time estimates need recalibration across all tiers.

---

### 5.4 Communication Protocol (File-Bus + Messaging)

**Middle experiment used:** File-bus only (no SendMessage)
- Builder → Planner: NO communication (builder guessed when ambiguous)
- Auditor → Team-Lead: NO communication (auditor flagged issues in report, team-lead saw AFTER completion)
- Result: Missing footer (WOULD-NOT-SHIP)

**CD-006 used:** Messaging enabled
- Builder → Planner: "What does Footer Mirror look like?"
- Auditor → Team-Lead: Issue flagging mid-process
- Result: 39/40 (A quality)

**Finding #9:** "Agent communication is essential for quality. Zero SendMessage = fast execution but B+ quality. CD-006 WITH messaging = 39/40."

---

**Ceiling MUST use:** File-bus + messaging (hybrid protocol)

**File-bus for PRIMARY outputs:**
- Phase 1 metaphor derivation → writes 01-metaphor.md
- Phase 2 planning → writes 02-build-plan.md (includes interaction table)
- Phase 3 building → writes ceiling-page.html
- Phase 4 audits → write 03-programmatic.md, 04-perceptual-1.md, 04-perceptual-2.md
- Phase 5 evaluation → writes 05-comparison.md, 05-novelty.md
- Phase 6 verdict → writes 06-VERDICT.md

**SendMessage for CLARIFICATION workflow:**
- Builder → Planner: "How does metaphor X express at navigation scale?"
- Builder → Team-Lead: "Should footer mirror header exactly or vary?"
- Auditor-1 → Auditor-2: "I see atmosphere, do you? Let's reconcile."
- Team-Lead → Builder: "Metaphor approved, proceed to implementation"

**Why hybrid works:**
- File-bus preserves outputs (team-lead can review files after completion)
- Messaging enables real-time clarification (prevents missing footer bug)
- Flat topology (team-lead → agents directly) avoids hierarchical overhead
- Per-file ownership (one builder, one HTML file) avoids contention

**Communication overhead:** Estimated +5-10 minutes vs file-only (worth it for quality improvement)

---

## 6. SKILL ENRICHMENT STATUS

### 6.1 Critical Gaps (BLOCKING for Ceiling)

**Gap 1: M1 Per-Category Minimums**
- **Current state:** Skill has "sample 2-4 mechanisms" language in some phases, "per-category minimums" in others
- **What's needed:** Search-and-replace ALL "sample 2-4" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+ for Middle; S:2+, H:2+, C:3+, D:2+, N:2+ for Ceiling)
- **Why blocking:** Without this, agents deploy 2-4 mechanisms total (Phase D failure mode: 5/44 mechanisms = 11.4% density)
- **Evidence:** All 11 research agents identified this as THE limiting specification. Middle experiment deployed 12 mechanisms and achieved DESIGNED.
- **Status:** IDENTIFIED, not yet applied

---

**Gap 2: Rhythm Variation Requirement**
- **Current state:** Skill has transition types (SMOOTH/BRIDGE/BREATHING) but NO minimum count
- **What's needed:** Add Phase 4.2C (after current Phase 4.2B) with binary rule: "Page MUST include 3+ different transition types"
- **Why blocking:** Middle experiment failed PA-17 ("metronomic rather than musical") and PA-41 ("spacing patterns repeat without variation"). Without minimum, agents deploy ALL SMOOTH transitions (48px repeated 5 times).
- **Evidence:** Middle retrospective flagged metronomic rhythm as quality gap. Rhythm variation is ~10% of perceived richness.
- **Status:** IDENTIFIED, not yet applied

---

**Gap 3: Landmark Completeness Gate**
- **Current state:** Skill documents #13 Header and #14 Footer as mechanisms but NO requirement that pages include them
- **What's needed:** Add Phase 4.7B (after current Phase 4.7 Fractal Gate) with binary verification table: Header (required), Main content (required), Footer (required for Middle+)
- **Why blocking:** Middle experiment WOULD-NOT-SHIP finding: missing footer. Builder specified footer in plan but forgot to implement. No gate caught this before auditors saw page.
- **Evidence:** PA-13 ("page just stops, no visual ending") flagged missing footer. Footer is narrative closure requirement.
- **Status:** IDENTIFIED, not yet applied

---

### 6.2 High-Priority Gaps (Strongly Recommended)

**Gap 4: Heading Spacing Ratio**
- **Current state:** Guardrails mention heading spacing but don't enforce 1.5:1 ratio as binary rule
- **What's needed:** Modify Phase 4.0 guardrails table to add ratio enforcement: "space-above / space-below >= 1.5"
- **Why high-priority:** PA-SEM-01 noted "space above vs below appears roughly equal." WCAG principle: headings belong to content below. Ratio ensures visual grouping.
- **Evidence:** Middle experiment heading spacing ratio violated (equal spacing above/below = 1:1, not 1.5:1 minimum)
- **Status:** IDENTIFIED, not yet applied

---

**Gap 5: PA-05 Operationalization**
- **Current state:** PA-05 is single holistic question ("Would you put your name on this?")
- **What's needed:** Expand PA-05 with 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) validated by Middle experiment
- **Why high-priority:** PA-05 passed at Middle (4/4 sub-criteria) but current skill doesn't document sub-criteria structure. Adds precision to "designed" threshold.
- **Evidence:** Middle retrospective validated 4 sub-criteria. All passed.
- **Status:** IDENTIFIED, not yet applied

---

### 6.3 Medium-Priority Gaps (Recommended)

**Gap 6: Impact Profiles by Mechanism**
- **What's needed:** Add perceptual effectiveness rating to each mechanism in catalog (HIGH/MEDIUM/LOW visibility)
- **Why recommended:** Prevents "5 LOW-visibility mechanisms = flat page" problem. Middle used border-weight gradient (HIGH) + spacing compression (LOW). Gradient created drama, spacing was "perceptually subtle."
- **Status:** IDENTIFIED, not yet applied

**Gap 7: Application Mode Guidance**
- **What's needed:** Document progressive vs discrete modes for border-weight gradient (#1)
- **Why recommended:** Middle used BOTH modes (progressive for security layers = worked; discrete for ALL h3 = repetitive). Guidance prevents repetition.
- **Status:** IDENTIFIED, not yet applied

**Gap 8: Zone Background Semantic Mappings**
- **What's needed:** Document recommended mappings (Sparse = intro, Dense = technical, Breathing = procedural, Bedrock = landmarks only)
- **Why recommended:** Clarifies which zone color for which content type. Middle used zones intuitively; explicit mappings help future builders.
- **Status:** IDENTIFIED, not yet applied

---

### 6.4 Enrichment Priority for Ceiling Experiment

**MUST apply before Ceiling (blocking):**
1. M1 per-category minimums (Gap 1)
2. Rhythm variation requirement (Gap 2)
3. Landmark completeness gate (Gap 3)

**SHOULD apply before Ceiling (high-priority):**
4. Heading spacing ratio (Gap 4)
5. PA-05 sub-criteria (Gap 5)

**CAN defer until after Ceiling (medium-priority):**
6. Impact profiles (Gap 6)
7. Application mode guidance (Gap 7)
8. Zone background mappings (Gap 8)

**Rationale:** Gaps 1-3 are BLOCKING (without them, Ceiling will fail same way Middle had defects). Gaps 4-5 are QUALITY (Ceiling can succeed without them but will be stronger with them). Gaps 6-8 are GUIDANCE (helpful but not required for success).

**Estimated enrichment effort:**
- Blocking gaps: 45-60 minutes (search-and-replace + gate additions)
- High-priority gaps: 30 minutes (ratio enforcement + PA-05 expansion)
- Medium-priority gaps: 60 minutes (catalog annotations)
- **Total: 135-150 minutes (2-2.5 hours)**

**Recommendation:** Apply blocking gaps IMMEDIATELY. Apply high-priority gaps before Ceiling experiment. Defer medium-priority gaps until after Ceiling validation (use Ceiling learnings to refine guidance).

---

## 7. RICHNESS PROVENANCE — Why Richness Exists (Not Random)

### 7.1 The Provenance-Richness Relationship (Two-Stage Model)

**STAGE 1: Provenance → Mechanisms (Historical, One-Time)**

The 337 research findings didn't CREATE richness directly. They DISCOVERED techniques that create richness.

**What the provenance chain did (DD-001 through CD-006, 2024-2025):**
1. R1-R5 research (337 findings) → identified patterns in existing rich sites (Stripe, Vercel, Linear, Notion)
2. DD-001 through DD-006 (6 density explorations) → tested density patterns, discovered fractal self-similarity
3. OD-001 through OD-006 (6 organization explorations) → tested organizational patterns, discovered confidence encoding
4. AD-001 through AD-006 (6 axis explorations) → tested axis patterns, discovered attention topology
5. CD-001 through CD-006 (6 combination explorations) → combined everything, discovered multi-channel encoding

**OUTPUT: 18 mechanisms extracted into mechanism-catalog.md**
- Border-weight gradient (#1)
- 2-zone component DNA (#2)
- Solid offset depth (#3)
- Spacing compression (#4)
- ... 14 more

**This stage happened ONCE. It's done. It's historical.**

The provenance chain was the DISCOVERY PROCESS that found the 18 mechanisms. It's like scientific research that discovers a chemical formula. Once you have the formula, you don't need to re-run the entire research process to use the chemical.

---

**STAGE 2: Mechanisms → Richness (Current, Repeatable)**

Now that we have the 18 mechanisms (extracted from the provenance chain), we can APPLY them to new content WITHOUT re-running the full provenance chain.

**What creates richness NOW:**
1. Deploy mechanisms (border-weight, 2-zone DNA, spacing compression, etc.)
2. Deploy them across scales (page + section + component + character)
3. Deploy them in coordinated channels (border-weight + spacing + zone-bg all say "depth")
4. Apply them to content-appropriate metaphors (geological strata, architectural floors, manuscript pages)

**This is what the tier system does:**
- **Floor:** Deploys 5 mechanisms, 0 scales, 0 coordination → ~30% richness
- **Middle:** Deploys 8-10 mechanisms, 2 scales, 2-3 channels → ~60-65% richness
- **Ceiling:** Deploys 12-15 mechanisms, 4 scales, 4 channels → ~85-90% richness
- **Flagship:** Deploys 16-18 mechanisms, 5 scales, 4-5 channels → ~95-98% richness

**The mechanisms ARE the richness-creating tools.** Provenance was just how we FOUND them.

---

### 7.2 Why Middle Gets 60-65% Richness from 35% Provenance Usage

**The provenance percentages are MISLEADING because they measure READING, not APPLICATION.**

**Showcase provenance usage: ~95%**
- Read 337 research findings
- Read all prior explorations (DD-001 through CD-006)
- Iterative refinement across 900+ minutes
- **BUT: Used 12 mechanisms in final output**

**Middle provenance usage: ~35%**
- Read mechanism catalog (18 mechanisms documented)
- Read components.css (component patterns)
- NO research findings, NO prior explorations
- **BUT: Used 12 mechanisms in final output**

**SAME MECHANISM COUNT (12), DIFFERENT PROVENANCE DEPTH.**

---

**The richness gap is NOT mechanism count:**
- DD-006: 12 mechanisms → 90% richness
- Middle: 12 mechanisms → 60-65% richness
- **Gap: 25-30% richness from same mechanism count**

**The richness gap IS:**
1. **Scale depth:** DD-006 has 4 scales, Middle has 2 → ~15-20% gap
2. **Multi-channel coordination:** DD-006 has 4 channels, Middle has 2-3 → ~10% gap
3. **Metaphor unity:** DD-006 has 100% saturation, Middle has ~30% → ~15% gap (but NOT required for Middle)
4. **Iteration refinement:** DD-006 had 5 prior explorations, Middle had 0 → ~10-15% gap (process, not vocabulary)

**Middle achieves 60-65% richness because:**
- It DOES have access to the SAME mechanisms (through catalog)
- It DOES deploy a COMPARABLE number (12 vs 12)
- It LACKS scale depth (2 vs 4)
- It LACKS multi-channel coordination (partial vs full)
- It LACKS iteration (0 vs 5 explorations)

**Provenance usage % measures how much of the DISCOVERY HISTORY you read, not how many TOOLS you apply. Middle reads less history but uses the same tools.**

---

### 7.3 Concrete Example: Border-Weight Gradient Mechanism

**How DD-006 Discovered It (Full Provenance, 750 minutes):**

**Research input:**
- R3-036: Fractal self-similarity finding → "Same rhythm at multiple scales"
- R3-014: Hierarchy encoding via visual weight
- R3-022: Border thickness as semantic signal

**Iteration:**
- DD-001: Tried uniform borders → felt flat
- DD-002: Tried color variation → broke soul (gradients prohibited)
- DD-003: Tried spacing only → insufficient visual weight
- DD-004: DISCOVERED border-weight gradient (4px/3px/2px/1px) → worked
- DD-005: Refined application (when to use which thickness)
- DD-006: Applied border-weight gradient at ALL 4 scales (fractal)

**Time to discover: ~750 minutes (5 explorations × 150 min each)**

**Result:**
```css
/* DD-006 fractal scale headers */
.fractal-scale--page { border-left: 4px solid var(--color-primary); }
.fractal-scale--section { border-left: 3px solid var(--color-primary); }
.fractal-scale--component { border-left: 2px solid var(--color-text-secondary); }
.fractal-scale--character { border-left: 1px solid var(--color-border); }
```

**What it encodes:** Fractal depth (4 levels of self-similarity)

---

**How It Got Extracted (Phase C, 30 minutes):**

**Extraction agent read:**
- DD-006 HTML/CSS
- OD-004 HTML/CSS (also uses border-weight gradient for confidence)
- CD-006 HTML/CSS (uses it for structural hierarchy)

**Extraction agent identified:**
- **Pattern:** 4px/3px/2px/1px progression appears in ALL 3 showcase pages
- **Purpose:** Encodes hierarchy/importance/confidence (ABSTRACT semantic domain)
- **Transferability:** Works with ANY content that has hierarchical structure

**Wrote to mechanism-catalog.md:**
```markdown
### Mechanism #1: Border-Weight Gradient Encoding

**CSS Pattern:** 4px → 3px → 2px → 1px progression

**What it encodes (abstract):** Hierarchy, importance, confidence, depth, certainty

**Transfers to:** ANY content with hierarchical structure or graduated importance

**Examples:**
- DD-006: Fractal scales (page/section/component/character)
- OD-004: Confidence levels (certain/probable/speculative/open)
- CD-006: Structural hierarchy (major/moderate/minor/micro)
```

**Time to extract: ~30 minutes (reading 3 pages, writing documentation)**

---

**How Middle Tier Applied It (Current, 5 minutes):**

**Middle-tier builder read:**
- mechanism-catalog.md (saw border-weight gradient mechanism #1)
- Content analysis: "SYSTEM security docs have 4 threat levels with different importance"
- Selection: "This content has hierarchy → border-weight gradient fits"

**Application:**
```css
/* Middle-tier security layers */
.threat-layer--critical { border-left: 4px solid var(--color-primary); }
.threat-layer--high { border-left: 3px solid var(--accent-coral); }
.threat-layer--low { border-left: 1px solid var(--color-border); }
```

**What it encodes:** Security threat importance (critical > high > low)

**Time to apply: ~5 minutes (reading mechanism, writing CSS)**

**Did NOT need to:**
- Read 337 research findings
- Review DD-001 through DD-005
- Iterate through 5 explorations
- Discover the mechanism from scratch

**Used the SAME mechanism DD-006 used, but through CATALOG, not DISCOVERY.**

---

### 7.4 Why Richness is NOT Random

**Richness comes from MECHANISM DEPLOYMENT, not randomness.**

**Anti-claim: "DD-006 just got lucky with a good design"**
- FALSE. DD-006 deployed 12 specific mechanisms across 4 scales with 4-channel coordination.
- Remove fractal self-similarity principle → page loses 15-20% richness (section-scale coherence disappears)
- Remove multi-channel encoding → page loses 20-25% richness (mechanisms stop reinforcing)
- Remove iteration refinement → page loses 10-15% richness (rough edges remain)

**Richness is REPRODUCIBLE (with variance):**
- Middle tier: 8-10 mechanisms, 2 scales, 2-3 channels → 60-65% richness (consistent)
- Ceiling tier: 12-15 mechanisms, 4 scales, 4 channels → 85-90% richness (projected)

**The tier model is NOT "sometimes you get rich pages, sometimes you don't."**
**The tier model IS "deploy N mechanisms at M scales with C channels = R% richness."**

**Provenance discovered the formula. Tiers apply the formula at different densities.**

---

## SUMMARY: The Ceiling Ceiling

**What makes a page worthy of Ceiling tier:**

**1. Content requirement:**
- Fails Addition Test (existing components can't fulfill reader needs without transformation)
- Has genuine structural tension (warmth vs austerity, simple vs deep, authority vs playfulness)
- Prose-dominant (>70% narrative) OR conceptual (philosophy, architecture, design rationale)

**2. Mechanism requirement:**
- 12-15 mechanisms deployed (per-category minimums: S:2+, H:2+, C:3+, D:2+, N:2+)
- 3+ mechanism pairs REINFORCE each other (multi-channel encoding)
- Mechanisms selected via metaphor-driven derivation (not content-structure lookup)

**3. Scale requirement:**
- 4 scales MINIMUM (Navigation + Page + Section + Component)
- **Section-scale coherence is CRITICAL** — sections internally progress (sparse → dense OR dense → sparse)
- Page-level pattern echoes at ALL 4 scales (fractal coherence)

**4. Multi-channel requirement:**
- 4 channels active (border-weight + spacing + zone-bg + typography)
- ALL 4 encode SAME semantic dimension (not different semantics)
- Documented interaction table proves multi-channel coherence

**5. Quality threshold:**
- PA-05 4/4 (DESIGNED: all Middle criteria pass)
- PLUS "compositionally felt through" (mechanisms express metaphor, not just cover categories)
- PLUS atmosphere (page has sense of place/concept, not just organization)
- PLUS 4-scale fractal verification (section-internal rhythm confirmed)

**6. Build process:**
- Metaphor derivation (Phases 1-3) BEFORE mechanism selection
- Metaphor quality gate (team-lead approval before implementation)
- Dual perceptual auditors (reconcile if verdicts differ)
- Agent messaging enabled (builder ↔ planner clarification protocol)

**7. Estimated output:**
- Richness: 85-90% of DD-006 showcase quality
- Build time: 45-100 minutes (if parallel agent scaling holds)
- CSS lines: 700-1000 (including 150-250 lines metaphor-specific vocabulary)
- Novelty: EXPECTED (metaphor unique, mechanism interactions novel)

---

**The single most important differentiator between Middle and Ceiling:**

**FRACTAL SCALE DEPTH (section-scale coherence).**

Middle deploys 12 mechanisms across 2 scales (page + component). Ceiling deploys 12-15 mechanisms across 4 scales (navigation + page + section + component). The missing section-scale coherence accounts for ~15-20% of perceived richness.

**Concrete difference:** DD-006's sections INTERNALLY echo the page-level pattern (sparse → dense → sparse rhythm within each demonstration block). Middle's sections have uniform internal structure (components are placed, not composed into rhythms).

**Why this matters:** Section-scale coherence creates the feeling that "even sections are designed" (not just "page is designed"). It's the difference between "organized" (Middle) and "expressive" (Ceiling).

---

**END RICHNESS EXTRACTION**
