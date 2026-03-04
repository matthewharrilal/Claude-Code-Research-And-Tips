# Primacy Rotation Mechanism — Comprehensive Verification

## Scope

Full audit of `/Users/spacewizardmoneygang/.claude/skills/falls-in-love/SKILL.md` (918 lines) for the completeness and consistency of the primacy rotation mechanism across all research waves.

---

## 1. U-Curve Explanation

**Status: PRESENT AND ADEQUATE**

Line 308 provides the foundational explanation:

> "Transformer attention follows a U-shaped curve: tokens at the **beginning** (primacy) and **end** (recency) of the context window receive disproportionate weight. Everything in the middle compresses."

The word "primacy" appears 24+ times throughout the document. The section header at line 306 is "Primacy Rotation — Why Reading Order Matters." The WHY is explicit at line 310:

> "Primacy rotation compensates for this. Each wave's rotation schedule ensures every research file gets at least two turns at the primacy position (read first, highest attention). The rotation is not arbitrary — it is engineered to give each file maximum attention when the page's development stage most benefits from that file's contribution."

The mechanics are further decomposed at lines 312-316 into four named positions: Primacy, Supporting, Recency, and Unread. This is well-structured and sufficient.

**No gap.**

---

## 2. Per-Wave Rotation Schedules

### Wave 0: Content Immersion (lines 389-408)

- **Explicit rotation schedule:** NO. Wave 0 has only one input: "The content source file ONLY. No design system. No research. No vocabulary." (line 391). Since there is only one file, rotation is inapplicable. This is correctly handled by design — no gap.

### Wave 1: Design System Soul (lines 411-432)

- **Explicit rotation schedule:** YES (line 417):
  `identity.md -> tokens.css -> components.css -> vocabulary.md -> identity.md (re-check) -> tokens.css (audit) -> components.css (integration) -> agent's choice.`
- **Rotation order justified:** PARTIALLY. The order is listed but no prose justifies WHY identity.md is first, tokens.css second, etc. Wave 2 has a detailed "Why this order" paragraph (lines 451); Wave 1 does not.
- **Each file gets 2+ primacy turns:** YES. identity.md appears at positions 1 and 5. tokens.css at positions 2 and 6. components.css at positions 3 and 7. vocabulary.md at position 4 only — **vocabulary.md gets only 1 primacy turn**.
- **Diagnostic override protocol:** NO. Wave 1 has no diagnostic override protocol. Wave 2 introduces it (lines 453-457) and Wave 3 references "same as Wave 2" (line 522), but Wave 1 has nothing.

**GAP: (a) No "Why this order" justification. (b) vocabulary.md gets only 1 primacy turn. (c) No diagnostic override protocol.**

### Wave 2: Research R1-R5 (lines 435-488)

- **Explicit rotation schedule:** YES (line 449):
  `R1 -> R4 -> R3 -> R5 -> R2 -> R3(2nd) -> R1(2nd) -> R4(2nd) -> R5(2nd) -> R2(2nd) -> SYNTHESIS -> agent's diagnostic -> depth passes.`
- **Rotation order justified:** YES. Lines 451 provide a detailed paragraph: "R1 first because documentation patterns provide the layout skeleton. R4 second because spatial form needs to arrive before density fills it. R3 third because density rhythm only makes sense once zones exist. R5 fourth because combination operates on relationships between existing components. R2 fifth because editorial techniques refine what is already structured. R3 gets a second turn at position 6 because density is where rhythm breaks surface during integration — and 51 findings are the most likely to be underweighted in a single pass."
- **Each file gets 2+ primacy turns:** YES. R1 at positions 1 and 7. R4 at positions 2 and 8. R3 at positions 3 and 6. R5 at positions 4 and 9. R2 at positions 5 and 10. SYNTHESIS at position 11. Every R-file gets exactly 2 turns.
- **Diagnostic override protocol:** YES (lines 453-457). Four-step protocol with explicit rules: weakest dimension check, file-to-dimension mapping, 2-pass recency check, 4-pass neglect rule.

**No gap. This is the gold-standard wave for rotation specification.**

### Wave 3: Case Studies (lines 491-541)

- **Explicit rotation schedule:** YES (line 520):
  `[Most relevant to content] -> DD-006 -> CD-006 -> OD-006 -> OD-004 -> DD-003 -> OD-001 -> mechanism-catalog -> grammar -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> depth passes.`
- **Rotation order justified:** PARTIALLY. Lines 514-518 explain how to SELECT the first file (content-aware). The default rotation order at line 520 is provided but has no "Why this order" prose explaining why DD-006 before CD-006 before OD-006, etc. Wave 2's justification paragraph has no equivalent here.
- **Each file gets 2+ primacy turns:** PARTIALLY. The schedule shows 9 case studies (DD-006, CD-006, OD-006, OD-004, DD-003, OD-001, mechanism-catalog, grammar, plus the content-selected first) getting 1 explicit turn each, then "[Crown jewels 2nd pass]" x3 for depth. The "crown jewels" are undefined — presumably the 3 most relevant, but this is implicit. Several files (DD-004, OD-006, CD-001, CD-005) from the input list at line 493 are NOT in the rotation schedule at all. DD-004 ("layers"), CD-001 ("reasoning-inside-code"), and CD-005 ("multi-axis-transition") are listed as Wave 3 inputs but never appear in the rotation schedule.
- **Diagnostic override protocol:** YES (line 522). References Wave 2's protocol.
- **Attention trough symptoms:** YES (line 524). Four specific symptoms with explicit remediation.

**GAP: (a) No "Why this order" prose for the default rotation. (b) 3 input files (DD-004, CD-001, CD-005) are entirely absent from the rotation schedule — they are listed as inputs but never get primacy. (c) "Crown jewels" is undefined — agent must guess which files deserve 2nd passes.**

### Wave 4: Synthesis + Provenance (lines 544-563)

- **Explicit rotation schedule:** NO. The inputs are listed (RESEARCH-SYNTHESIS.md, semantic-rules.md, "selected provenance documents") but there is no rotation schedule whatsoever.
- **Rotation order justified:** NO.
- **Each file gets 2+ primacy turns:** CANNOT ASSESS — no schedule exists.
- **Diagnostic override protocol:** NO. Not mentioned.

**GAP: Wave 4 has zero rotation infrastructure. It has only 3 named inputs and 8-12 passes, which is enough passes to warrant a rotation schedule. The "selected provenance documents" are not even enumerated.**

### Wave 5: Combination Mastery (lines 566-587)

- **Explicit rotation schedule:** NO. Inputs are listed (CD-006, grammar.md, "the HTML file as primary artifact") but no rotation schedule.
- **Rotation order justified:** NO.
- **Each file gets 2+ primacy turns:** CANNOT ASSESS — no schedule exists. Only 2-3 external files, so 8-12 passes gives ample room for multiple primacy turns, but there is no specification.
- **Diagnostic override protocol:** NO. Not mentioned.

**GAP: Wave 5 has zero rotation infrastructure. While the input set is smaller (2 external files + HTML), the absence of any rotation specification means the agent may read CD-006 at primacy every pass and neglect grammar.md entirely.**

---

## 3. Content-Aware vs Static Rotation

**Status: PRESENT for Waves 2-3. ABSENT for Waves 1, 4, 5.**

- **Wave 2:** Static default rotation with diagnostic override (content-aware). The rotation is fixed but the agent can override based on page needs.
- **Wave 3:** Explicitly content-aware. Line 512: "Rotation (content-aware, not static)." Lines 514-518 provide content-feature-to-file mapping. This is the strongest content-aware implementation.
- **Wave 1:** Static only. No content-aware adaptation specified.
- **Waves 4-5:** No rotation at all, so neither static nor content-aware.

**GAP: Waves 1, 4, 5 lack content-aware rotation. Wave 1 could benefit from content-awareness (e.g., "if the content has strong power dynamics, identity.md should lead; if the content is data-heavy, tokens.css should lead").**

---

## 4. Reading Order vs Primacy Rotation Orthogonality

**Status: PRESENT AND WELL-EXPLAINED**

Line 318 provides a clean, explicit distinction:

> "Reading order and primacy rotation are orthogonal. Reading order determines which CATEGORY of file (content, HTML, notebook, research) the agent reads first. Primacy rotation determines which SPECIFIC research file gets attention when the agent reaches the research slot. The content handoff (content source -> HTML) governs category order. The rotation schedule governs within-category order."

This is further reinforced in the Context Window Management section (lines 860-893) where the "Reading order for new context windows" (lines 886-890) lists category order (notebook, retrospective, HTML, research, content) as distinct from within-research primacy.

**No gap.**

---

## 5. Attention Trough Detection and Remediation

**Status: PRESENT for Wave 3. ABSENT for all other waves.**

Wave 3 (line 524) provides the most detailed trough detection:

> "Attention trough symptoms (watch for these): (1) Visual monotony in specific zones — one dimension dominates. (2) Notebook never mentions a specific case study dimension. (3) Zone-specific swap test failure while others pass. (4) All borrowed components work without adaptation — you are copying, not translating. Remediation: Put the neglected dimension's case study at primacy for 2 consecutive passes and apply it specifically to the weak zone."

Wave 2 has the diagnostic override (lines 453-457) which is a PREVENTION mechanism (the 4-pass neglect rule) but does not have explicit trough SYMPTOMS. The diagnostic override prevents troughs by rule; Wave 3 detects them by symptom. These are complementary but the symptom-based approach is more robust.

**GAP: Waves 1, 4, 5 have no trough detection or remediation. Wave 2 has prevention but no symptom-based detection. The trough symptoms from Wave 3 (lines 524) should be generalized to all research waves, not just Wave 3.**

---

## 6. Named Pass Archetypes

**Status: PRESENT AND COMPREHENSIVE**

Lines 338-357 provide a 12+ pass archetype table with:
- Named passes (First Contact, Second Lens, Gap Sweep, First Holistic Read, Transition Refinement, Rhythm Audit, Typography as Argument, Interaction as Experience, Self-Reference + Coupling, Architectural Soundness, Responsive as Content-Derived, The Invisible Grain)
- Cognitive stance for each pass
- Expected delta (CSS line count changes)
- Key insight that not every pass adds — passes 6 and 10 are explicitly removal passes

The archetypes are noted as applying "to Wave 2 and Wave 3 most directly" (line 357). Other waves have their own pass-level deepening sub-sections (e.g., Wave 0 passes 1-3/4-6/7-8, Wave 1 passes 1-3/4-7/8-10, etc.) but these are wave-specific, not generic archetypes.

**No gap. The generic archetype table + wave-specific deepening descriptions is a good two-layer design.**

---

## 7. Delta Profile

**Status: PRESENT AND ADEQUATE**

Lines 320-336 provide:
- A visual ASCII chart of expected delta per pass (lines 325-327)
- Diagnostic rules for deviations (lines 330-334)
- The framing that "the delta profile is a thermometer, not a thermostat" (line 336)

The delta profile is presented as a self-diagnostic tool. It shows the expected curve for a healthy wave, identifies what deviation patterns mean, and gives corrective guidance (e.g., "If you are making 100+ line changes at pass 8, your integration passes (4-6) failed").

**No gap.**

---

## Consolidated Checklist

| # | Rotation Feature | Present? | Adequate? | Location (lines) | Notes |
|---|-----------------|----------|-----------|-------------------|-------|
| 1 | U-curve explanation | YES | YES | 308-310 | Transformer attention U-curve, "primacy" defined, WHY explained |
| 2 | Position mechanics (Primacy/Supporting/Recency/Unread) | YES | YES | 312-316 | Four named positions with attention levels |
| 3 | Reading order vs primacy orthogonality | YES | YES | 318, 886-890 | Clean distinction, reinforced in Context Window section |
| 4 | Wave 0 rotation | N/A | N/A | 389-408 | Single-file wave, rotation inapplicable |
| 5 | Wave 1 rotation schedule | YES | PARTIAL | 417 | Schedule exists but no "Why this order" justification |
| 6 | Wave 1 2+ primacy per file | PARTIAL | NO | 417 | vocabulary.md gets only 1 primacy turn |
| 7 | Wave 1 diagnostic override | NO | NO | — | Missing entirely |
| 8 | Wave 1 content-aware adaptation | NO | NO | — | Static rotation only |
| 9 | Wave 2 rotation schedule | YES | YES | 449 | Full 12-position schedule |
| 10 | Wave 2 order justification | YES | YES | 451 | Detailed paragraph explaining each position |
| 11 | Wave 2 2+ primacy per file | YES | YES | 449 | Every R-file gets exactly 2 turns |
| 12 | Wave 2 diagnostic override | YES | YES | 453-457 | 4-step protocol with 4-pass neglect rule |
| 13 | Wave 2 trough detection (symptom-based) | NO | NO | — | Has prevention (override) but not symptom-based detection |
| 14 | Wave 3 rotation schedule | YES | PARTIAL | 520 | Default rotation provided but 3 input files omitted |
| 15 | Wave 3 content-aware selection | YES | YES | 512-518 | Content-feature-to-file mapping |
| 16 | Wave 3 order justification | NO | NO | — | No "Why this order" prose for default rotation |
| 17 | Wave 3 2+ primacy per file | PARTIAL | NO | 520 | "Crown jewels" undefined; DD-004, CD-001, CD-005 absent |
| 18 | Wave 3 diagnostic override | YES | YES | 522 | References Wave 2 protocol |
| 19 | Wave 3 trough detection | YES | YES | 524 | 4 symptoms + remediation protocol |
| 20 | Wave 4 rotation schedule | NO | NO | — | Zero rotation infrastructure |
| 21 | Wave 4 diagnostic override | NO | NO | — | Missing entirely |
| 22 | Wave 4 trough detection | NO | NO | — | Missing entirely |
| 23 | Wave 5 rotation schedule | NO | NO | — | Zero rotation infrastructure |
| 24 | Wave 5 diagnostic override | NO | NO | — | Missing entirely |
| 25 | Wave 5 trough detection | NO | NO | — | Missing entirely |
| 26 | Named pass archetypes | YES | YES | 338-357 | 12+ archetypes with cognitive stances and expected deltas |
| 27 | Delta profile self-diagnostic | YES | YES | 320-336 | ASCII chart + diagnostic rules + thermometer framing |
| 28 | Content handoff (content -> HTML primacy) | YES | YES | 875-893 | Progressive handoff with explicit test |

---

## Gap Analysis — Specific Text to Add

### Gap 1: Wave 1 — Missing "Why this order" and vocabulary.md gets only 1 primacy turn

**Location:** After line 417, before "Minimum passes:" at line 419.

**Text to add:**

```markdown
**Why this order:** identity.md first because soul constraints are the non-negotiable physics — every subsequent file must operate within these boundaries. tokens.css second because the spatial vocabulary requires named values before components can reference them. components.css third because available components constrain and enable spatial decisions. vocabulary.md fourth because the conceptual vocabulary (the WHY behind the tokens) operates at a different abstraction level — reading it after tokens reveals which tokens express which concepts, rather than reading vocabulary abstractly. identity.md re-check at position 5 catches soul violations introduced during token/component integration. tokens.css audit at position 6 catches value drift. components.css integration at position 7 ensures components are serving content, not being deployed generically. vocabulary.md gets a second reading at position 8 (agent's choice should default to vocabulary.md unless another file is weaker) to ensure the conceptual vocabulary has been internalized, not just the mechanical tokens.

**Revised rotation:** identity.md → tokens.css → components.css → vocabulary.md → identity.md (re-check) → tokens.css (audit) → components.css (integration) → vocabulary.md (internalization) → agent's choice → agent's choice.

**Diagnostic override (same protocol as Wave 2):** After each pass: Does the page satisfy the soul constraints? Which design system file addresses the weakest dimension? Has that file been at primacy in the last 2 passes? Has any file gone 4+ passes without primacy?
```

### Gap 2: Wave 2 — Missing trough symptom detection

**Location:** After line 457, before "Look before reading:" at line 459.

**Text to add:**

```markdown
**Attention trough symptoms (watch for these):** (1) One research dimension (density, axis, combination, documentation, editorial) dominates the page while others are absent. (2) The notebook contains zero applied findings from a specific R-file after 6+ passes. (3) A section of the page feels "thin" in a dimension that a specific research file addresses. (4) The agent's evaluation vocabulary at pass 8 is the same as at pass 2 for a specific dimension — no perceptual deepening occurred. **Remediation:** Put the neglected file at primacy for 2 consecutive passes. Read it slowly. Apply at least 2 findings to the weakest zone.
```

### Gap 3: Wave 3 — Missing files in rotation and "Crown jewels" undefined

**Location:** Replace line 520 with expanded rotation.

**Text to replace (line 520):**

```markdown
**Default rotation (adapt based on content):** [Most relevant to content] → DD-006 → CD-006 → OD-006 → DD-003 → OD-004 → DD-004 → CD-005 → OD-001 → CD-001 → mechanism-catalog → grammar → [Top 3 by impact, 2nd pass] → [Top 3 by impact, 2nd pass] → [Top 3 by impact, 2nd pass] → depth passes.

**Why this order:** The content-selected file sets the spatial direction. DD-006 second because fractal density is the highest-transfer case study. CD-006 third because compound combination thinking should begin early. OD-006 fourth because organizational structure refines what density and combination have established. DD-003 fifth for density at the island/zone level. OD-004 sixth for confidence gradients. DD-004 seventh for layer-based density. CD-005 eighth for multi-axis transition grammar. OD-001 ninth for conversational organization. CD-001 tenth for reasoning-inside-code compound patterns. mechanism-catalog and grammar close the external reading because they are reference documents, not process documents. The "Top 3 by impact" 2nd passes are determined by the agent at pass 10: which 3 case studies produced the most spatial transformation? Those 3 get a second primacy turn, in order of impact.
```

### Gap 4: Wave 4 — Zero rotation infrastructure

**Location:** After line 548 ("Meta-documents that describe how findings relate to each other. Which conflicts exist. Which principles override."), before "Minimum passes:" at line 550.

**Text to add:**

```markdown
**Rotation:** RESEARCH-SYNTHESIS.md → semantic-rules.md → [provenance doc 1] → RESEARCH-SYNTHESIS.md (2nd) → [provenance doc 2] → semantic-rules.md (2nd) → [provenance doc 3] → agent's diagnostic → depth passes.

**Why this order:** RESEARCH-SYNTHESIS.md first because it reveals cross-research conflicts the agent may have unknowingly created in Waves 2-3. semantic-rules.md second because the semantic rules provide resolution principles for those conflicts. Provenance documents are interleaved to ground abstract synthesis in concrete lineage. Each file gets 2+ primacy turns. Provenance document selection is content-aware: choose documents whose provenance chains are most relevant to the spatial decisions made in Waves 2-3.

**Diagnostic override (same protocol as Wave 2):** After each pass: Which cross-wave conflict feels least resolved? Which synthesis/rules file addresses it? Has that file been at primacy in the last 2 passes?

**Attention trough symptoms:** (1) Conflicts between Wave 2 and Wave 3 applications persist unresolved after 4+ passes. (2) The notebook cites synthesis principles abstractly but does not trace them to specific CSS decisions. (3) Semantic rules are acknowledged but not applied — the page's semantic layer is unchanged from Wave 3. **Remediation:** Put the neglected file at primacy for 2 consecutive passes. Trace 3 specific conflicts from the file to specific CSS locations on the page.
```

### Gap 5: Wave 5 — Zero rotation infrastructure

**Location:** After line 568 ("Input: CD-006 (re-read with deep integration focus), grammar.md, the HTML file as primary artifact."), before "The Critical Shift:" at line 570.

**Text to add:**

```markdown
**Rotation:** CD-006 → grammar.md → CD-006 (2nd, compound focus) → grammar.md (2nd, transition grammar) → CD-006 (3rd, system-level) → agent's diagnostic → depth passes.

**Why this order:** CD-006 first because compound combination is the wave's primary cognitive target. grammar.md second because the grammar of transitions between compound states requires explicit study. CD-006 gets 3 primacy turns because compound combination is the hardest skill — each re-read with a deeper page reveals new combination possibilities invisible in earlier readings. grammar.md gets 2 primacy turns because transition grammar is both structural (pass 2) and expressive (pass 4). The HTML file is the primary WORKING artifact at every pass but is not a "research" file — it does not enter the primacy rotation. It is always present.

**Diagnostic override:** After each pass: Is the compound combination improving, or am I still making single-dimension changes? If single-dimension: put CD-006 at primacy and focus specifically on Section 5 (how individual mechanisms combine). If transitions feel mechanical: put grammar.md at primacy and focus on transition TYPES, not just transition presence.

**Attention trough symptoms:** (1) Changes in this wave operate on one dimension at a time rather than compound. (2) Zone transitions are uniform (all the same type) rather than varied. (3) The agent is still adding new components rather than deepening existing combinations. **Remediation:** Re-read CD-006 with a specific question: "Where do 2+ dimensions operate on the SAME element simultaneously in this case study? How does that differ from my page?"
```

### Gap 6: Generalized trough detection across all waves

**Location:** After line 316 (the Unread files line), before line 318 (the orthogonality paragraph). This places it in the general Primacy Rotation section so it applies to ALL waves.

**Text to add:**

```markdown
**Universal trough detection (applies to every wave with research files):** The symptoms of attention trough neglect are consistent across waves, even though the specific files differ:
1. **Dimensional monotony:** The page excels in one dimension but is flat in another that a specific file addresses.
2. **Notebook silence:** The builder's notebook has zero entries referencing a specific file after 4+ passes.
3. **Zone-specific weakness:** Some page zones are rich while others feel generic — the generic zones correspond to the neglected file's domain.
4. **Unchanged evaluation:** The agent's evaluation vocabulary for a specific dimension has not deepened since the wave began — the file responsible for that dimension has not been absorbed.

**Universal remediation:** Put the neglected file at primacy for 2 consecutive passes. Apply at least 2 specific findings to the weakest zone. Write a notebook entry explaining what the re-read revealed. If the re-read reveals nothing new, the file may genuinely be exhausted for this content — document that judgment explicitly.
```

---

## Summary

The primacy rotation mechanism is **comprehensively explained for Waves 2-3** and **structurally absent for Waves 4-5**, with Wave 1 falling in between (schedule exists but lacks justification, full coverage, and override protocol).

**Strongest elements:**
- The U-curve explanation (line 308) is clear, correct, and motivating.
- The reading-order vs primacy orthogonality distinction (line 318) is clean.
- Wave 2 is the gold standard: full rotation schedule, justified order, 2+ primacy per file, 4-step diagnostic override.
- Wave 3 has the best content-aware rotation selection (lines 512-518) and the best trough symptom detection (line 524).
- The named pass archetypes (lines 338-357) and delta profile (lines 320-336) are excellent self-diagnostic tools.

**Weakest elements:**
- Waves 4 and 5 have ZERO rotation infrastructure despite having multiple research files and 8-12 passes each.
- Wave 1 is missing order justification, full primacy coverage, and a diagnostic override.
- Wave 3's default rotation omits 3 of its listed input files (DD-004, CD-001, CD-005) entirely.
- Trough detection is only specified in Wave 3 — it should be universal.
- "Crown jewels" at Wave 3 line 520 is undefined jargon.

**Estimated effort to close all gaps:** ~600 words of additions across 6 insertion points. No existing text needs deletion — all gaps are additive.
