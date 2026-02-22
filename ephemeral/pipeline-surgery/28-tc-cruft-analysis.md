# TC Skill Cruft Analysis

Skill file: `~/.claude/skills/tension-composition/SKILL.md` (2,006 lines)
Orchestrator: `~/.claude/skills/build-page/SKILL.md` (480 lines)

---

## 1. Dead Code Sections

### 1A. Tier Routing (ELIMINATED -- but ghosts remain)

The skill explicitly killed tier routing at line 70: "Every page runs the FULL pipeline (Phases 1-5). No tier routing, no phase skipping." And line 74 reinforces: "This is content-form fit detection, not tier routing."

However, **residual tier vocabulary** persists throughout:

| Line | Text | Status |
|------|------|--------|
| 70 | "No tier routing, no phase skipping" | OK -- explicit kill |
| 636 | "ceiling experiment's metaphor" | REFERENCE ONLY -- explains rubric provenance |
| 686 | "Ceiling experiment's metaphor would have been REJECTED" | REFERENCE ONLY |
| 838 | "The Flagship failure: 22% of CSS budget..." | REFERENCE ONLY -- explains anti-scale model |
| 840 | "The CD-006 success: 41 mechanism instances..." | REFERENCE ONLY |
| 1377-1406 | "Tier 2 (Extractable)" vs "Tier 3 (Compositional)" component taxonomy | ACTIVE -- but "Tier" here means COMPONENT tier, not page tier |
| 1525 | "visual treatment matching tier" | AMBIGUOUS -- could be misread as page tier |
| 1604 | "Gap analysis from Middle" | STALE REFERENCE -- Middle experiment artifact |
| 1655 | ">=14 mechanisms for Flagship" | ACTIVE -- but assumes all pages are Flagship |

**Verdict: No dead tier-routing LOGIC, but ~6 references to old experiments by tier name. These are explanatory provenance, not routing conditionals. LOW priority for removal -- they explain WHY rules exist.**

### 1B. Old File Paths (STALE)

| Line | Path | Status |
|------|------|--------|
| 101 | `/active/design-system/case-studies/` | STALE -- path prefix `/active/` does not exist. Correct: `design-system/compositional-core/case-studies/` |
| 102 | `/active/design-system/library/` | STALE |
| 1023 | `/active/design-system/techniques/mechanisms.md` | STALE -- correct: `design-system/compositional-core/grammar/mechanism-catalog.md` |
| 1024 | `/active/design-system/foundations/components.md` | STALE -- correct: `design-system/compositional-core/components/components.css` |
| 1070 | `/case-studies/` | STALE prefix |
| 1757, 1773, 1779 | `/case-studies/_INDEX.md` | Correct: `design-system/compositional-core/case-studies/_INDEX.md` |

**Verdict: ~8 stale file paths using the old `/active/` prefix. MEDIUM priority -- a TC agent encountering these will fail file reads and waste tokens on error recovery.**

### 1C. Standalone-Only Content

The skill has a clear sub-skill exit ramp at line 72: "When invoked as a sub-skill by /build-page, the TC agent runs Phases 0 through 4 and outputs via Phase 4.5 (Sub-Skill Output Mode). Phase 5 (Compositional Layout) is handled by the downstream builder."

And Phase 4.5 (lines 1627-1670) explicitly gates sub-skill output.

**Everything after Phase 4.5 is standalone-only:**
- Phase 5: Output (lines 1674-1725) -- Output A (conventions brief) + Output A-Full + Output B (HTML layout)
- Phase 5: Divergence Verification (lines 1758-1854) -- case study comparison
- Edge Cases (lines 1727-1755)
- Stale Tension / Artificial Tension (lines 1857-1862)
- Test Content Recommendations (lines 1865-1883)
- Invocation section (lines 1886-1897)
- Appendix: Builder Instruction Warnings (lines 1901-1989)
- Appendix: Test Results Summary (lines 1993-2006)

---

## 2. Phase 5 Analysis

### Line Count

| Section | Lines | Start | End |
|---------|-------|-------|-----|
| Phase 5: Output (Conventions Brief + HTML) | 52 | 1674 | 1725 |
| Edge Cases & Failure Modes | 29 | 1727 | 1755 |
| Phase 5: Divergence Verification | 97 | 1758 | 1854 |
| Stale/Artificial Tension | 6 | 1857 | 1862 |
| Test Content Recommendations | 19 | 1865 | 1883 |
| Invocation | 12 | 1886 | 1897 |
| Appendix: Builder Warnings | 89 | 1901 | 1989 |
| Appendix: Test Results | 14 | 1993 | 2006 |
| **TOTAL STANDALONE-ONLY** | **318** | 1674 | 2006 |

**318 lines (15.9%) are Phase 5 and beyond -- exclusively standalone-mode content.**

### Should It Be Gated or Removed?

**Current state:** The Phase 4.5 exit ramp at line 1627 says "Stop here" in sub-skill mode. But the agent has ALREADY READ all 2,006 lines by that point. The 318 standalone-only lines have already consumed token budget.

**The real question is about TOKEN BUDGET, not execution path.** The TC agent won't execute Phase 5 in sub-skill mode (the gate works), but it has already absorbed 318 lines of instructions it will never use. This is pure waste at read time.

**Recommendation: REMOVE from main file, keep as standalone appendix.**

---

## 3. Duplication with Pipeline Files

### 3A. Soul Constraints (HEAVY DUPLICATION)

The TC skill repeats soul constraints from `prohibitions.md` AND `conventions-brief.md`:

| Constraint | TC Skill (lines) | Also In |
|-----------|-------------------|---------|
| `border-radius: 0` | 219-222, 1408 | prohibitions.md, conventions-brief.md |
| `box-shadow: none` | 220, 1408 | prohibitions.md, conventions-brief.md |
| `filter: drop-shadow()` NEVER | 222 | prohibitions.md |
| Palette (6 colors) | 224-230 | tokens.css, conventions-brief.md |
| Typography (3 fonts) | 232-235 | tokens.css, conventions-brief.md |
| Border categories (1/3/4px, never 2px) | 237-241 | conventions-brief.md |
| Spacing scale | 243 | tokens.css |
| Personality Profile (8 axes) | 245-256 | conventions-brief.md |
| Soul Test (5 questions) | 258-264 | conventions-brief.md |
| Container width 940-960px | 912-948 (37 lines!) | conventions-brief.md, gate-runner.md |

**Total duplicated soul content: ~120 lines across the TC skill** that are identically available in files the BUILDER reads (prohibitions.md, conventions-brief.md, tokens.css).

**Critical insight:** The TC agent's job (Phases 0-4) is metaphor derivation and mechanism selection. It needs to KNOW the soul constraints to avoid incompatible metaphors, but it does NOT need the full CSS implementation details (like exact hex values, pixel spacing scales, or CPL calculation formulas). It needs the STRUCTURAL IMPLICATIONS of the soul, not the CSS values.

### 3B. Container Width Guidance (MASSIVE DUPLICATION)

Lines 912-948 (37 lines) contain detailed container width enforcement with CSS examples. This is builder-side guidance. The TC agent needs exactly ONE line: "Container width 940-960px is non-negotiable. No metaphor may demand a narrower container."

Lines 1942-1976 (35 lines) in the Builder Guardrail Appendix repeat the same container width guidance with MORE examples. This section is standalone-mode-only (builder instructions appended to Output A), and in sub-skill mode the builder gets this from `conventions-brief.md`.

### 3C. Perceptual Guardrails (BUILDER CONTENT in TC skill)

Lines 844-1017 (174 lines!) contain:
- Content proportion guardrails (850-856)
- Typographic spacing guardrails (858-866)
- Compression/density guardrails (870-872)
- CPL calculation formula with examples (875-911)
- Container width guardrails with CSS examples (912-948)
- Heading spacing enforcement with CSS examples (952-1001)

**These are BUILDER guardrails, not TC agent guardrails.** The TC agent derives a metaphor and selects mechanisms. It does not write CSS. It does not need CPL calculation formulas or heading spacing CSS examples.

What the TC agent DOES need from this section:
- Know that container width is 940-960px (1 line)
- Know that backgrounds must differ by >=15 RGB between zones (1 line)
- Know that letter-spacing must be >= 0.025em to count (1 line)
- Know that transitions should be "changing state" not "empty space" (1 line)
- Know padding floors (32px minimum) so metaphor doesn't demand impossible compression (1 line)

**174 lines of builder guardrails could be compressed to ~8 lines of TC-relevant constraints.**

### 3D. Mechanism Deployment Rules (PARTIALLY DUPLICATED)

Lines 1046-1068 contain per-category mechanism minimums (S:1+, H:1+, C:1+, D:1+, N:1+) and justification requirements. This is LEGITIMATELY TC agent content -- it's needed for Phase 4 mechanism selection. But the same rules also appear in `conventions-brief.md`.

### 3E. Anti-Scale Model (BUILDER CONTENT)

Lines 824-842 (19 lines) contain the anti-scale model: `RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE`. This is an evaluation function for CSS decisions. The TC agent does not make CSS decisions. The builder does.

The TC agent needs to know richness is multiplicative (for metaphor selection), but the concrete CSS self-checks ("Comment out your CSS line by line") are builder instructions.

### 3F. Transition Grammar (PARTIALLY DUPLICATED)

Lines 1413-1433 contain transition grammar tables (SMOOTH/BRIDGE/BREATHING with CSS values). The CSS values are builder content. The semantic basis (when to use each type) is TC content (helps zone architecture planning in Phase 3.5Z).

---

## 4. Input Budget Analysis

### TC Agent Total Input in Sub-Skill Mode

| File | Lines | Tokens (est.) | Role |
|------|-------|---------------|------|
| TC SKILL.md | 2,006 | ~28,000 | Process instructions |
| Content (varies) | 300-1,000 | 4,000-14,000 | Input content |
| mechanism-catalog.md | 1,218 | ~17,000 | Phase 4 vocabulary |
| **TOTAL** | **3,524-4,224** | **~49,000-59,000** | |

### Effective Content in Sub-Skill Mode

| Category | Lines | % of TC Skill |
|----------|-------|---------------|
| Phase 0 (Content Assessment) | 77 | 3.8% |
| Phase 1 (Multi-Axis Questioning) | 86 | 4.3% |
| Phase 2 (Tension Derivation) | 189 | 9.4% |
| Phase 3 (Metaphor Collapse) | 328 | 16.4% |
| Phase 3.5 (Commitment + Zone Arch) | 73 | 3.6% |
| Phase 4 (Compositional Layout) | 597 | 29.8% |
| Phase 4.5 (Sub-Skill Output) | 44 | 2.2% |
| **Effective total (Phases 0-4.5)** | **1,394** | **69.5%** |
| **Dead/standalone content** | **318** | **15.9%** |
| **Builder content in TC skill** | **~294** | **14.7%** |

### Absorption Assessment

The TC agent processes ~49,000-59,000 tokens of input. Research findings indicate:

1. **75-line builder visibility cap problem:** The flagship retrospective found that builders only absorb ~13% of a large prompt. The TC agent faces the same problem -- 2,006 lines means critical instructions in Phase 3.5 (metaphor commitment) or Phase 4.5 (sub-skill output format) may be skimmed.

2. **Front-loading bias:** LLMs attend more to content near the beginning and end of a prompt. Phases 0-2 (at the top) are well-absorbed. Phase 4.5 (sub-skill output, at line 1627) is in the "middle zone" where attention flags.

3. **Noise-to-signal degradation:** 294 lines of builder-specific content (CPL formulas, CSS examples, heading spacing enforcement) that the TC agent will never use create noise that dilutes the signal of content it DOES need.

**Estimated effective absorption: 50-65% of TC skill content.** The TC agent likely skims Phase 4 guardrails, misses some builder-specific nuances (irrelevant), and may under-attend to Phase 4.5 output format (critical).

---

## 5. Minimum Viable TC Skill (Sub-Skill Mode Only)

### What the TC Agent Actually Needs

**MUST HAVE (process):**
- Critical principle (construction, not discovery): 15 lines
- Phase 0 (content assessment, scope, sections, pipeline entry): 60 lines
- Phase 1 (multi-axis questioning, all axes, interaction effects): 80 lines
- Phase 2 (tension derivation, Addition Test, richness formula, selection protocol): 150 lines
- Phase 3 (metaphor collapse, structural extraction, search heuristics, domain menu): 200 lines
- Phase 3.5 (composite scoring, metaphor quality rubric, 6 rejection checks): 150 lines
- Phase 3.5 commitment gate: 50 lines
- Phase 3.5Z zone architecture: 12 lines
- Phase 4.0-4.3 (mechanism selection, property extraction, coherence checking): 200 lines
- Phase 4.5 (sub-skill output format): 44 lines

**MUST HAVE (constraints, compressed for TC agent):**
- Soul constraints summary (not full CSS, just structural implications): 15 lines
- Perceptual constraint summary (container, RGB delta, spacing floors): 10 lines

**CAN REMOVE:**
- Phase 4.0 full perceptual guardrails with CSS examples: -174 lines
- Phase 4.0A anti-scale model CSS self-checks: -12 lines
- Phase 4.2 full translation grammar lookup table: -80 lines (keep 20-line summary)
- Phase 4.2B pacing prediction: -40 lines (move to builder; TC doesn't write CSS)
- Phase 4.2C rhythm variation: -28 lines (builder responsibility)
- Phase 4.4-4.5 component inventory + adapt-vs-invent: -30 lines (builder decision)
- Phase 4.7 fractal consistency gate (builder verification): -33 lines
- Phase 4.7B landmark completeness gate (builder verification): -58 lines
- Phase 4.8 section-aware composition (builder): -10 lines
- Phase 4.9 tokenization self-check (builder): -74 lines
- Phase 5 entire (standalone only): -52 lines
- Edge Cases (standalone reference): -29 lines
- Phase 5 Divergence Verification (standalone only): -97 lines
- Test Content Recommendations (standalone reference): -19 lines
- Invocation (standalone): -12 lines
- Appendix: Builder Warnings (standalone): -89 lines
- Appendix: Test Results (standalone reference): -14 lines
- Duplicate soul constraints (detailed CSS): -100 lines (replace with 15-line summary)

### Estimated Minimum Viable TC Skill

| Section | Lines |
|---------|-------|
| Critical Principle | 15 |
| Phase 0 | 60 |
| Phase 1 | 80 |
| Phase 2 | 150 |
| Phase 3 | 200 |
| Phase 3.5 (scoring + commitment + zone arch) | 210 |
| Phase 4 (mechanism selection, compressed) | 180 |
| Phase 4.5 (sub-skill output) | 44 |
| Constraint summary | 25 |
| **TOTAL** | **~964** |

**Reduction: 2,006 -> ~964 lines (52% cut)**

The TC agent's total input would become: 964 (skill) + 300-1,000 (content) + 1,218 (mechanism catalog) = 2,482-3,182 lines (~35,000-44,000 tokens). Much more absorbable.

---

## 6. Recommendation: TRIM In-Place vs Separate File

### Option A: Trim the skill in place

**Pros:**
- Single source of truth
- No routing logic needed
- Existing references stay valid

**Cons:**
- Standalone invocation (`/tension-composition` directly) loses Phase 5 guidance
- Need to add Phase 5 back if standalone mode is ever used again

### Option B: Create `tc-subskill.md` (sub-skill only, ~964 lines)

**Pros:**
- Clean separation of concerns
- Standalone skill preserved unchanged for direct invocation
- TC agent reads only what it needs

**Cons:**
- Two files to maintain
- Risk of drift between them
- `/build-page` must update its agent spawn to reference the new file

### Option C: Trim in-place + standalone appendix (RECOMMENDED)

**Structure:**
```
SKILL.md (~964 lines)
  - Phases 0-4.5 (sub-skill mode, the PRIMARY use case)
  - Compressed constraint summary (15 lines replacing 120 lines of soul duplication)
  - Builder-relevant sections REMOVED (they live in conventions-brief.md)

STANDALONE-APPENDIX.md (~400 lines, optional read)
  - Phase 5: Output (conventions brief + HTML generation)
  - Phase 5: Divergence Verification
  - Builder Instruction Warnings (R6 appendix)
  - Edge Cases
  - Test Content Recommendations
  - Test Results Summary
```

**How invocation works:**
- `/build-page` -> TC agent reads SKILL.md (964 lines) -- no change to orchestrator
- `/tension-composition` (standalone) -> TC agent reads SKILL.md + STANDALONE-APPENDIX.md -- skill frontmatter updated to reference both

**Rationale:**
1. The PRIMARY use case is sub-skill mode via `/build-page`. Optimize for that.
2. Standalone mode is rare and may not even be used again, but preserving it costs nothing.
3. No routing logic needed -- the agent either reads 1 file or 2.
4. Builder-specific content (CPL formulas, heading spacing CSS, tokenization checks, fractal gate verification, landmark completeness gate) ALREADY LIVES in `conventions-brief.md` and `gate-runner.md`. Removing it from TC skill is deduplication, not information loss.
5. Stale file paths (`/active/design-system/...`) get fixed in the trim.

### Summary Table

| Metric | Current | After Trim (Option C) | Delta |
|--------|---------|----------------------|-------|
| TC skill lines | 2,006 | ~964 | -52% |
| TC agent total input (lines) | 3,524-4,224 | 2,482-3,182 | -30% |
| TC agent total input (tokens) | ~49K-59K | ~35K-44K | -29% |
| Builder-specific content in TC skill | ~294 lines | 0 lines | -100% |
| Standalone-only content in TC skill | 318 lines | 0 lines (moved to appendix) | -100% |
| Soul constraint duplication | ~120 lines | ~15 lines | -88% |
| Stale file paths | ~8 | 0 | -100% |
| Estimated TC agent absorption | 50-65% | 70-85% | +20pp |

### Priority of Changes

1. **HIGH -- Fix stale file paths** (~8 paths). TC agent wastes tokens on failed reads.
2. **HIGH -- Remove builder-specific content** (294 lines). Pure noise for TC agent.
3. **MEDIUM -- Remove standalone-only content** (318 lines). Not harmful (gate works) but wastes token budget.
4. **MEDIUM -- Compress soul constraint duplication** (120 -> 15 lines). TC needs structural implications, not CSS values.
5. **LOW -- Compress Phase 4 translation grammar** (80 -> 20 lines). Lookup tables useful but verbose.
