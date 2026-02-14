# Skill Edit Manifest — Phase C Enrichment Additions

**Purpose:** Exact edit instructions for enricher agents to apply skill enrichments
**Sources:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/phase-c-output/skill-enrichments/tension-composition-additions.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/phase-c-output/skill-enrichments/perceptual-auditing-additions.md`

**Usage:** Enricher agents read ONLY this manifest — all insertion points and content are self-contained.

---

## TENSION-COMPOSITION SKILL EDITS (5 additions)

**Target file:** `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md`

---

### TC-EDIT-1: Anti-Assumption Header (TOP OF FILE)

**INSERT LOCATION:** After line 4 (after the `---` that closes YAML frontmatter), BEFORE line 5 (before `# Tension-Composition Pipeline`)

**EXACT BEFORE CONTEXT (lines 3-5):**
```markdown
---

# Tension-Composition Pipeline
```

**EXACT AFTER CONTEXT (lines 5-7):**
```markdown
# Tension-Composition Pipeline

Transforms raw content into compositional HTML layouts by deriving tension between what the content NEEDS and what the design system DEMANDS, then collapsing that tension through metaphor into concrete visual mechanisms.
```

**CONTENT TO INSERT:**
```markdown
---

⚠️ **CRITICAL PRINCIPLE — READ THIS FIRST**

**You are CONSTRUCTING a composition, not DISCOVERING one.**

Your lens shapes what you see. The categories you bring (warmth, hierarchy, progression) determine what patterns emerge. The metaphor you choose is a CREATIVE ACT, not an inevitable conclusion.

**What this means:**
- Multiple valid metaphors exist for the SAME content
- Your derivation is ONE PATH, not THE PATH
- The tension you identify is CONSTRUCTED through your questioning
- The metaphor you select is CHOSEN, not found

**The opposite of this (discovery bias):**
- "The content IS geological" — NO, you are READING it as geological
- "This metaphor is THE answer" — NO, this metaphor is A bridge you built
- "The tension demands this resolution" — NO, you chose to resolve it this way

**Success = conscious construction. Failure = unconscious pattern-matching.**

---
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

### TC-EDIT-2: Phase 0D — Library Prohibition (BEFORE PHASE 1)

**INSERT LOCATION:** After line 45 (after `---` following "Flag sections with incompatible structural needs"), BEFORE line 46 (before `---` and `## Phase 1: Multi-Axis Questioning`)

**EXACT BEFORE CONTEXT (lines 43-46):**
```markdown
3. Flag sections with incompatible structural needs (these may need section-level metaphor variation in Phase 4)

---

## Phase 1: Multi-Axis Questioning
```

**EXACT AFTER CONTEXT (lines 46-48):**
```markdown
## Phase 1: Multi-Axis Questioning

Read the input content deeply. For THIS SPECIFIC CONTENT, ask questions across multiple axes to derive what the reader needs.
```

**CONTENT TO INSERT:**
```markdown
---

### Step 0D: Library Access Prohibition (CRITICAL)

**YOU MUST NOT read the following during Phases 0-3:**

- `/active/design-system/case-studies/` (pattern library)
- `/active/design-system/library/` (if exists)
- Prior compositional explorations (DD-001 through AD-006)
- Tension-test layouts (boris/, gastown/, playbook/)

**Why this prohibition exists:**

Library patterns are VALIDATION tools, not GENERATION tools. Reading them before metaphor commitment = pattern-matching, not tension-deriving.

**When library access is permitted:**

- Phase 4: Read `/techniques/mechanisms.md` ONLY (reusable techniques)
- Phase 5: Read `/case-studies/` (2-3 MOST similar, for divergence verification)

**Violation of this rule invalidates the entire derivation.**

You will be building from content tension and domain knowledge, NOT from library templates. The library exists to verify your metaphor is novel, not to provide your metaphor.

---
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

### TC-EDIT-3: Phase 3.5 — Metaphor Commitment Gate (NEW PHASE BETWEEN 3 AND 4)

**INSERT LOCATION:** After line 597 (after Cultural Consideration bullet "For global audiences..."), BEFORE line 598 (before `---` and `## Phase 4: Compositional Layout Generation`)

**EXACT BEFORE CONTEXT (lines 595-598):**
```markdown
- For global audiences: "Would this metaphor make sense to someone who has never encountered [cultural practice]?"

---

## Phase 4: Compositional Layout Generation
```

**EXACT AFTER CONTEXT (lines 598-600):**
```markdown
## Phase 4: Compositional Layout Generation

Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.
```

**CONTENT TO INSERT:**
```markdown
---

## Phase 3.5: Metaphor Commitment (LOCK-IN GATE)

**BEFORE proceeding to Phase 4, you MUST complete this gate.**

### Step 3.5A: State Your Committed Metaphor

**Your metaphor:** _______________________________________________

**Write it down. This is your LOCKED-IN metaphor. You DO NOT change it after consulting the library.**

### Step 3.5B: Document WHY This Metaphor

**How it resolves the tension (specific):**

[Explain: What property of THIS metaphor resolves THIS tension? Be concrete.]

**Why this metaphor vs alternatives (specific):**

[What alternatives did you consider? Why did you reject them? What makes this metaphor BETTER for THIS content?]

### Step 3.5C: Commitment Verification

**Answer these questions:**

1. **Did I derive this metaphor independently?** YES / NO
   - If NO: You read library patterns before commitment. RESTART Phase 1.

2. **Can I justify this metaphor without referencing library examples?** YES / NO
   - If NO: You are pattern-matching. Regenerate metaphor with explicit constraint (ban all library metaphors).

3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4

### Step 3.5D: Divergence Justification (If Convergence Detected)

**If your metaphor matches a library pattern title:**

You MUST provide STRONG evidence of independent convergence.

**Convergence justification table:**

| Question | Your Answer |
|----------|-------------|
| Did I complete Phase 1-2 WITHOUT reading library? | YES / NO |
| Did content analysis INDEPENDENTLY lead to this domain? | YES / NO |
| Can I trace derivation path (tension → search query → domain)? | YES / NO |
| Is the content tension IDENTICAL to the case study's tension? | YES / NO |
| Do I have different structural isomorphisms than the case study? | YES / NO |

**Passing criteria:** ALL answers must favor independent convergence.

**If justification fails:** Regenerate metaphor with explicit constraint: "My metaphor MUST NOT be [library pattern name]. What OTHER domain resolves [tension] while satisfying [constraints]?"

**Why this gate exists:**

The library contains proven metaphors. Seeing them BEFORE derivation creates gravitational pull toward pattern-matching. This gate ensures your metaphor is YOURS, not a library reproduction.

**Phase 3.5 is complete when:**
- ✅ Metaphor committed in writing
- ✅ Justification documented
- ✅ Divergence verified (or convergence justified)

**You are now LOCKED IN. Proceed to Phase 4.**

---
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

### TC-EDIT-4: Phase 4 Revision — Mechanism Extraction (REPLACE EXISTING PHASE 4.1)

**REPLACE LOCATION:** Lines 648-707 (entire section from `### Step 4.1 -- Extract Metaphor Physical Properties` through end of completeness checklist)

**EXACT BEFORE CONTEXT (lines 646-648):**
```markdown
**Rule C-5: Accent color must match semantic role.**
- `--color-primary` (#E83025) = structural emphasis, page-level accents
- `--accent-blue` = informational callouts
```

**SECTION TO REPLACE (lines 648-707):** The entire section starting with:
```markdown
### Step 4.1 -- Extract Metaphor Physical Properties (5-Category Taxonomy)

For any metaphor, systematically extract properties across ALL five categories:
```
...ending with:
```markdown
If ANY category produces zero properties, the metaphor may be insufficiently rich.
```

**EXACT AFTER CONTEXT (lines 708-710):**
```markdown
### Step 4.2 -- Translation Grammar (Lookup Table)

Each metaphor property maps to specific CSS through these system-legal expressions:
```

**REPLACEMENT CONTENT:**
```markdown
### Step 4.0 -- Mechanism Library Access (NOW PERMITTED)

**You may NOW consult:**

- `/active/design-system/techniques/mechanisms.md` (reusable techniques catalog)
- `/active/design-system/foundations/components.md` (base components)

**What to extract from mechanisms catalog:**

✅ **REUSABLE TECHNIQUES** (apply to ANY content):
- Border-weight gradient encoding
- 2-zone component DNA
- Spacing compression patterns
- Solid-offset depth technique
- Dense/sparse alternation

❌ **DO NOT extract from case studies:**
- Full layout architectures (metaphor-specific)
- Section structures (metaphor-driven)
- Metaphor vocabulary (geological, manuscript, etc.)

**Extraction protocol:**

1. **Scan mechanism catalog** — identify 3-5 techniques relevant to YOUR metaphor
2. **Extract technique, NOT implementation** — e.g., "border-weight encodes hierarchy" (technique) vs "4px/3px/1px for confidence levels" (implementation)
3. **Adapt to YOUR context** — Your metaphor + mechanism technique = new implementation

**Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.**

**You still MUST NOT read `/case-studies/` directory. Case study access = Phase 5 ONLY.**

---

### Step 4.1 -- Extract Metaphor Physical Properties (5-Category Taxonomy)

**For YOUR COMMITTED METAPHOR, systematically extract properties across ALL five categories:**

**A. Spatial Properties** -- Where things are, how they relate in space

| Property | CSS Mechanism |
|----------|--------------|
| Horizontal layers | `flex-direction: column` + distinct background zones |
| Vertical columns | `grid-template-columns` |
| Radial/hub-spoke | Central hub + surrounding spoke containers |
| Nested containment | Bordered parent with padded children |
| Adjacency | Gap values in grid/flex |

**B. Temporal Properties** -- Sequence, rhythm, progression

| Property | CSS Mechanism |
|----------|--------------|
| Sequence/ordering | DOM order + vertical flow |
| Simultaneity/parallel | Multi-column grid |
| Progression/gradient | Progressive spacing compression + darkening backgrounds |
| Oscillation/cycles | Alternating zone backgrounds |
| Climax/crescendo | Sections with decreasing padding, increasing density |

**C. Material Properties** -- Texture, weight, substance

| Property | CSS Mechanism |
|----------|--------------|
| Density/compression | `padding`, `line-height`, `font-size`, `gap` |
| Weight/heaviness | `border-width`, `font-weight`, background opacity |
| Transparency/opacity | Background color saturation/value shifts |
| Texture | Font family shifts (serif vs sans vs mono) |

**D. Behavioral Properties** -- Movement, transformation

| Property | CSS Mechanism |
|----------|--------------|
| Descent/drilling | Vertical stacking with increasing visual weight downward |
| Expansion/contraction | Responsive breakpoints, collapsing grids |
| Oscillation/breathing | Breathing zone components between sections |
| Flow direction | Reading direction + scan patterns (F-pattern, Z-pattern) |

**E. Relational Properties** -- How parts connect

| Property | CSS Mechanism |
|----------|--------------|
| Containment | Border around parent element |
| Hierarchy | Typography scale + border weight |
| Flow/connection | Transition components between zones |
| Isolation | Gap between siblings + no shared borders |
| Bridging | Transition elements connecting two domains |

**Completeness Checklist**: For YOUR metaphor, ask:
1. **Spatial**: What is the physical arrangement?
2. **Temporal**: What is the time dimension?
3. **Material**: What is the substance like?
4. **Behavioral**: What does it DO?
5. **Relational**: How do parts relate?

**If ANY category produces zero properties, YOUR metaphor may be insufficiently rich.**

**CRITICAL DISTINCTION:**
- **Mechanisms** (extractable) = border-weight gradient, compression technique, 2-zone DNA
- **Implementations** (metaphor-specific) = "4px bedrock border", "80px surface padding", "6 strata"

**You extract MECHANISMS. You apply them to YOUR metaphor. You DO NOT copy implementations.**
```

**MODIFICATIONS NEEDED:**
- Changed "For any metaphor" to "For YOUR COMMITTED METAPHOR" (line 2 of 4.1)
- Changed final "the metaphor" to "YOUR metaphor" (completeness checklist)
- Added new Phase 4.0 section BEFORE Phase 4.1
- Preserved entire 5-category taxonomy from original

---

### TC-EDIT-5: Phase 5 — Divergence Verification (NEW PHASE)

**INSERT LOCATION:** After line 999 (after Determinism section text), BEFORE line 1000 (before `### Stale Tension` heading)

**EXACT BEFORE CONTEXT (lines 997-1000):**
```markdown
### Determinism
The pipeline is deterministic in all phases EXCEPT the constrained associative search (Phase 3.4). Multiple valid metaphors may exist for the same content. This is by design -- the pipeline is a creative scaffold, not a compiler. If determinism is required, document the selected metaphor in a COMPOSITION BRIEF for future reference.

### Stale Tension (re-using a resolved tension)
```

**EXACT AFTER CONTEXT (lines 1000-1001):**
```markdown
### Stale Tension (re-using a resolved tension)
If a tension has been resolved in a previous exploration, force a DIFFERENT metaphor by adding constraints: "The geological metaphor is taken. What OTHER domain resolves warmth vs austerity?"
```

**CONTENT TO INSERT:**
```markdown
The pipeline is deterministic in all phases EXCEPT the constrained associative search (Phase 3.4). Multiple valid metaphors may exist for the same content. This is by design -- the pipeline is a creative scaffold, not a compiler. If determinism is required, document the selected metaphor in a COMPOSITION BRIEF for future reference.

---

## Phase 5: Divergence Verification (NOW ACCESS CASE STUDIES)

**After Phase 4 completion, you may NOW consult:**

- `/active/design-system/case-studies/` (pattern library)
- Read 2-3 MOST SIMILAR case studies to your committed metaphor

**Purpose of Phase 5:**

NOT to get implementation ideas (you already built in Phase 4).

TO verify your metaphor diverges from library patterns (or justify convergence).

### Step 5.1 -- Select Similar Case Studies

**Scan `/case-studies/_INDEX.md` (titles + tension summaries only).**

**Identify 2-3 case studies with SIMILAR tensions to yours:**
- Similar axis (FEEL, UNDERSTAND, BECOME)
- Similar tension type (warmth/austerity, complexity/clarity, etc.)

**Read THOSE case studies. DO NOT read all case studies.**

### Step 5.2 -- Divergence Comparison Table

**For each similar case study, complete this table:**

| Comparison Dimension | Your Metaphor | Case Study Metaphor | Divergence? |
|---------------------|---------------|---------------------|-------------|
| **Metaphor domain** | [yours] | [theirs] | DIFFERENT / SAME |
| **Structural isomorphisms** | [your mappings] | [their mappings] | DIFFERENT / SOME OVERLAP / SAME |
| **Section architecture** | [your structure] | [their structure] | DIFFERENT / SIMILAR / SAME |
| **Vocabulary** | [your labels] | [their labels] | DIFFERENT / SAME |
| **Mechanisms used** | [your techniques] | [their techniques] | DIFFERENT / OVERLAP / SAME |

### Step 5.3 -- Divergence Verdict

**For each case study comparison:**

**If divergence = DIFFERENT on 3+ dimensions:**
✅ **STRONG DIVERGENCE** — Your metaphor is novel. Proceed to Phase 6.

**If divergence = SAME/SIMILAR on 3+ dimensions:**
⚠️ **CONVERGENCE DETECTED** — Proceed to Step 5.4 (justification required)

### Step 5.4 -- Convergence Justification (If Needed)

**If your metaphor converged with a library pattern:**

**Answer these questions with STRONG evidence:**

1. **Did you complete Phases 1-3 WITHOUT reading this case study?** YES / NO
   - If NO: Violation of Phase 0D prohibition. Derivation is INVALID.

2. **Did content tension analysis INDEPENDENTLY lead to the same domain?** YES / NO
   - If NO: Pattern-matching occurred. Regenerate with constraint (ban this metaphor).

3. **Is the content tension IDENTICAL to the case study's tension?** YES / NO
   - If NO: Convergence is coincidental, not justified. Regenerate.
   - If YES: Proceed to question 4.

4. **Do you have DIFFERENT structural isomorphisms despite same domain?** YES / NO
   - If YES: Acceptable convergence (same domain, different execution).
   - If NO: Full replication. Regenerate with explicit constraint.

**Acceptable convergence example:**

- Case study: Geological metaphor for Boris content (warmth/austerity)
- Your work: Geological metaphor for DIFFERENT content with warmth/austerity
- Justification: Same tension + independent derivation + different isomorphisms = acceptable

**Unacceptable convergence example:**

- Case study: Geological metaphor for Boris content
- Your work: Geological metaphor for Boris content (same content)
- Justification: NONE — you are reproducing library output

**If justification FAILS:** Regenerate metaphor with explicit constraint: "BANNED metaphors: [list]. Derive NEW metaphor for same tension."

### Step 5.5 -- Extraction of Mechanisms (Final)

**After divergence verification, extract any NEW mechanisms your work discovered:**

**Mechanisms in library but NOT in your work:**
- [List — you didn't need these]

**Mechanisms in your work but NOT in library:**
- [List — you discovered these]

**If you discovered NEW mechanisms, document them for future library addition.**

**Phase 5 is complete when:**
- ✅ Divergence verified (or convergence justified)
- ✅ Novel mechanisms documented (if any)

**Proceed to Phase 6 (Output).**

---
```

**MODIFICATIONS NEEDED:** The first paragraph ("The pipeline is deterministic...") is included at the top to maintain context flow. This paragraph is REPLACED by the insertion, not duplicated.

---

## PERCEPTUAL-AUDITING SKILL EDITS (3 additions)

**Target file:** `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md`

---

### PA-EDIT-1: Meta-Audit Warning (TOP OF FILE)

**INSERT LOCATION:** After line 1 (after `# Perceptual Auditing — Skill Definition`), BEFORE line 2 (before `## The One Rule`)

**EXACT BEFORE CONTEXT (lines 1-2):**
```markdown
# Perceptual Auditing — Skill Definition

## The One Rule
```

**EXACT AFTER CONTEXT (lines 2-4):**
```markdown
## The One Rule

> **"React to what you see before you check what you know."**
```

**CONTENT TO INSERT:**
```markdown
# Perceptual Auditing — Skill Definition

---

⚠️ **CRITICAL WARNING — THE AUDIT OPTIMIZATION TRAP**

**This skill defines success criteria (48 PA questions + quantitative guardrails).**

**DO NOT:**
- Build pages TO PASS this audit
- Design compositions to maximize perceptual scores
- Optimize for auditability over content service
- Let guardrails GUIDE composition (they VERIFY, not DESIGN)

**DO:**
- Build pages to serve content
- Design compositions from tension derivation
- Use audit to VERIFY quality, not to DEFINE quality

**The trap:**

If you are making composition decisions to improve audit scores, you are inverting the process.

**Correct sequence:**
1. Derive metaphor from content tension (tension-composition skill)
2. Build layout expressing that metaphor
3. Audit verifies the layout meets perceptual minimums

**Incorrect sequence:**
1. Read perceptual-auditing guardrails
2. Design layout to satisfy guardrails
3. Claim tension-derived composition

**Why this matters:**

Audit-optimized compositions feel mechanical. Tension-derived compositions feel alive.

The guardrails are FLOORS (minimum acceptable quality), not TARGETS (what you aim for).

**If you are consulting this skill BEFORE building:** You are doing it wrong.

**If you are consulting this skill AFTER building:** You are doing it right.

---
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

### PA-EDIT-2: Metaphor-Awareness Section (BEFORE METAPHOR QUESTIONS)

**INSERT LOCATION:** After line 98 (after PA-20 row), BEFORE line 99 (before `**Metaphor and Ideology:**` heading)

**EXACT BEFORE CONTEXT (lines 96-99):**
```markdown
| **PA-19** | Is there any element that feels like it's from a different website? | Visual intruders |
| **PA-20** | Describe this page's personality in three words. Does it match intent? | Emotional misalignment |

**Metaphor and Ideology:**
```

**EXACT AFTER CONTEXT (lines 99-101):**
```markdown
**Metaphor and Ideology:**

| ID | Question | What It Catches |
```

**CONTENT TO INSERT:**
```markdown
| **PA-20** | Describe this page's personality in three words. Does it match intent? | Emotional misalignment |

---

### METAPHOR-AWARENESS PRINCIPLES (READ BEFORE METAPHOR QUESTIONS)

**Metaphors encode spatial biases as CSS values.**

When auditing tension-composition layouts (metaphor-driven designs), understand that visual decisions are NOT arbitrary — they serve the metaphor.

**Examples of metaphor-driven biases:**

| Metaphor | Spatial Bias | CSS Manifestation |
|----------|--------------|-------------------|
| **Geological depth** | Depth = vertical space | Large padding at bottom sections (bedrock has breathing room) |
| **Manuscript margin** | Ritual = asymmetric space | Wide left margin (marginalia tradition), tight right |
| **Industrial efficiency** | Efficiency = compression | Minimal padding, tight line-height (maximize density) |
| **Elevation ascent** | Height = lightness | Decreasing padding as you scroll up (summit is sparse) |
| **Security clearance** | Access = visual weight | Heavy borders on restricted sections (containment signals limited access) |

**The bias is NOT WRONG — it serves the metaphor.**

The metaphor SHAPES the experience. The guardrails PREVENT the metaphor from breaking the experience.

**What this means for auditing:**

**DO NOT flag a composition as failing because:**
- "This padding is unconventional" — Is it serving the metaphor? If yes, assess against FLOORS only.
- "This asymmetry feels unbalanced" — Is asymmetry part of the metaphor (manuscript margin)? If yes, it's intentional.
- "This density feels tight" — Is compression the metaphor (industrial efficiency)? If yes, check FLOOR (40% ratio, 32px minimum), not preference.

**DO flag a composition as failing if:**
- Metaphor bias VIOLATES guardrail floors (compression ratio <40%, padding <32px, container <940px)
- Metaphor bias BREAKS readability (CPL >80, line-height <1.5)
- Metaphor bias CRUSHES hierarchy (label-to-heading <16px)

**The principle:**

> **"The metaphor shapes experience; the guardrails prevent it from breaking experience."**

**Your job as auditor:**

1. **Identify the metaphor** — What spatial model is this layout using?
2. **Understand the bias** — What CSS decisions does this metaphor encourage?
3. **Verify floors** — Does the metaphor-driven implementation meet perceptual minimums?
4. **Separate preference from failure** — "I wouldn't design it this way" ≠ "This violates guardrails"

**Questions to ask when metaphor conflicts with your aesthetic preference:**

**PA-42 (metaphor-driven compromise):**
> "Is there any section where you understand WHY it looks this way (serving a metaphor) but it still looks WRONG? Name the trade-off between concept and comfort."

**PA-43 (metaphor perceptual cost):**
> "Could the same metaphor idea be communicated with less visual cost? Is there a lighter way to express the same concept?"

**PA-44 (implicit vs explicit metaphor):**
> "If you removed all labels, headings, and text annotations, could you still sense the metaphor from the visual structure alone?"

**These questions distinguish:**
- **Acceptable metaphor bias** (compression serves geological depth, meets 40% floor)
- **Unacceptable metaphor cost** (compression violates floor, breaks readability)

**DO NOT optimize compositions for audit score.**

**DO verify compositions meet perceptual floors regardless of metaphor.**

---

**Metaphor and Ideology:**
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

### PA-EDIT-3: Guardrails Priority Clarification (IN QUANTITATIVE GUARDRAILS SECTION)

**INSERT LOCATION:** After line 218 (after verification checklist final item), BEFORE line 219 (before `---` and `## 4 MODES`)

**EXACT BEFORE CONTEXT (lines 216-219):**
```markdown
- [ ] Padding compression ratio above 40%
- [ ] Horizontal padding minimum 32px (desktop), 16px (mobile)
- [ ] Content-to-viewport ratio 65-80% at 1440px

---

## 4 MODES
```

**EXACT AFTER CONTEXT (lines 219-221):**
```markdown
---

## 4 MODES

### Mode 1: Embedded (90 seconds, no team)
```

**CONTENT TO INSERT:**
```markdown
- [ ] Content-to-viewport ratio 65-80% at 1440px

---

### Priority Order When Metaphor Conflicts with Guardrails

**If a metaphor (e.g., "narrow alley", "compressed timeline", "cylindrical core sample") forces violations of guardrails:**

**THE METAPHOR'S CSS EXPRESSION MUST BE MODIFIED, NOT THE FLOORS.**

**Priority hierarchy (NEVER compromise these):**

1. **Readability floors** (line-height 1.5, CPL max 80, container min 940px at 1440px) — ACCESSIBILITY + USABILITY
2. **Breathing zones** (section spacing min 48px, label-to-heading min 16px) — HIERARCHY + FLOW
3. **Content width** (min 65% viewport at 1440px, 940px minimum) — PROPORTION + PRESENCE
4. **Compression ratio** (deepest ≥ 40% of shallowest) — PERCEPTUAL CONSISTENCY
5. **Metaphor fidelity** — Adjust metaphor's spatial expression to meet 1-4
6. **Aesthetic preference** — Last priority, subjective

**Examples of correct modifications:**

**Geological Core Sample metaphor:**
- **Conceptual bias:** "Cylindrical shape → narrow container (600px)"
- **Guardrail conflict:** Violates 940px minimum container width
- **Correct fix:** Use layered backgrounds + darkening depth WITHOUT physical narrowness. Keep container at 960px minimum. Express "core sample" through COLOR GRADIENT, not width compression.
- **Incorrect fix:** "The metaphor requires 600px, so we'll accept the violation."

**Manuscript Codex metaphor:**
- **Conceptual bias:** "Wide margins for marginalia → 40% horizontal whitespace"
- **Guardrail conflict:** Violates 65% content-to-viewport minimum
- **Correct fix:** Use ASYMMETRIC padding (larger left, smaller right) to suggest marginalia WITHOUT wasting 40% space. Keep content at 70% viewport minimum.
- **Incorrect fix:** "Authentic manuscripts have wide margins, so we'll use 50% viewport."

**Construction Site metaphor:**
- **Conceptual bias:** "Industrial = dark zones for structural sections"
- **Guardrail conflict:** Risks readability if too much dark (inverted text fatigue)
- **Correct fix:** Limit dark zones to headers + accent sections. Keep body content zones light even when "structural" metaphorically. Use border-weight for structure, not background darkness.
- **Incorrect fix:** "The metaphor demands dark, so we'll make 60% of content dark background."

**The principle:**

> **A metaphor can use layered backgrounds, darkening depth, border-weight variation, and spacing patterns WITHOUT breaking perceptual floors. If the metaphor's CONCEPT demands values below floors, the IMPLEMENTATION has failed — not the metaphor.**

**What auditors verify:**

1. ✅ Does the layout FEEL like the metaphor? (metaphor success)
2. ✅ Does the layout MEET all guardrail floors? (perceptual success)
3. ⚠️ If conflict: Is there a LIGHTER way to express the metaphor that meets floors?

**If both 1 and 2 pass:** Layout succeeds.

**If 1 passes but 2 fails:** Implementation failure (metaphor concept is good, CSS expression violates floors).

**If 1 fails but 2 passes:** Metaphor failure (perceptually acceptable but metaphor didn't manifest).

**If both fail:** Complete failure.

**Guardrails are NON-NEGOTIABLE minimums. Metaphors operate in the space ABOVE the floors, never below.**

---
```

**MODIFICATIONS NEEDED:** None — insert exactly as shown.

---

## SUMMARY

**Total edits:** 8 (5 tension-composition + 3 perceptual-auditing)

**Tension-composition additions:** ~470 lines total
- TC-EDIT-1: Anti-assumption header (26 lines)
- TC-EDIT-2: Phase 0D library prohibition (26 lines)
- TC-EDIT-3: Phase 3.5 commitment gate (66 lines)
- TC-EDIT-4: Phase 4.0+4.1 mechanism extraction (97 lines, replacing 60 lines)
- TC-EDIT-5: Phase 5 divergence verification (92 lines)

**Perceptual-auditing additions:** ~300 lines total
- PA-EDIT-1: Meta-audit warning (47 lines)
- PA-EDIT-2: Metaphor-awareness section (87 lines)
- PA-EDIT-3: Guardrails priority clarification (73 lines)

**All insertion points use EXACT line-number context from current skill files.**

**No enricher needs to read the original additions files — all content is self-contained in this manifest.**

---

**END MANIFEST**
