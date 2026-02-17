# 02: HIGH-PRIORITY FIX SPECIFICATIONS (HP-01 through HP-10)

**Author:** high-fixer (Opus 4.6)
**Date:** 2026-02-17
**Target File (primary):** `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md`
**Target File (secondary):** `ephemeral/prompt-enrichment-audit/17-pa-operational-scaffolding.md`
**Source:** `ephemeral/flagship-validation/13-FINAL-VALIDATION-VERDICT.md` Section 3

---

## Summary

10 HIGH-priority gaps identified. Each specification below provides exact OLD TEXT / NEW TEXT for surgical replacement. Edits are ordered HP-01 through HP-10 as listed in the validation verdict.

---

### HP-01: Clarify C-08 Gate vs MC-02 Flagship Target

**LOCATION:** Section B3 (Compositional Quality), line 174
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
  C-08. >= 2 reinforcing pairs (same semantic, different CSS channels).
```

**NEW TEXT:**
```
  C-08. >= 2 reinforcing pairs (same semantic, different CSS channels). GATE MINIMUM.
```

**LOCATION (second edit):** Section B4 (Multi-Coherence), line 196
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
MC-02. >= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels).
```

**NEW TEXT:**
```
MC-02. >= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels). Flagship aspiration; C-08 gate >= 2 is the binary minimum.
```

**RATIONALE:** Builders encounter C-08 (>= 2) and MC-02 (>= 3) for the same concept with different thresholds; making C-08 the gate and MC-02 the aspiration resolves the contradiction without changing either threshold.

---

### HP-02: Add Transition Name Mapping Between Prompt and Catalog Systems

**LOCATION:** Section B3 (Transitions), line 169
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
  C-05. >= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px).
```

**NEW TEXT:**
```
  C-05. >= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px).
        Catalog mapping: SMOOTH = catalog "SPACING SHIFT", BRIDGE = catalog "CHECKPOINT", BREATHING = catalog "HARD CUT".
```

**RATIONALE:** The mechanism-catalog.md uses HARD CUT / SPACING SHIFT / CHECKPOINT while the prompt uses SMOOTH / BRIDGE / BREATHING; builders reading both need an explicit mapping to avoid implementing the wrong type.

---

### HP-03: Add Content Adapter Role to C1 Agent Roster

**LOCATION:** Section C1 (Agent Roster), lines 303-306
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)
```

**NEW TEXT:**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table.
    ALSO: adapt RESEARCH-SYNTHESIS.md prose into showcase-ready sections (research register -> reader-friendly register). Output: 01-adapted-content.md.
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)
```

**RATIONALE:** No agent is assigned to adapt research-document prose into showcase prose; expanding Content Architect's responsibilities avoids adding a new agent while ensuring content-form alignment for the flagship's untested research-prose-as-showcase scenario.

---

### HP-04: Add 3 MC Items to B10 Self-Check

**LOCATION:** Section B10 (Builder Self-Check), lines 289-291
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
```

**NEW TEXT:**
```
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)
[ ] MC-01: CCS >= 0.30               (removal test: 3+ mechanisms whose meaning changes)
[ ] MC-02: >= 3 reinforcing pairs    (same semantic encoded through different CSS channels)
[ ] MC-06: >= 1 cascade of 3+ mechs  (mechanism A enables B enables C)

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
```

**RATIONALE:** B10 contained zero multi-coherence items despite MC-01 through MC-08 being critical Flagship rules; adding the three most verifiable MC checks (CCS, reinforcing pairs, cascading chain) to the recency-position self-check ensures the builder verifies multi-coherence before file write.

---

### HP-05: Add MC Checks to Gate 3

**LOCATION:** Section C3 (Gate Sequence), line 354
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check (regression detection).
```

**NEW TEXT:**
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. MC self-check (CCS >= 0.30, >= 3 reinforcing pairs, >= 1 cascade). Spatial re-check (regression detection).
```

**RATIONALE:** MC-04 through MC-08 had zero gate enforcement; adding MC checks to Gate 3 (post-mechanism-deployment) converts them from advisory rules to enforced binary gates, consistent with the prompt's own principle that "binary rules achieve 100% compliance; judgment rules achieve ~0%."

---

### HP-06: Align C4 Viewports With PA SKILL.md (Add 1024px)

**LOCATION:** Section C4 (PA Deployment), line 370
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
  3 viewports: 1440px, 768px, 480px. Cold look + full scroll at each. 40-60 screenshots.
```

**NEW TEXT:**
```
  4 viewports: 1440px, 1024px, 768px, 480px. Cold look + full scroll at each. 50-80 screenshots.
```

**RATIONALE:** The PA SKILL.md specifies 1440px and 1024px as standard audit viewports; adding 1024px to C4 reconciles the viewport sets and covers the standard tablet breakpoint that PA auditors expect to evaluate.

---

### HP-07: Add PA-03 Note to Operational Scaffolding

**LOCATION:** Section 2, Auditor A instruction sheet, after PA-01 instruction (line ~103)
**FILE:** `17-pa-operational-scaffolding.md`

**OLD TEXT:**
```
2. **PA-01: What's the first thing that bothers you?** (~3 min)
   - Return to 1440px cold look. What catches your attention negatively?
   - Then check 768px. Same or different?
   - Write finding using template.

3. **PA-04: Where does your eye go first? Is that where it SHOULD go?** (~3 min)
```

**NEW TEXT:**
```
2. **PA-01: What's the first thing that bothers you?** (~3 min)
   - Return to 1440px cold look. What catches your attention negatively?
   - Then check 768px. Same or different?
   - Write finding using template.

3. **PA-03: Does this feel like one designer made it, or three?** (~3 min)
   - Scan full 1440px scroll-through. Look for design dialect shifts (e.g., header style vs body style vs footer style).
   - Identify if visual fragmentation exists: sections that look like they came from different designers.
   - Write finding using template.

4. **PA-04: Where does your eye go first? Is that where it SHOULD go?** (~3 min)
```

**NOTE:** This edit also requires renumbering subsequent items in Auditor A's section (4->5, 5->6, 6->7, 7->8). The Assignment Table at the top of Section 1 should also be updated to include PA-03 in Auditor A's question list:

**ADDITIONAL EDIT (Assignment Table, line ~20):**

**OLD TEXT:**
```
| **A** | Impression+Emotion | PA-01, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45 | 7 | HIGH (PA-05 composite) | 20-25 min | `findings-impression-emotion.md` |
```

**NEW TEXT:**
```
| **A** | Impression+Emotion | PA-01, PA-03, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45 | 8 | HIGH (PA-05 composite) | 22-27 min | `findings-impression-emotion.md` |
```

**RATIONALE:** PA-03 ("Does this feel like one designer made it, or three?") is assigned to Auditor A in the enriched prompt C4 but was omitted from the operational scaffolding, creating a coverage gap in Identity assessment.

---

### HP-08: Route Orphan Extraction Files to Builders

**LOCATION:** Section E (Reference Library), lines 413-416
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
BUILDER reads:
  - [build plan file]                                    -- construction blueprint
  - design-system/compositional-core/vocabulary/tokens.css -- variable reference
  - design-system/compositional-core/identity/prohibitions.md -- soul identity (22 prohibitions)
```

**NEW TEXT:**
```
BUILDER reads:
  - [build plan file]                                    -- construction blueprint
  - design-system/compositional-core/vocabulary/tokens.css -- variable reference
  - design-system/compositional-core/identity/prohibitions.md -- soul identity (22 prohibitions)
  - 00-components-extract.md                             -- component CSS patterns (from wrapper extraction)
  - 00-case-studies-extract.md                           -- case study precedents (from wrapper extraction)
```

**RATIONALE:** The Wrapper creates 00-components-extract.md and 00-case-studies-extract.md during Phase 1A but no agent reads them; routing them to builders provides component CSS patterns and case study context that would otherwise be wasted extraction effort.

---

### HP-09: Resolve "Content-Form Alignment Analysis" File Path

**LOCATION:** Section E (Reference Library), line 432
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
  - Content-form alignment analysis                       -- content-structure fit
```

**NEW TEXT:**
```
  - ephemeral/flagship-preparation/05-content-first-methodology.md -- content-form alignment analysis
```

**RATIONALE:** "Content-form alignment analysis" had no file path, making it unreachable by the Intentionality Builder; the flagship preparation file `05-content-first-methodology.md` contains the content-form analysis and exists on disk.

---

### HP-10: Fix Void Threshold Source Citation

**LOCATION:** Appendix (Authoritative Parameter Table), line 457
**FILE:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD TEXT:**
```
| Void threshold (skeleton) | 1620px | Checkpoint gate | TC-07 graduated |
```

**NEW TEXT:**
```
| Void threshold (skeleton) | 1620px | Checkpoint gate | LIVING-STATE.md (consecutive-frame protocol) |
```

**RATIONALE:** The parameter table cites TC-07 as the source for the 1620px skeleton void threshold, but TC-07 contains 2160px; the actual source of the 1620px value is LIVING-STATE.md's consecutive-frame protocol.

---

## FIX SUMMARY TABLE

| HP | Edit Target | Section | Line(s) | Effort |
|----|-------------|---------|---------|--------|
| HP-01 | Enriched prompt | B3 + B4 | 174, 196 | 2 min |
| HP-02 | Enriched prompt | B3 | 169 | 2 min |
| HP-03 | Enriched prompt | C1 | 303-306 | 3 min |
| HP-04 | Enriched prompt | B10 | 289-291 | 3 min |
| HP-05 | Enriched prompt | C3 | 354 | 2 min |
| HP-06 | Enriched prompt | C4 | 370 | 1 min |
| HP-07 | PA scaffolding | Section 2 | ~103, ~20 | 5 min |
| HP-08 | Enriched prompt | Section E | 413-416 | 2 min |
| HP-09 | Enriched prompt | Section E | 432 | 1 min |
| HP-10 | Enriched prompt | Appendix | 457 | 1 min |

**Total estimated effort: ~22 minutes for all 10 HIGH-priority fixes.**

---

**END HIGH-PRIORITY FIX SPECIFICATIONS**
