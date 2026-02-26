# Gravitational Framing Audit — All Current Artifacts

**Auditor:** team-lead (recovery after 2 agent failures)
**Date:** 2026-02-14
**Method:** Manual read of 12 key files, categorizing gravitational instances by type

---

## GRAVITY TYPE DEFINITIONS

| Type | Code | Description |
|------|------|-------------|
| **Canonical Framing** | CF | Language presenting options as THE answer ("this is how it works") |
| **Tier/Category Gravity** | TG | Classification that forces material into buckets, creating implied hierarchy |
| **Prescriptive Patterns** | PP | Telling agents what to DO rather than showing what was TRIED |
| **Volume Gravity** | VG | Sheer documentation mass on one approach drowning alternatives |
| **Structural Gravity** | SG | File/folder organization implying hierarchy or priority |

---

## FILE-BY-FILE AUDIT

### 1. tension-composition/SKILL.md (839 lines)

**Gravity Rating: HIGH**

**Gravity Instances:**

- **CF** (Line 8): "Transforms raw content into compositional HTML layouts" — presents the pipeline as THE transformation method, not ONE approach
- **CF** (Lines 143-144): "The design system provides a fixed vocabulary. These are non-negotiable" — appropriate for tokens/soul, but the framing bleeds into how agents perceive the entire system as fixed
- **PP** (Lines 25-28): Content Type Classification with exact thresholds (<30%, 30-60%, >60%) — prescribes exact classification boundaries that become defaults
- **PP** (Lines 32-36): Scope Assessment with exact word-count thresholds — agents will treat these as rules, not guidelines
- **PP** (Line 196): "Can you fulfill the reader's need by selecting and placing existing design system components without transforming their meaning?" — the Addition Test is PRESCRIPTIVE by design. It creates a binary (Track 1 or Track 2) that forecloses hybrid approaches
- **VG** (Lines 47-100): Multi-Axis Questioning tables — 14 axes with specific questions, richness ratings, and "when to use" guidance creates massive gravitational pull toward these specific axes. New axes become unlikely
- **TG** (Lines 220-227): The Tension Spectrum (NO TENSION → COSMETIC → WEAK GENUINE → STRONG GENUINE → IMPOSSIBLE) — creates a hierarchy where agents optimize for "STRONG GENUINE" and avoid everything else
- **PP** (Lines 243-249): The Richness Formula with exact scoring dimensions and numeric thresholds — quantification creates the illusion of objectivity and makes agents optimize for high scores rather than good compositions

**Anti-Gravity Instances:**
- Line 93-94: "Key Principle: Opposition Predicts Richness" — framed as principle, not rule
- Lines 105-113: Axis Interaction Effects — framed as observations ("some axis PAIRS produce richer tension") not prescriptions
- Phase 1 explicitly says "for THIS SPECIFIC CONTENT" (line 49) — encourages content-specific derivation

**Summary:** The skill is the HIGHEST gravity artifact because it's the most heavily loaded document. Its 839 lines create enormous volume gravity. Every threshold, score, and classification becomes a default. The skill WORKS because of this precision — but the same precision creates gravitational mass that constrains future creative space.

---

### 2. perceptual-auditing/SKILL.md

**Gravity Rating: MEDIUM**

**Gravity Instances:**
- **PP**: 48 audit questions create a quality rubric that agents optimize toward — compositions that score well on THESE questions become the default target
- **CF**: Guardrail thresholds (940px min container, 16px label-to-heading, 32px padding floor) are framed as floors but function as defaults — agents rarely exceed floors significantly
- **TG**: The question categories create implied hierarchy of what matters in a composition

**Anti-Gravity Instances:**
- Guardrails explicitly framed as FLOORS not ceilings
- "The metaphor shapes experience; the guardrails prevent it from breaking experience" — correctly positions guardrails as safety, not targets

**Summary:** Lower gravity than the composition skill because it's a verification tool, not a generation tool. But its 48 questions define "quality" — and that definition becomes the creative target.

---

### 3. extraction-architecture/01-rigidity-free-architecture.md

**Gravity Rating: MEDIUM-HIGH**

**Gravity Instances:**
- **CF** (Line 14): "Proposed Solution: **The Gradient Architecture**" — names the solution with definitive framing, making it feel canonical
- **TG**: Three-dimensional rigidity model (framing × volume × proximity) — the taxonomy ITSELF becomes the lens through which all rigidity is understood, potentially missing dimensions outside this frame
- **PP** (Lines 37-38): "When to use: [language]" analyzed as prescriptive — but the ANALYSIS of prescription is itself presented prescriptively
- **SG**: The Gradient Architecture proposes 3 tiers, creating a new classification structure that will itself become gravitational

**Anti-Gravity Instances:**
- Explicitly identifies the vocabulary prison risk
- Frames the problem as "how documentation is positioned" not "what documentation says"
- The jazz analogy ("learn the standards, extract the mechanisms, play what YOU hear") is genuinely anti-rigid

**Summary:** Meta-ironic — a document about preventing rigidity that introduces new rigid structures (3-tier model, 3-dimension model). The INSIGHT is valuable; the FRAMING of that insight creates new gravity.

---

### 4. extraction-architecture/05-library-architecture.md

**Gravity Rating: CRITICAL**

**Gravity Instances:**
- **SG**: 40-file, 4-directory system with exact file names and line counts — this is the MOST gravitationally dangerous artifact because it specifies infrastructure before contents are known
- **TG**: tier-1/, tier-2/, tier-2.5/, tier-3/ directory names encode the classification hierarchy into the file system itself
- **PP**: Exact CSS line counts per file ("callouts.css ~60 lines", "code-block.css ~45 lines") — creates false precision
- **CF**: "someone can read and build directly" — presents this as a BUILDABLE spec, not a hypothesis
- **VG**: The level of detail (specific file names, line estimates, loading protocols) creates enormous gravitational mass that makes this feel like a decided architecture

**Anti-Gravity Instances:**
- Core Principle from Research #3 quoted: "Never under the guise of restraint"
- Anti-prescription framing mentioned at entry points

**Summary:** This is the artifact the USER specifically identified as rigid. The file/folder structure IS the rigidity — it creates a container before knowing what goes in it. The 40 named files create 40 gravitational anchors.

---

### 5. extraction-architecture/06-synthesis-blueprint.md

**Gravity Rating: MEDIUM**

**Gravity Instances:**
- **CF**: "Here's what we found:" followed by definitive statements — presents research conclusions as settled answers
- **CF**: "The answer: **The Gradient Architecture**" — THE answer implies ONE answer
- **PP**: Concrete steps like "The gallery of prior work loads only when YOU request it, AFTER you've sketched your own ideas" — prescribes a specific creative workflow

**Anti-Gravity Instances:**
- Frames patterns as "ONE metaphor produced" (explicit anti-canonical language)
- Jazz pedagogy framing is genuinely anti-prescriptive
- Correctly identifies "Pattern count doesn't create rigidity. Pattern FRAMING does."

**Summary:** Mixed. Contains some of the BEST anti-gravity language in the project alongside definitive framing of the Gradient Architecture as THE solution.

---

### 6. true-extraction-inventory/07-synthesis.md

**Gravity Rating: MEDIUM**

**Gravity Instances:**
- **CF**: "THE TRUE COUNT" — definitive framing implies these numbers are settled
- **CF**: "Definitive Synthesis" in the title — the word "definitive" creates canonical authority
- **TG**: Token/Component/Mechanism/Pattern/Composition categories with exact counts — the taxonomy becomes the only way to think about what's extracted
- **PP**: "PATTERNS are NOT extractable as templates — they are PIPELINE OUTPUT" — a correct finding presented as an absolute rule

**Anti-Gravity Instances:**
- "Honest Assessment" section acknowledges uncertainty
- Ranges given (14-18 components) rather than exact numbers
- "What we're confident about" vs "What needs validation" separation

**Summary:** The synthesis correctly identifies that prior counts were wrong, but its own definitive framing ("THE TRUE COUNT") risks creating the same canonical gravity it critiques.

---

### 7. pipeline/05-COMPLETE-ROADMAP.md (835 lines)

**Gravity Rating: HIGH**

**Gravity Instances:**
- **SG**: 9-phase sequential pipeline (A through I) creates a rigid execution order
- **TG**: Phase naming (Content Analysis, Extraction, Validation, etc.) creates categorical gravity — work gets forced into phase buckets
- **PP**: Specific phase durations (Phase C: 20-35 hours) create false precision about execution
- **CF**: "THE reference for what happens after CD" — canonical authority claim
- **VG**: 835 lines describing a specific sequence creates enormous mass that makes alternative sequences feel wrong

**Anti-Gravity Instances:**
- Identifies risks and open questions
- Acknowledges timeline uncertainty (150-325 hours range)

**Summary:** The roadmap is inherently gravitational — its PURPOSE is to prescribe sequence. The risk is that the prescribed sequence forecloses emergent reordering based on what's learned.

---

### 8. pipeline/07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md

**Gravity Rating: HIGH**

**Gravity Instances:**
- **CF** (Line 13): "THE reference for Track 2 migration" — canonical authority
- **PP**: The Addition Test and BECAUSE Test are binary gatekeepers that prescribe track classification
- **PP**: Richness threshold "≥ 8 to warrant Track 2 pipeline" — creates a numeric cutoff that becomes a default
- **TG**: Track 1 vs Track 2 binary — the most dangerous categorization in the system. Content is either assembly or transformation, with no middle ground
- **PP**: Content Type Examples (lines 44-57) show exactly one Track 1 and one Track 2 example — agents will pattern-match against these specific examples

**Anti-Gravity Instances:**
- BECAUSE Test is designed to prevent manufactured needs
- The test framework is genuinely useful for distinguishing cosmetic from genuine tension

**Summary:** Track 1 vs Track 2 is the single most gravitationally dangerous classification in the pipeline. It creates a binary that forecloses hybrid approaches, gradients, or content that's partially both.

---

### 9. pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md

**Gravity Rating: CRITICAL**

**Gravity Instances:**
- **CF** (Line 14): "THE reference for what gets extracted and what gets composed" — canonical authority
- **TG**: 4-tier model (Tier 1 → 2 → 2.5 → 3) with exact boundaries and tests — the tier system becomes the ONLY way to think about extractability
- **PP**: "The Rename Test" prescribes a specific method for tier classification
- **PP**: Tier 3 recipes with step-by-step instructions ("When to use:", "Composition recipe:") — the MOST prescriptive framing in the entire project
- **VG**: ~1,747 lines create enormous mass — this is the second-largest gravity source after the skill itself
- **SG**: The tier numbering (1, 2, 2.5, 3) implies a hierarchy from "most fundamental" to "most creative" — but also from "most rigid" to "most free"

**Anti-Gravity Instances:**
- "The Honest Assessment" section acknowledges counting disagreements
- "9 was an analytical estimate, NOT an exhaustive audit" — correctly identifies prior limitations

**Summary:** The Compositional Strategy Library is the second CRITICAL gravity artifact. Its tier system, prescriptive recipes, and enormous volume create a gravitational field that will dominate any agent's context window. The very structure that makes it USEFUL (organized, categorized, step-by-step) is what makes it GRAVITATIONAL.

---

### 10-12. extraction-architecture/02-04 (guardrail integration, creative freedom, extraction inventory)

**Gravity Rating: LOW-MEDIUM (collectively)**

**Gravity Instances:**
- **CF**: guardrails.css proposal (02) creates new infrastructure framing
- **TG**: 24 components categorized (04) — count that's already been superseded
- **PP**: Anti-prescription warnings (03) are themselves prescriptive about HOW to frame things

**Anti-Gravity Instances:**
- Creative freedom research (03) contains the strongest anti-gravity language: "Learn the standards. Extract the mechanisms. Play what YOU hear."
- Jazz pedagogy analogy is genuinely liberating
- 6 concrete anti-prescription mechanisms identified

**Summary:** These files are research/proposals, not specifications. Their gravity is lower because they read as exploration, not instruction.

---

## GRAVITY MAP — SUMMARY TABLE

| File | Rating | Primary Type | Most Critical Instance |
|------|--------|-------------|----------------------|
| tension-composition/SKILL.md | **HIGH** | VG + PP | 839 lines of pipeline with exact thresholds, scores, and classifications |
| perceptual-auditing/SKILL.md | **MEDIUM** | PP | 48 audit questions define "quality" target |
| 01-rigidity-free-architecture.md | **MED-HIGH** | CF | "The Gradient Architecture" as THE solution |
| 05-library-architecture.md | **CRITICAL** | SG | 40-file/4-directory system designed before contents known |
| 06-synthesis-blueprint.md | **MEDIUM** | CF | "The answer: The Gradient Architecture" |
| 07-synthesis.md (inventory) | **MEDIUM** | CF | "THE TRUE COUNT" as definitive framing |
| 05-COMPLETE-ROADMAP.md | **HIGH** | SG + VG | 835-line 9-phase sequential pipeline |
| 07-TRACK-2-SUPPLEMENT.md | **HIGH** | TG + PP | Track 1 vs Track 2 binary classification |
| 08-STRATEGY-LIBRARY.md | **CRITICAL** | TG + PP + VG | 4-tier model + prescriptive recipes + 1,747 lines |
| 02-guardrail-integration.md | **LOW** | CF | New infrastructure framing |
| 03-creative-freedom.md | **LOW** | — | Strongest anti-gravity language in project |
| 04-extraction-inventory.md | **LOW-MED** | TG | Superseded count (24) |

---

## KEY FINDINGS

### The Gravity Paradox
The most USEFUL documents are the most GRAVITATIONAL. The tension-composition skill works BECAUSE it's precise, with exact thresholds and scoring. The strategy library is valuable BECAUSE it categorizes and prescribes. The solution cannot be "make these documents less precise" — that destroys their utility.

### The Three Gravity Hotspots
1. **The Skill** (839 lines) — volume + precision creates the largest gravitational field
2. **The Strategy Library** (1,747 lines) — tier system + recipes create categorical gravity
3. **The Library Architecture** (40-file spec) — structural gravity from infrastructure designed before contents

### The Binary Classification Problem
Track 1 vs Track 2 is the most dangerous classification. It forecloses hybrid approaches and creates a binary that doesn't match the actual spectrum (some content is 40% assembly + 60% composition).

### The Meta-Irony
The extraction-architecture research about PREVENTING rigidity introduces NEW rigid structures (3-tier loading, 3-dimension model, Gradient Architecture). The anti-rigidity documentation is itself gravitational.

### What's Already Anti-Rigid (Correctly)
- Jazz pedagogy framing ("Play what YOU hear")
- Guardrails as floors not ceilings
- "The metaphor shapes experience" principle
- BECAUSE Test (prevents manufactured needs)
- Honest Assessment sections acknowledging uncertainty
- Ranges instead of exact numbers (14-18 components)
