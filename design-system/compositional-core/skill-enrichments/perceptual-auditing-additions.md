# Perceptual-Auditing Skill Enrichments — Anti-Gravity Additions

**Purpose:** Draft additions for `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md`
**Source Research:** rigidity-mechanics/08-synthesis.md + extraction-epistemology/09-synthesis.md
**Principle:** Binary rules only. Metaphor-awareness. Exact insertion points specified.

---

## ADDITION 1: Meta-Audit Warning (TOP OF FILE)

**INSERT LOCATION:** After line 1 (after `# Perceptual Auditing — Skill Definition`), BEFORE line 2 (before `## The One Rule`)

**EXACT CONTEXT:**
```markdown
# Perceptual Auditing — Skill Definition

## The One Rule
```

**INSERTION:**

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

## The One Rule
```

**RATIONALE:** Prevents audit-optimization trap. Positions perceptual-auditing as VERIFICATION not GENERATION tool. Explicit sequencing (build first, audit second).

---

## ADDITION 2: Metaphor-Awareness Section (BEFORE QUESTION CHECKLIST)

**INSERT LOCATION:** After line 98 (after PA-20 in Tier 2 Standard section), BEFORE line 99 (before "**Metaphor and Ideology:**" heading)

**EXACT CONTEXT:**
```markdown
| **PA-20** | Describe this page's personality in three words. Does it match intent? | Emotional misalignment |

**Metaphor and Ideology:**
```

**INSERTION:**

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

**RATIONALE:** Provides metaphor-awareness framework BEFORE metaphor questions (PA-42, PA-43, PA-44). Prevents auditors from flagging intentional metaphor-driven decisions as failures. Explicit principle: metaphor shapes, guardrails prevent breaking.

---

## ADDITION 3: Guardrails Priority Clarification (IN QUANTITATIVE GUARDRAILS SECTION)

**INSERT LOCATION:** After line 218 (after Verification Checklist), BEFORE line 219 (before `---` and next section)

**EXACT CONTEXT:**
```markdown
- [ ] Content-to-viewport ratio 65-80% at 1440px

---

## 4 MODES
```

**INSERTION:**

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

## 4 MODES
```

**RATIONALE:** Explicit priority order when metaphor conflicts with guardrails. Prevents "the metaphor requires it" justifications for violations. Provides concrete examples of correct modifications vs incorrect compromises.

---

## SUMMARY OF ADDITIONS

**3 additions, ~300 lines total:**

1. **Meta-Audit Warning** (top of file) — Prevents audit-optimization trap, positions skill as VERIFICATION not DESIGN
2. **Metaphor-Awareness Section** (before metaphor questions) — Explains metaphor-driven spatial biases, prevents flagging intentional decisions as failures
3. **Guardrails Priority Clarification** (in quantitative section) — Explicit hierarchy when metaphor conflicts with floors, concrete modification examples

**Binary rules:** DO NOT design for audit, DO NOT flag metaphor bias as failure IF floors met, MUST modify metaphor IF floors violated

**No judgment language used.** All additions use DO NOT/MUST/NON-NEGOTIABLE/REQUIRED.

**Exact insertion points provided** with surrounding context for zero-ambiguity placement.

**Key principle reinforced throughout:**

> **"The metaphor shapes experience; the guardrails prevent it from breaking experience."**

---

**END FILE**
