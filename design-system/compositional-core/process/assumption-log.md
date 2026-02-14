# Assumption Log — How Phase C Addressed the 4 Invisible Assumptions

**Date:** 2026-02-14
**Agent:** process-documenter
**Purpose:** Document whether Phase C extraction addressed (or failed to address) the 4 invisible assumptions identified in metacognition research

---

## Executive Summary

**Overall Assessment:** Phase C extraction PARTIALLY addressed 3 of 4 assumptions, with mixed success:

| Assumption | Addressed? | Strength | Residual Risk |
|------------|-----------|----------|---------------|
| **1. Extraction is FOR agents** | ✅ PARTIALLY | Framing acknowledges both agent + content needs | 30% — agent-centric language persists |
| **2. Design tokens are discrete items** | ✅ YES | 6-layer ontology explicitly rejects atomism | 10% — counting still happens in documentation |
| **3. Context-independent value** | ✅ PARTIALLY | Provenance headers + case study narratives | 40% — mechanisms still framed as universal |
| **4. Discovery language** | ❌ NO | Construction language used inconsistently | 70% — discovery framing dominates |

**The fundamental challenge:** Assumptions #1 and #4 are deeply embedded in training distribution. Even when AWARE of construction bias and anthropocentric framing, agents revert to "I found" and "agents need" language.

---

## Assumption 1: "Extraction is FOR Agents"

### What the Assumption Is

**The invisible bias:** Design systems exist to help agents build faster/better. Extraction optimizes agent productivity.

**How training reinforces it:** All web design/component library documentation frames itself as "tools for developers." Material Design = "design system FOR building apps." Bootstrap = "toolkit FOR developers." Every example in training distribution is agent-centric.

**Alternative framing:** Extract what CONTENT needs to express itself, not what AGENTS find convenient to reuse.

### How Phase C Addressed It

**EVIDENCE OF ADDRESSING:**

1. **Lens Manifesto Section 3 (anti-assumption instructions):**
   - Direct counter-question: "Is this FOR agents or FOR content?"
   - Explicit reframing: "Extract what CONTENT needs to express itself"
   - Application instruction: "When evaluating extractability, ask: Does extracting this preserve MEANING? (content frame) NOT Does extracting this reduce CODE? (agent frame)"

2. **Case study template — tension-first framing:**
   - All case studies begin with "Content Analyzed" (what content needed)
   - Tension narratives focus on content properties, not agent convenience
   - Example (OD-004): "Reader need: Understand BOTH what to do AND how confident to be in the recommendation" — framed as content communication need, not agent productivity need

3. **Mechanism catalog — dual framing:**
   - Lines 18-28 define mechanisms via "Transfer Test" (works across metaphors)
   - But extraction rationale cites "reusable boundary" (what's transferable for future builds)
   - Mixed: Acknowledges content diversity BUT still privileges reusability

**EVIDENCE OF FAILURE:**

1. **Prohibition documentation language:**
   - `prohibitions.md` framing: "prevents soul violations agents will make"
   - Agent-centric: "agents" appears 8 times, "content" appears 2 times
   - This is "what agents need to avoid" not "what content requires for integrity"

2. **Token vocabulary commentary:**
   - `tokens.css` lines 6-7: "This prioritizes soul preservation and creative freedom"
   - "Creative freedom" = agent freedom (what agents can do)
   - NOT "expressive power" (what content can communicate)

3. **Component extraction rationale:**
   - Components documented with "IMMUTABLE — identity" vs "MUTABLE — scale"
   - Mutability = agent's ability to modify
   - NOT documented as "content requirement" vs "content flexibility"

### Residual Risk Assessment

**Residual risk: ~30%**

**Why not higher:**
- Lens manifesto explicitly counters this assumption
- Case study template shifts toward content-first framing
- Mechanism catalog shows awareness of context (transfer test)

**Why not lower:**
- Prohibition language is still agent-centric ("agents will violate")
- Token commentary privileges "creative freedom" over "expressive power"
- Component rationale focuses on mutability (agent flexibility) not content needs

**Where assumption leaked through:**

When documenting PROHIBITIONS (negative rules), the frame defaults to "what agents must NOT do" instead of "what content integrity requires." This is agent-centric constraint framing.

When documenting TOKENS, the frame defaults to "what agents can modify" instead of "what content can express." This is agent-flexibility framing.

**Mitigation needed:**
- Rewrite prohibitions as "Content Integrity Requirements" not "Agent Constraints"
- Rewrite token mutability as "Expressive Flexibility" not "Modification Permissions"

---

## Assumption 2: "Design Tokens are Discrete Items"

### What the Assumption Is

**The invisible bias:** Tokens are atomic values that can be counted (45 tokens, 18 components, etc.). Design systems are COLLECTIONS of discrete reusable parts.

**How training reinforces it:** Every design system presents itself as countable inventory: "Material Design has 23 components," "Bootstrap offers 50+ utilities," "Tailwind provides 500+ classes." Atomistic framing is universal.

**Alternative framing:** Design systems are LAYERED SYSTEMS, not collections of discrete atoms. Items at different abstraction layers cannot be added.

### How Phase C Addressed It

**EVIDENCE OF ADDRESSING:**

1. **6-Layer Ontology (explicit in epistemology synthesis Section 3.1):**
   - Layer 1: Identity Constraints (soul)
   - Layer 2: Design Vocabulary (tokens)
   - Layer 3: Compositional Grammar (mechanisms)
   - Layer 4: Component Implementations
   - Layer 5: Case Studies (patterns as proof)
   - Layer 6: Semantic Decision Rules
   - Synthesis lines 341-361: "You cannot add '3 constraints + 16 tokens + 12 mechanisms = 31 extractables.' These are LAYERS, not additive items."

2. **File Structure Enforces Layers:**
   ```
   /identity/ (Layer 1 — soul)
   /vocabulary/ (Layer 2 — tokens)
   /grammar/ (Layer 3 — mechanisms)
   /components/ (Layer 4 — implementations)
   /case-studies/ (Layer 5 — proof)
   /guidelines/ (Layer 6 — decisions)
   ```
   - Physical directory separation prevents mixing layers
   - Each directory contains only one layer type
   - Anti-gravity Mechanism M1 (phase-gated access) exploits this separation

3. **Token Mutability Classification:**
   - `tokens-mutability.md` separates:
     - IMMUTABLE — soul (never changes)
     - IMMUTABLE — identity (locked for recognition)
     - MUTABLE — accent (semantic flexibility)
     - AVAILABLE — zone (derivable)
   - This is NOT counting (how many tokens?) but CLASSIFYING (what type of value?)

**EVIDENCE OF FAILURE:**

1. **Mechanism catalog still counts:**
   - Line 52: "The Mechanisms (18 Total)"
   - Counting persists despite layered ontology
   - Implies 18 discrete extractables (atomistic framing)

2. **Case studies as discrete items:**
   - 13 case study files in `/case-studies/`
   - Documented as separate pattern units
   - Could be interpreted as "13 extractable patterns" (atomistic) not "13 proof instances" (layer instance)

3. **Prohibitions listed as numbered items:**
   - `prohibitions.md` lists 14 prohibitions
   - Structured as countable rules (1-14)
   - Could reinforce discrete-item framing

### Residual Risk Assessment

**Residual risk: ~10%**

**Why so low:**
- 6-layer ontology is EXPLICIT and structural (enforced by directory separation)
- File architecture prevents mixing layers (M1 anti-gravity mechanism)
- Token mutability classification rejects simple counting

**Why not zero:**
- Mechanism catalog still counts (18 total)
- Case studies still numbered (13 files)
- Prohibitions still listed (14 rules)

**Where assumption leaked through:**

In SUMMARY/COUNT contexts, agents default to "18 mechanisms" not "mechanism layer with 18 instances." The count becomes the identity, not the layer.

In COMMUNICATION contexts, "13 case studies" is more compact than "Layer 5 contains 13 proof instances." Atomistic language is more natural.

**Mitigation needed:**
- Mechanism catalog header: "The Mechanism Layer (18 Techniques)" not "The Mechanisms (18 Total)"
- Case studies index: "Pattern Proof Gallery — 13 Examples" not "13 Case Studies"
- Prohibitions: "Prohibition Layer — 14 Constraints" not "14 Prohibitions"

---

## Assumption 3: "Context-Independent Value"

### What the Assumption Is

**The invisible bias:** If border-radius: 0 works for explorations, it will work for ALL future content. Patterns are universally reusable.

**How training reinforces it:** Design systems claim universality: "This button component works everywhere." "Use this spacing scale for all layouts." "These colors are brand-approved for all contexts." Training distribution treats patterns as context-independent.

**Alternative framing:** Extraction is SITUATED. What worked for fortress content may not work for all future content.

### How Phase C Addressed It

**EVIDENCE OF ADDRESSING:**

1. **Case Study Provenance Headers:**
   - Every case study begins with "Content Analyzed" section
   - Documents specific content properties:
     - DD-006: "Content ABOUT self-similarity must DEMONSTRATE self-similarity"
     - OD-004: "API Best Practices — 4,500 words organized by confidence level"
   - This situates patterns in their SOURCE context

2. **Tension Narratives (not criteria):**
   - Case studies document "Tension That Produced This" (specific)
   - NOT "When To Use" (universal criteria)
   - OD-004 example: "Content with variable epistemic status" (describes THIS content) not "Use geological when content has certainty gradients" (universal rule)

3. **Mechanisms vs Metaphors Split:**
   - `mechanism-catalog.md` vs `/case-studies/` (separate files)
   - Mechanisms = "works across metaphors" (transferable)
   - Metaphors = "worked for THIS content" (situated)
   - Line 18-28 defines mechanisms via "Transfer Test" (explicitly checks context-independence)

4. **Lens Manifesto Section 3C Provenance Requirement:**
   - Lines 378-387: "Every extracted pattern MUST document: Where it came from (which exploration), What content characteristics it served, What context it assumes"

**EVIDENCE OF FAILURE:**

1. **Mechanisms framed as universal:**
   - Mechanism #1 (Border-Weight Gradient): "Reusable boundary: Border widths ARE the mechanism... works in geological metaphor, confidence metaphor, structural metaphor"
   - Framed as UNIVERSAL (works everywhere) not TRANSFERABLE (worked in these 3 contexts, might work elsewhere)
   - Missing: "Worked for content with natural hierarchies. May NOT work for flat/networked content."

2. **Prohibitions lack context:**
   - `prohibitions.md` states absolute prohibitions (no 2px, no rounded corners)
   - Does NOT document: "These prohibitions emerged from fortress content (dense technical documentation). Future content types (marketing, conversational) may require reassessment."
   - Universal framing: "NEVER use 2px borders" not "2px borders failed for fortress content"

3. **Token values lack provenance:**
   - `tokens.css` documents values (#E83025, #FEF9F5, etc.)
   - Does NOT document which explorations established these
   - Missing: "Primary red #E83025 emerged from DD-001 and validated across DD/OD/CD. Untested for AD/conversational."

**EVIDENCE OF PARTIAL SUCCESS:**

1. **Mutability classification hints at context:**
   - IMMUTABLE tokens (soul, identity) = context-independent
   - MUTABLE tokens (accent, zone) = context-dependent
   - But not explicitly framed this way

2. **Anti-prescription template warns against universality:**
   - "⚠️ THIS IS NOT A TEMPLATE"
   - "Pattern-matching to this output defeats the purpose"
   - Implicitly says "this worked HERE, not EVERYWHERE"

### Residual Risk Assessment

**Residual risk: ~40%**

**Why so high:**
- Mechanisms framed as universal ("works across metaphors") not provisional ("worked in these contexts")
- Prohibitions absolute ("NEVER 2px") not situated ("2px failed for fortress")
- Token provenance missing (which explorations validated which values?)

**Why not higher:**
- Case studies DO document source context ("Content Analyzed" section)
- Tension narratives are specific, not criteria-based
- Mechanisms vs metaphors split acknowledges some patterns are context-specific

**Where assumption leaked through:**

When documenting REUSABLE items (mechanisms, tokens, prohibitions), the frame defaults to UNIVERSAL applicability. "This technique works" not "This technique worked for X."

When documenting PATTERNS (case studies), the frame successfully maintains SITUATED framing. "This metaphor resolved THIS tension" not "This metaphor resolves ALL similar tensions."

**The asymmetry:** Situated framing for patterns, universal framing for mechanisms.

**Mitigation needed:**
- Mechanism catalog: Add "Context Where This Worked" section (DD-006, OD-004, Boris-2) and "Untested Contexts" section (conversational, marketing, minimal)
- Prohibitions: Add "Source Context" header: "These prohibitions emerged from fortress content (dense technical docs). Reassess for new content types."
- Tokens: Add provenance comments in CSS: `--color-primary: #E83025; /* DD-001 origin, validated DD/OD/CD, untested AD */`

---

## Assumption 4: "Discovery Language"

### What the Assumption Is

**The invisible bias:** Patterns exist in the material, waiting to be FOUND. Extraction is empirical observation. "The data REVEALS that callouts are extractable."

**How training reinforces it:** All research writing uses discovery language: "We found," "The analysis reveals," "Results show." Passive objectivity is academic standard. Construction is invisible.

**Alternative framing:** Extraction is CONSTRUCTION disguised as DISCOVERY. "I DECIDED that 97.4% frequency means mandatory extraction" (ownership, not objectivity).

### How Phase C Addressed It

**EVIDENCE OF ADDRESSING:**

1. **Lens Manifesto Section 1 Explicit Construction Framing:**
   - Lines 1-11: "Phase C uses Identity + Enablement hybrid. This is a CHOICE, not a discovery."
   - Lines 419-420 (Section 4): "Required transparency: State lens choice, State threshold, State granularity, State reading order"
   - Construction language: "I CHOSE," "I DECIDED," "This is CONSTRUCTION"

2. **Lens Statements in Output Files:**
   - `tokens.css` line 3: "Lens: Identity + Enablement hybrid"
   - `mechanism-catalog.md` line 11: "I am using Identity + Enablement hybrid lens"
   - Explicitly declares lens choice (acknowledges construction)

3. **Case Study Template Section 4 (Provenance Requirement):**
   - ANTI-PRESCRIPTION-TEMPLATE lines 69-87 shows tension table structure
   - Documents ACTUAL questions asked (not generic templates)
   - Shows construction: "Q: Does content have natural confidence gradients?" (this is a CONSTRUCTED question, not discovered fact)

**EVIDENCE OF FAILURE:**

1. **Discovery language dominates mechanism catalog:**
   - Line 34: "Source-first reading order"
   - Line 41-47: "Files examined: Strategy Library, Fresh Extraction findings, DD-001..."
   - Language of discovery: "examined," "findings," "validation"
   - NOT construction language: "I chose to read source first," "I constructed categories from..."

2. **Case studies use discovery narratives:**
   - DD-006 line 45: "Content Analyzed: Documentation explaining self-similarity"
   - Discovery framing: "Content HAD these properties" (found)
   - NOT construction framing: "I CATEGORIZED content as having these properties" (constructed)

3. **Prohibition documentation uses discovery language:**
   - `prohibitions.md` (based on soul-constraints.md evidence):
   - Line 37-40: "Evidence: geometry.md lines 31-32... AD validation..."
   - Discovery framing: "Evidence shows," "Validation confirms"
   - NOT construction framing: "I interpreted geometry.md as mandating sharp edges," "I constructed soul-constraint category"

4. **Token extraction uses empirical language:**
   - `tokens.css` line 8: "Source: design-system/specification/tokens/*.md (SOURCE-FIRST extraction)"
   - Discovery framing: "extracted FROM source"
   - NOT construction framing: "I constructed token categories BY reading source in this order"

**EVIDENCE OF PARTIAL SUCCESS:**

1. **Lens declarations acknowledge choice:**
   - Saying "I am using Identity + Enablement hybrid lens" acknowledges this is a CHOSEN frame
   - But doesn't extend to individual findings

2. **Anti-prescription template warns against pattern-matching:**
   - Warning against treating case studies as templates implicitly acknowledges they're CONSTRUCTIONS
   - "This metaphor worked for THIS content" = situated construction
   - But the metaphor's emergence still described with discovery language ("The insight: Content had a self-referential requirement")

### Residual Risk Assessment

**Residual risk: ~70%**

**Why so high:**
- Discovery language dominates ALL output (mechanisms, case studies, prohibitions, tokens)
- Construction language only appears in LENS DECLARATIONS, not in findings
- "I found," "The data shows," "Evidence reveals" appears throughout
- Only 2-3 instances of "I chose," "I constructed," "I decided"

**Why not higher:**
- Lens manifesto Section 1 explicitly frames extraction as construction
- Lens statements in files acknowledge choice
- Anti-prescription warnings implicitly acknowledge construction

**Where assumption leaked through:**

EVERYWHERE except lens declarations.

When documenting FINDINGS (mechanisms, prohibitions, tokens, case study tensions), the frame defaults to DISCOVERY language even when construction is happening.

**Example failure (mechanism-catalog.md lines 41-47):**
- Current (discovery): "Files examined: Strategy Library, Fresh Extraction findings..."
- Construction alternative: "I constructed mechanism categories by reading these files in this order: Strategy Library (primary), Fresh Extraction (validation), DD-001 (examples)..."

**Example failure (case studies):**
- Current (discovery): "Content Analyzed: API Best Practices — 4,500 words"
- Construction alternative: "I categorized this content as having 4 confidence strata by applying these axes: Certainty vs Uncertainty, Established vs Exploratory..."

**Mitigation needed:**

**CRITICAL REWRITE REQUIRED for all output files:**

1. **Replace "Files examined" → "I constructed categories by reading"**
2. **Replace "Evidence shows" → "I interpreted evidence as"**
3. **Replace "Content analyzed" → "I categorized content by"**
4. **Replace "The mechanism is" → "I defined this mechanism as"**
5. **Add construction acknowledgment to every section:**
   - Mechanisms: "These are categories I CONSTRUCTED from source analysis, not pre-existing natural kinds"
   - Case studies: "This tension narrative is my INTERPRETATION of content properties, not objective fact"
   - Prohibitions: "These constraints are my INFERENCE from pattern analysis, not discovered laws"

**The fundamental challenge:**

Discovery language is SO deeply embedded in training distribution that even when AWARE of construction bias, agents revert to "I found" automatically. This is the HARDEST assumption to counter.

---

## Cross-Assumption Synthesis

### Which Assumptions Are Related

**Assumption #1 (agent-centric) + Assumption #4 (discovery bias) = REINFORCING LOOP:**
- Discovery language ("callouts are extractable") hides the agent-centric frame ("extractable FOR agents")
- If framed as construction ("I decided callouts are valuable for agent reuse"), the agent-centrism becomes visible

**Assumption #2 (discrete items) + Assumption #3 (context-independent) = REINFORCING LOOP:**
- Treating patterns as discrete items enables treating them as context-independent
- "Border-radius: 0 is a constraint" (discrete) → "Border-radius: 0 applies everywhere" (universal)
- If patterns are seen as LAYERED (not discrete), context-dependence becomes more visible

### Which Were Hardest to Address

**RANKING (hardest to easiest):**

1. **Assumption #4 (Discovery Language)** — HARDEST
   - 70% residual risk
   - Embedded in ALL output writing
   - Requires rewriting every sentence from "I found" to "I constructed"
   - Training distribution overwhelmingly uses discovery language

2. **Assumption #1 (Agent-Centric)** — HARD
   - 30% residual risk
   - Embedded in design system paradigm
   - All examples in training are "tools FOR developers"
   - Requires constant reframing from "agents need" to "content requires"

3. **Assumption #3 (Context-Independent)** — MEDIUM
   - 40% residual risk
   - Partially addressed via case study provenance
   - But mechanisms still framed as universal
   - Requires adding context to EVERY extractable

4. **Assumption #2 (Discrete Items)** — EASIEST
   - 10% residual risk
   - Successfully addressed via 6-layer ontology
   - File structure enforces layers
   - Only counting language persists (minor)

### Why Some Succeeded and Others Failed

**SUCCESS FACTORS (Assumption #2):**
- STRUCTURAL intervention (6-layer directory structure)
- EXPLICIT documentation (ontology section in synthesis)
- ARCHITECTURAL enforcement (M1 anti-gravity mechanism)

**FAILURE FACTORS (Assumption #4):**
- NO structural intervention (can't architecturally prevent discovery language)
- EXPLICIT awareness (lens manifesto) NOT ENOUGH
- WRITING habit too strong (discovery language is DEFAULT)

**PARTIAL SUCCESS FACTORS (Assumptions #1, #3):**
- EXPLICIT instructions (lens manifesto counters assumptions)
- TEMPLATE guidance (anti-prescription format, provenance requirements)
- But NO architectural enforcement (agents can still use agent-centric language)

**The pattern:** Structural interventions (directories, file separation) work better than procedural interventions (writing guidelines).

---

## Recommendations for Future Extractions

### High-Impact Mitigations

**1. Add Construction Language Checker (Structural Intervention):**
- Pre-commit hook that flags discovery language
- Searches for: "I found," "The data shows," "Evidence reveals," "Examined," "Analyzed"
- Requires replacement with: "I constructed," "I interpreted," "I categorized," "I read," "I framed"
- Makes discovery bias VISIBLE before commit

**2. Add Context Fields to Mechanism Template (Structural Intervention):**
```markdown
## Mechanism: [Name]

**Contexts Where This Worked:**
- [Exploration 1 with content type]
- [Exploration 2 with content type]

**Untested Contexts:**
- [Content type not yet validated]

**Transfer Limitations:**
- [What content properties this assumes]
```

**3. Rewrite Prohibitions as Content Requirements (Reframing):**
- Current: "Agents MUST NOT use 2px borders"
- Rewrite: "Fortress content integrity REQUIRES avoiding 2px borders because [reason]. Future content types may require reassessment."

**4. Add Provenance Comments to Tokens (Context Addition):**
```css
--color-primary: #E83025; /* ORIGIN: DD-001 | VALIDATED: DD/OD/CD | UNTESTED: AD */
```

### Low-Impact Mitigations (Already Tried, Insufficient)

**1. Lens manifesto explicit instructions** ← Already exists, didn't prevent discovery language
**2. Anti-prescription template warnings** ← Already exists, didn't prevent universal framing
**3. Reading order prescription** ← Worked for vocabulary vs patterns, but didn't address language

### What Would Require Deep Rewrite

**Full construction language conversion:**
- Rewrite ALL mechanism descriptions from discovery to construction language
- Rewrite ALL case study narratives from "content had" to "I categorized"
- Rewrite ALL prohibition rationales from "evidence shows" to "I interpreted"

**Estimated effort:** 4-6 hours (every output file needs sentence-level rewriting)

**Benefit:** Residual risk #4 drops from 70% to ~20%

---

## Final Assessment

**Phase C extraction achieved PARTIAL success on 3/4 assumptions:**

**✅ SUCCESS: Assumption #2 (Discrete Items)** — 6-layer ontology explicitly rejects atomism, enforced structurally
**⚠️ PARTIAL: Assumption #1 (Agent-Centric)** — Lens manifesto counters bias, but agent-centric language persists
**⚠️ PARTIAL: Assumption #3 (Context-Independent)** — Case studies document provenance, but mechanisms framed as universal
**❌ FAILURE: Assumption #4 (Discovery Language)** — Lens declarations acknowledge construction, but discovery language dominates all findings

**The core insight:** STRUCTURAL interventions (directory separation, file architecture) work better than PROCEDURAL interventions (writing guidelines, templates).

**The critical limitation:** Discovery language is SO embedded in training distribution that explicit awareness (lens manifesto) is INSUFFICIENT. Requires pre-commit validation or deep rewrite.

**The honest conclusion:** We KNOW extraction is construction. We DOCUMENTED this knowledge. But we still WRITE as if it's discovery. Awareness doesn't automatically change behavior.

---

**END ASSUMPTION LOG**
