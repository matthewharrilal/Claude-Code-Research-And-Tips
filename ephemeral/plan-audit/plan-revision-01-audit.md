# Plan Revision 01 Audit: Comprehensive Gap Analysis

**Auditor:** plan-auditor (plan-revision team)
**Date:** 2026-02-15
**Target:** `~/.claude/plans/snazzy-skipping-garden.md` (THE PLAN being audited)
**References:**
- `ephemeral/session-insights/14-master-execution-prompt.md` (1,326 lines ENRICHED)
- `ephemeral/session-insights/16-final-enrichment-recommendations.md` (G1-G11 enrichments)
- All session-insight files (02, 04, 08, 12, 13, audit-01)

**Verdict:** Plan is STRUCTURALLY SOUND but ENRICHMENT-BLIND. Reflects pre-G1-G11 state of master prompt (~1,183 lines). Needs 11 enrichment additions + line number corrections.

---

## SECTION 1: LINE NUMBER CORRECTIONS

### Finding 1.1: ALL Line References Are Off-By-~143 Lines

**Problem:** The plan references the ORIGINAL master prompt (pre-enrichment, ~1,183 lines). The ENRICHED master prompt is 1,326 lines (after G1-G11 additions).

**Evidence:**

| Plan Section | Plan Line Ref | Actual Line (Enriched) | Delta |
|--------------|---------------|------------------------|-------|
| Section 1.1 (KortAI identity) | Lines 23-101 | Lines 23-101 | ✓ (no change, this section unchanged) |
| Section 1.4 (Tier Model) | Lines 64-72 | Lines 64-88 | +16 (G1 added 10 lines, G2 added 10 lines) |
| Section 2.1 (Current Skill State) | Line 787 | Line 787 | ✓ (no change, skill refs unchanged) |
| Section 3 (Prerequisites) | Lines 159-252 | Lines 159-252 | ✓ (no change) |
| Section 4.5 (Interaction Rigidity) | Lines 974-993 | Lines 974-993 | ✓ (NEW section, G5 added) |
| Section 6 (CHECKPOINT) | Lines 1092-1176 | Lines 1122-1152 | +30 (G4 replaced section) |

**Recommendation:** Line references in Sections 1.4, 4.5, 6 need updating to reflect enriched prompt.

---

### Finding 1.2: G4 (Decision Matrix) Changed CHECKPOINT Section Structure

**Plan Text (Lines 131-144):**
> "The checkpoint decision matrix (lines 1137-1144) is well-designed. It maps 4 possible outcomes..."

**Actual Enriched Text (Lines 1137-1144):**
G4 REPLACED the checkpoint section. The decision matrix now includes:
- 4 criteria (container width, fractal coherence, engagement threshold, novelty check)
- 4x4 decision matrix (Engagement × Novelty → 4 decision paths)
- "When experiment contradicts predictions" framework (8 lines, G9)

**Gap:** Plan references the OLD checkpoint structure. The enriched version has MORE detail (4 criteria instead of vague "checkpoint," decision matrix for contradictions).

**Recommendation:** Update Section 2.4 "CHECKPOINT: Deliver to User for Review" to reference the G4-enriched decision matrix.

---

## SECTION 2: MISSING ENRICHMENT REFERENCES (G1-G11)

### GAP 2.1: G1 (Technique Count = Proxy, Not Target) — CRITICAL CAVEAT MISSING

**What G1 Added (Lines 73-88 in enriched prompt):**
```markdown
**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count.
```

**Plan Reference:** Section 1.4 (Tier Model) discusses tier table but does NOT mention the count-as-proxy caveat.

**Impact:** Without G1, the executing agent might treat "8-10 mechanisms" as a TARGET (Goodhart's Law). G1 prevents this by framing counts as NATURAL LANDING ZONES, not goals.

**Recommendation:** ADD to Section 1.4 analysis:
```markdown
**TENSION:** Tier-methodologist says tiers are "calibrated bets, not descriptive facts." The ENRICHED master prompt addresses this with G1 (mechanism count = proxy, not target). The plan should note that tier counts are NATURAL LANDING ZONES, not compliance targets.
```

---

### GAP 2.2: G2 (Middle = Hypothesis, Not Validated Fact) — ALREADY IN PLAN

**What G2 Added (Lines 84-88 in enriched prompt):**
Middle tier has NEVER been built. Vocabulary-vs-library distinction is tested in THEORY but untested in PRACTICE.

**Plan Reference:** Section 1.4 "Tier Model" already says:
> "Tier-methodologist says tiers are 'calibrated bets, not proven specifications.'"

**Status:** ✓ COVERED. The plan already incorporates the hypothesis framing (predates G2).

---

### GAP 2.3: G3 (Semantic CSS Examples) — MISSING FROM M6 SECTION

**What G3 Added (Lines 665-715 in enriched prompt):**
Two concrete examples (section padding progression, border-weight gradient) showing SEMANTIC vs ARBITRARY value selection.

**Plan Reference:** Section 4.2.1 "M6: Add Semantic Value Justification" does NOT reference these examples.

**Impact:** Without concrete examples, M6 is ABSTRACT. Builders won't know what "semantic justification" looks like in practice.

**Recommendation:** ADD to Section 4.2.1 (M6):
```markdown
**Concrete Examples (from G3):**
- Example 1: Section padding progression (CRESCENDO pattern, 64→32→16 exponential compression)
- Example 2: Border-weight gradient (geological metaphor, 40px bedrock sparse vs 16px topsoil dense)
**Source:** Lines 665-715 in enriched master prompt
```

---

### GAP 2.4: G4 (Experiment Decision Matrix) — PLAN REFERENCES OLD CHECKPOINT

**What G4 Changed (Lines 211-238 in enriched prompt):**
Replaced the old checkpoint section with:
- 4 explicit validation criteria (container width, fractal, engagement, novelty)
- 4x4 decision matrix (Engagement × Novelty → different next steps)
- "When experiment contradicts predictions" framework

**Plan Reference:** Section 2.4 "CHECKPOINT: Middle-Tier Experiment" says:
> "Deliver the modified skill files and documentation changes to the user. The Middle-tier experiment is a SEPARATE effort."

**Gap:** Plan does NOT reference the 4 criteria or decision matrix. It treats the checkpoint as a simple handoff, not a structured evaluation.

**Recommendation:** REPLACE Section 2.4 with G4 text:
```markdown
**CHECKPOINT: Middle-Tier Experiment**

Deliver modified skill files. The Middle-tier experiment is SEPARATE.

**What the experiment validates (4 criteria):**
1. Container width compliance (BINARY): 940-960px at 1440px viewport
2. Fractal coherence (BINARY for Middle): Page + Component scales with CSS evidence
3. Engagement threshold (SUBJECTIVE): "Designed" vs "formatted" feeling
4. Novelty check (CRITICAL): Novel composition vs derivative of showcase pages

**Decision matrix after experiment:**
| Engagement | Novelty | Decision |
|-----------|---------|----------|
| Designed | Novel | PROCEED to Wave 2 |
| Designed | Derivative | REVISE M1, consult user before Wave 2 |
| Under-designed | Novel | Tier boundary may be wrong, consult user |
| Under-designed | Derivative | Current skill insufficient, Wave 1 validated |

**Source:** G4 enrichment (lines 211-238)
```

---

### GAP 2.5: G5 (Type 5 Interaction Checks) — SECTION 4.5 MISSING FROM PLAN

**What G5 Added (Lines 974-993 in enriched prompt):**
Section 4.5: INTERACTION RIGIDITY CHECKS (Type 5A/5B/5C framework)

**Plan Reference:** The plan does NOT mention Section 4.5 at all.

**Impact:** Without Section 4.5, the executing agent won't check for:
- Type 5A (contradictory): PRE-1 must precede M1
- Type 5B (multiplicative): M1 × M2 overhead monitored via tier-gating
- Type 5C (Goodhart): Technique count metric REJECTED

**Recommendation:** ADD new section to plan after Section 4 (Skill Modifications):
```markdown
### Section 4.5: Interaction Rigidity Checks

**Source:** G5 enrichment (lines 974-993)

Before finalizing modifications, check for compound effects:

**Type 5A (Contradictory):** Do two modifications CONFLICT?
- Test: Can you satisfy BOTH simultaneously?
- Resolved: M2 (fractal via width compression) + M3 (940px minimum) — use spacing compression instead
- Resolved: PRE-1 (category labels) must precede M1 (per-category selection)

**Type 5B (Multiplicative):** Do two modifications create exponential overhead?
- Test: Modification A × Modification B = how many decision points?
- Mitigated: M1 (8 mechanisms) × M2 (4 scales) = 32 combinations — REDUCED by tier-gating (Middle only 2 scales = 16 max)
- Watch: If Middle-tier overhead exceeds 25 minutes of documentation, simplify M6

**Type 5C (Goodhart's Law):** Do two modifications change each other's purpose?
- Test: Does combining them make one become a TARGET instead of MEASURE?
- Avoided: M1 uses per-category PRESENCE (binary), not mechanism COUNT (gameable)
- Avoided: Technique count metric REJECTED for this reason
```

---

### GAP 2.6: G6 (Why Per-Category Beats Raw Count) — MISSING FROM M1 SECTION

**What G6 Added (Lines 283-299 in enriched prompt):**
4 specific failure modes of "minimum 8" approach:
1. Arbitrary number (why 8, not 7 or 9?)
2. Goodhart's Law (count becomes target)
3. Padding incentive (forced to add 3 weak mechanisms)
4. Content scope blindness (short content can't support 8)

**Plan Reference:** Section 4.1.1 "M1: Replace 'Sample 2-4'" does NOT explain WHY per-category is better than raw count.

**Recommendation:** ADD to Section 4.1.1 (M1):
```markdown
**Why per-category minimum, not raw count (from G6):**

1. **Arbitrary number:** Why 8 and not 7 or 9? No empirical basis.
2. **Goodhart's Law:** Count becomes target. Builder deploys to satisfy number, not content.
3. **Padding incentive:** If content produces 5 strong fits, mandate forces 3 weak ones.
4. **Content scope blindness:** Short content (<300 words) cannot support 8 mechanisms.

Per-category minimum achieves breadth (all 5 families) without these failure modes. Natural landing: 5-10 mechanisms depending on content scope.

**Short content calibration:** Content <300 words at ANY tier uses Floor requirement only (5 mechanisms from component inventory). Per-category minimum assumes standard/long content (500+ words).

**Source:** G6 enrichment (lines 283-299)
```

---

### GAP 2.7: G7 (Step Numbering Collision: 4.2B) — MISSING FROM M6 SECTION

**What G7 Added (Lines 618 in enriched prompt):**
**NUMBERING NOTE:** The current skill already has Step 4.2B (Pacing Prediction Heuristic) at approximately line 946. INSERT this new section as Step 4.2A (before existing 4.2B), OR renumber existing 4.2B to 4.2C and insert this as 4.2B. Either approach works; ensure existing Pacing Prediction content is preserved.

**Plan Reference:** Section 4.2.1 "M6: Add Semantic Value Justification" says to insert at "Phase 4.2 (Translation Grammar), after lookup tables" but does NOT mention the collision.

**Impact:** Without G7, the executing agent will CREATE A DUPLICATE Step 4.2B, breaking the skill's numbering.

**Recommendation:** ADD to Section 4.2.1 (M6) LOCATION description:
```markdown
**LOCATION:** Phase 4.2 (Translation Grammar), after lookup tables (~line 900)

**NUMBERING NOTE (G7):** The current skill already has Step 4.2B (Pacing Prediction Heuristic) at line 946. INSERT this new section as Step 4.2A (before existing 4.2B), OR renumber existing 4.2B to 4.2C and insert this as 4.2B. Either approach works; ensure existing Pacing Prediction content is preserved.
```

---

### GAP 2.8: G8 (Container Width Escape Hatch) — MISSING FROM M3 SECTION

**What G8 Added (Lines 466-473 in enriched prompt):**
**ESCAPE HATCH — When Metaphor Demands Narrowness:**

Some metaphors conceptually demand narrow presentation. The rule is "never narrow the CONTAINER" — internal padding achieves narrow aesthetics:
- Container at 960px + padding at 120px each side = 720px content width
- Manuscript aesthetic achieved WITHOUT violating 940-960px container

**Plan Reference:** Section 4.1.2 "M3: Add Container Width NON-NEGOTIABLE" does NOT mention the escape hatch.

**Impact:** Without G8, builders with legitimate narrow metaphors (manuscript pages, cylindrical cores) will either:
- Abandon the metaphor (losing richness)
- Violate the rule (failing validation)

**Recommendation:** ADD to Section 4.1.2 (M3) after the CRITICAL PRINCIPLE paragraph:
```markdown
**ESCAPE HATCH (G8) — When Metaphor Demands Narrowness:**

Some metaphors conceptually demand narrow presentation. The rule is "never narrow the CONTAINER" — internal padding achieves narrow aesthetics:
- Container at 960px + padding at 120px each side = 720px content width
- Manuscript aesthetic achieved WITHOUT violating 940-960px container

Phase D violations all REDUCED container width (700-800px) instead of using internal padding. M3 prevents the former while enabling the latter.

**Source:** G8 enrichment (lines 466-473)
```

---

### GAP 2.9: G9 (Decision Criteria for Experiment Outcomes) — MISSING FROM PLAN

**What G9 Added (Lines 360-366 in enriched prompt):**
**When experiment contradicts predictions:**

- **Modify the SKILL** when a concrete instruction consistently produces a measurable failure
- **Modify the METHODOLOGY** when the process structure prevents discovery
- **Modify the TIER MODEL** when results contradict tier boundary predictions
- **Do NOT modify** when results match predictions within acceptable variance

**Plan Reference:** The plan does NOT provide guidance for what to do when the Middle experiment produces UNEXPECTED results.

**Impact:** Without G9, the executing agent has no framework for responding to:
- Middle produces derivative output (contradicts novelty hypothesis)
- Middle feels under-designed (contradicts engagement hypothesis)
- Middle produces convergence (contradicts vocabulary-vs-library hypothesis)

**Recommendation:** ADD to Section 2.4 (CHECKPOINT) after the decision matrix:
```markdown
**When experiment contradicts predictions (G9):**

- **Modify the SKILL** when a concrete instruction consistently produces a measurable failure (e.g., "sample 2-4" → low mechanism count)
- **Modify the METHODOLOGY** when the process structure prevents discovery (e.g., single-pass misses audit-fix opportunities)
- **Modify the TIER MODEL** when results contradict tier boundary predictions (e.g., Middle achieves "place" feeling → Ceiling ambition shifts)
- **Do NOT modify** when results match predictions within acceptable variance

**Source:** G9 enrichment (lines 360-366)
```

---

### GAP 2.10: G10 (Mechanism Combination Explanations) — MISSING FROM M7 SECTION

**What G10 Added (Lines 387-396 in enriched prompt):**
**Why these combinations work (perceptual alignment principle):**

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels:

- **Hierarchy Triad:** All three encode "importance" through MAGNITUDE (thick borders + generous spacing + large type = important)
- **Depth Triple:** All three encode "consolidation" (weight + density + background lightness align perceptually)
- **Density Triple:** All three encode "breathing" vs "packing" (padding + margins + background zones shift together)

Combinations FAIL when channels CONTRADICT: sparse padding + dense dark background = conflicting perceptual signals.

**Plan Reference:** Section 4.2.2 "M7: Add Mechanism Combination Guidance" lists the 6 proven combinations but does NOT explain WHY they work.

**Impact:** Without G10, builders don't understand the PERCEPTUAL ALIGNMENT PRINCIPLE. They might:
- Copy combinations blindly (template convergence)
- Create contradictory combinations (sparse padding + dense background)
- Miss opportunities for novel combinations

**Recommendation:** ADD to Section 4.2.2 (M7) after the proven combination families table:
```markdown
**Why these combinations work (perceptual alignment principle — G10):**

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels:

- **Hierarchy Triad:** All three encode "importance" through MAGNITUDE (thick borders + generous spacing + large type = important)
- **Depth Triple:** All three encode "consolidation" (weight + density + background lightness align perceptually)
- **Density Triple:** All three encode "breathing" vs "packing" (padding + margins + background zones shift together)

Combinations FAIL when channels CONTRADICT: sparse padding + dense dark background = conflicting perceptual signals.

**Source:** G10 enrichment (lines 387-396)
```

---

### GAP 2.11: G11 (DOC-5 Expansion) — MISSING FROM PLAN

**What G11 Added (Lines 415-438 in enriched prompt):**
**DOC-5: Fix Fresh-Eyes Confusions in Entry Point (MEDIUM) — EXPANDED**

6 actions (expanded from original 4):
1. Add acronym legend
2. Add inline definitions
3. Expand Always-Load Protocol (from abstract to concrete)
4. Add Name Test + Transfer Test definitions
5. Clarify "which 8-10 mechanisms" confusion
6. Add historical context for "sample 2-4" warning

**Plan Reference:** The plan does NOT mention DOC-5 at all (documentation modifications are mentioned generically but not specified).

**Impact:** Without G11, the executing agent won't address the 24 fresh-eyes confusions identified in 10-fresh-eyes-review.md.

**Recommendation:** ADD to Phase 2 (Documentation Modifications):
```markdown
**Step 2.5: DOC-5 — Fix Fresh-Eyes Confusions** (MEDIUM)

**File:** `ephemeral/doc-enrichment/03-ENTRY-POINT.md`

**Actions (6 items, expanded from original 4 per G11):**

1. **Add acronym legend** after "WHERE WE ARE" section:
   - DD/OD/AD/CD = Density Diversity / Operational Depth / Axis Diversity / Combination Diversity
   - PA = Perceptual Audit, CPL = Compositional Layout
   - CRESCENDO/F-PATTERN/BENTO/PULSE = density pattern names
   - Phase D, Variant B, Track 1/Track 2 brief definitions

2. **Add inline definitions** for Phase D, Variant B, Content Adversary, Addition Test at first mention

3. **Expand Always-Load Protocol** from abstract to concrete: prohibitions.md (353 lines, focus lines 19-176 ABSOLUTE section) + tokens.css (174 lines, focus lines 1-85 IMMUTABLE section) = 527 lines total mandatory reading

4. **Add Name Test + Transfer Test definitions** with concrete examples:
   - Name Test: Remove metaphor name. Does mechanism still make sense?
   - Transfer Test: Does mechanism work with a DIFFERENT metaphor?

5. **Clarify "which 8-10 mechanisms"** confusion: read full catalog, identify 1+ per category, justify each

6. **Add historical context** for "sample 2-4" warning: why this old rule exists, why it was replaced

**Source:** G11 enrichment (lines 415-438)
```

---

## SECTION 3: MISSING SESSION-INSIGHTS NUANCE

### NUANCE 3.1: 31 Missed Modifications (From audit-01) — PLAN ONLY COVERS 11

**Evidence:** `audit-01-modification-audit.md` identifies 42 total modifications:
- 11 captured in 08-skill-enrichment-plan.md (M1-M11) ✓
- 31 missed/additional modifications ✗

**Plan Coverage:** The plan covers M1-M11 (skill modifications) but does NOT mention:
- MOD-R1: Add mechanism category labels to catalog (BLOCKING for R7)
- MOD-R2: Split Phase 3.5 into Phase 3.5 + Phase 4.5 (temporal contradiction)
- MOD-R3: Add error recovery protocol (Type 2 rigidity gap)
- MOD-T2: Create mechanism combination catalog (NEW file)
- MOD-D1: Update root navigation staleness (3 files)
- MOD-F1-F24: 24 builder confusion points

**Impact:** The plan executes 11/42 modifications (26%). The remaining 74% are documentation enrichments, anti-gravity additions, and process fixes that the plan doesn't address.

**Recommendation:** The plan should NOTE that it covers skill modifications only (M1-M11) and that 31 additional modifications exist in audit-01 but are OUT OF SCOPE for this plan.

---

### NUANCE 3.2: 9-Agent Session-Enrichment Team (Not 6-Agent Reflection Team)

**Plan Text (Line 5):**
> "A 6-agent reflection team (1,219 lines across 6 documents in `ephemeral/doc-reflection/`) deeply analyzed..."

**Actual Context:**
- 9-agent session-enrichment team (session-insights/00 through 13)
- 5-agent prompt-enrichment-audit team (session-insights/audit-01 through 16)
- 6-agent richness-research team (ephemeral/richness-research/)
- 6-agent rigidity-research team (ephemeral/rigidity-research/)

**Total:** 26 agents across 4 teams, not 6 agents.

**Recommendation:** Update Line 5 to reflect correct team composition:
```markdown
A 9-agent session-enrichment team + 5-agent prompt-enrichment-audit team (14 agents total, 1,800+ lines across 17 documents in `ephemeral/session-insights/`) deeply analyzed the project's worldview, architecture, tier model, richness research, rigidity research, and cross-cutting meta-patterns. This plan cross-references every section of the master prompt against the session-enrichment findings, flags tensions, and produces an execution-ready plan.
```

---

### NUANCE 3.3: Tier Model Table — Category Names Evolved

**Plan Text (Line 21):**
> "HANDOFF.md uses (Spatial, Temporal, Material, Behavioral, Relational). Master prompt uses (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). These are DIFFERENT taxonomies."

**Enriched Prompt Text (Lines 172-210):**
The enriched master prompt provides the full category assignment table with ALL 18 mechanisms categorized.

**Gap:** The plan notes the inconsistency but doesn't provide the AUTHORITATIVE category assignment (which is in the enriched prompt at lines 172-210).

**Recommendation:** ADD to Section 1.4 analysis:
```markdown
**Category name resolution (from enriched prompt lines 172-210):**
The master prompt's 5 categories are operationally correct and grounded in actual mechanism assignments:

| Category | Mechanisms |
|----------|-----------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap |
| **Structure/Navigation** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table |

**USE these categories** (from enriched prompt), not HANDOFF's abstract names.
```

---

## SECTION 4: SPARSE SECTIONS NEEDING DETAIL

### SPARSE 4.1: Section 2.3 "PRE-2: Resolve Phase 3.5 Temporal Contradiction"

**Current Plan Text (Lines 219-228):**
> "Resolution: The 'strengthened Phase 3.5' is actually TWO gates: Phase 3.5 (Metaphor lock + divergence check, NO mechanism info needed) and Phase 4.5 (NEW): Mechanism selection gate + category diversity check (AFTER Phase 4 mechanism selection). This is NOT a separate modification — it is handled within M2 (fractal gate) and M1 (per-category minimum)..."

**Gap:** This section says "no file change needed" but MOD-R2 (from audit-01) says this IS A CRITICAL BLOCKING MODIFICATION requiring Phase 3.5 split.

**Enriched Prompt Doesn't Resolve This:** The enriched master prompt does NOT include a Phase 3.5 split. It assumes PRE-2 is resolved within M1/M4 placement.

**Recommendation:** This is a REAL GAP. The plan should ADD:
```markdown
**CRITICAL:** This resolution assumes M1 (per-category) and M4 (domain family check) are placed such that the temporal contradiction doesn't arise. HOWEVER, audit-01 (MOD-R2) identifies this as a BLOCKING modification requiring explicit Phase 3.5 → Phase 3.5 + Phase 4.5 split.

**Decision needed from team-lead:** Accept plan's implicit resolution (M1 in Phase 4, M4 in Phase 3.5) OR adopt audit-01's explicit split (create Phase 4.5 gate)?
```

---

### SPARSE 4.2: Section 3.2 "M5 — Tier Routing" Detail Level

**Current Plan Text (Lines 286-351):**
Provides the tier classification table and pattern selection table.

**Gap:** Does NOT reference:
- 12-middle-tier-quickstart.md (575 lines, self-contained Middle-tier build guide)
- Step 0D insertion LOCATION (after Step 0C, renumber current 0D to 0E)
- Hybrid content note (from enriched prompt lines 565-566)

**Recommendation:** ADD to Section 1.3 (M5):
```markdown
**Hybrid content note (from enriched prompt):**
"If content is hybrid (e.g., tutorial with embedded reference), select the DOMINANT pattern. Hybrid pattern composition is a Ceiling-tier capability."

**Middle-tier builder support:**
A 575-line quick-start guide exists at `ephemeral/session-insights/12-middle-tier-quickstart.md` providing self-contained Middle-tier build instructions. This guide should be referenced in Step 0D for builders unfamiliar with the tier model.

**Step numbering:**
- Current Step 0D (Library Access Prohibition) will be RENAMED to Step 0E
- New Step 0D (Tier Classification) will be INSERTED before current 0D
```

---

## SECTION 5: SPECIFIC REVISION TEXT

### REVISION 5.1: Update Section 1.4 (Tier Model) with G1+G2

**CURRENT TEXT (Lines 64-83):**
```markdown
## 1.4 The Tier Model

Research established four tiers for page complexity:

| Tier | Mechanisms | Metaphor? | Build Time | CSS Lines | Pages |
|------|-----------|-----------|------------|-----------|-------|
| **Floor** | 5 | No | 30-45 min | 150-250 | 10-20% |
| **Middle** (DEFAULT) | 8-10 | No | 70-100 min | 350-500 | 40-50% |
| **Ceiling** | 12-15 | Yes | 150-220 min | 700-1000 | 20-30% |
| **Flagship** | 16-18 | Yes + multi-pattern | 240-400 min | 1000-1500 | 5-10% |

**Middle tier is the recommended universal floor.** The Floor-to-Middle transition has highest ROI (3-4x richness for +45 min).
```

**REVISED TEXT (with G1+G2):**
```markdown
## 1.4 The Tier Model

Research established four tiers for page complexity:

| Tier | Mechanisms | Metaphor? | Build Time | CSS Lines | Pages |
|------|-----------|-----------|------------|-----------|-------|
| **Floor** | 5 | No | 30-45 min | 150-250 | 10-20% |
| **Middle** (DEFAULT) | 8-10 | No | 70-100 min | 350-500 | 40-50% |
| **Ceiling** | 12-15 | Yes | 150-220 min | 700-1000 | 20-30% |
| **Flagship** | 16-18 | Yes + multi-pattern | 240-400 min | 1000-1500 | 5-10% |

**Middle tier is the recommended universal floor.** The Floor-to-Middle transition has highest ROI (3-4x richness for +45 min).

**CRITICAL CAVEAT (G1) — Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

The per-category minimum (M1) works because it ensures vocabulary BREADTH (all 5 property families represented), not a specific COUNT. Natural landing zones emerge from breadth, not from number-targeting.

**VALIDATION STATUS (G2):**

These tier definitions come from backward-engineering showcase pages (DD-006, OD-004, CD-006) and Phase D variant profiles. Middle tier (8-10 mechanisms, no metaphor) has NEVER been built. The vocabulary-vs-library distinction (can mechanisms be reused freely without creating derivative output?) is tested in THEORY (Name Test, Transfer Test passed) but untested in PRACTICE.

The Middle-tier experiment is the critical test. Until validated, treat Middle tier specs as best hypothesis, not proven fact. The execution checkpoint (Section 6) correctly stops before assuming Middle works.

**Category name resolution (from enriched prompt lines 172-210):**
| Category | Mechanisms |
|----------|-----------|
| **Spatial** | #5, #6, #15 |
| **Hierarchy** | #1, #4, #11 |
| **Component** | #2, #9, #10, #17 |
| **Depth/Emphasis** | #3, #7, #16 |
| **Structure/Navigation** | #8, #12, #13, #14, #18 |

**USE these categories** (from enriched prompt), not HANDOFF's abstract names.
```

---

### REVISION 5.2: Update Section 4.1.1 (M1) with G6

**INSERT AFTER "Why needed" paragraph, BEFORE "CURRENT TEXT":**
```markdown
**Why per-category minimum, not raw count (from G6):**

1. **Arbitrary number:** Why 8 and not 7 or 9? No empirical basis for a specific count.
2. **Goodhart's Law:** Count becomes target. Builder deploys to satisfy number, not content.
3. **Padding incentive:** If content produces 5 strong fits, mandate forces 3 weak ones.
4. **Content scope blindness:** Short content (<300 words) cannot support 8 mechanisms.

Per-category minimum achieves breadth (all 5 families) without these failure modes. Natural landing: 5-10 mechanisms depending on content scope.

**Short content calibration:** Content <300 words at ANY tier uses Floor requirement only (5 mechanisms from component inventory). Per-category minimum assumes standard/long content (500+ words).
```

---

### REVISION 5.3: Update Section 4.1.2 (M3) with G8

**INSERT AFTER "This is the #1 Phase D failure mode" paragraph:**
```markdown
**ESCAPE HATCH (G8) — When Metaphor Demands Narrowness:**

Some metaphors conceptually demand narrow presentation. The rule is "never narrow the CONTAINER" — internal padding achieves narrow aesthetics:
- Container at 960px + padding at 120px each side = 720px content width
- Manuscript aesthetic achieved WITHOUT violating 940-960px container

Phase D violations all REDUCED container width (700-800px) instead of using internal padding. M3 prevents the former while enabling the latter.
```

---

### REVISION 5.4: Update Section 4.2.1 (M6) with G3+G7

**INSERT AFTER "Why This Is Better" section:**
```markdown
**Concrete Examples (from G3):**

**Example 1 -- Section Padding Progression (Middle Tier, Pattern Logic):**

ARBITRARY:
```css
.section--intro { padding: 48px 24px; }
.section--detail { padding: 40px 24px; }
.section--summary { padding: 32px 24px; }
/* "Padding decreases as page progresses" -- BUT WHY 48/40/32? */
```

SEMANTIC:
```css
.section--intro { padding: 64px 24px; }
  /* CRESCENDO intro: reader unfamiliar, needs orientation SPACE. 64px = maximum breathing. */
.section--detail { padding: 32px 24px; }
  /* CRESCENDO build: reader oriented, absorbing info. 50% compression from intro. */
.section--summary { padding: 16px 24px; }
  /* CRESCENDO peak: reader has full context. Minimum padding = densest section.
     RATIO: 64→32→16 = 4:2:1 exponential compression matching cognitive familiarity curve.
     Linear (48→40→32) would be arbitrary. Exponential encodes structure. */
```

**Key difference:** Arbitrary has pattern but no ratio justification. Semantic has pattern + ratio + content-structural reasoning.

**LOCATION NOTE (G7):** The current skill already has Step 4.2B (Pacing Prediction Heuristic) at approximately line 946. INSERT this new section as Step 4.2A (before existing 4.2B), OR renumber existing 4.2B to 4.2C and insert this as 4.2B. Either approach works; ensure existing Pacing Prediction content is preserved.
```

---

### REVISION 5.5: Update Section 4.2.2 (M7) with G10

**INSERT AFTER the proven combination families table:**
```markdown
**Why these combinations work (perceptual alignment principle — G10):**

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels:

- **Hierarchy Triad:** All three encode "importance" through MAGNITUDE (thick borders + generous spacing + large type = important)
- **Depth Triple:** All three encode "consolidation" (weight + density + background lightness align perceptually)
- **Density Triple:** All three encode "breathing" vs "packing" (padding + margins + background zones shift together)

Combinations FAIL when channels CONTRADICT: sparse padding + dense dark background = conflicting perceptual signals.
```

---

### REVISION 5.6: Replace Section 6 CHECKPOINT with G4 Text

**CURRENT TEXT (Lines 239-247):**
```markdown
### CHECKPOINT: Deliver to User for Review

At this point, Wave 1 modifications + PRE-1 are complete. The skill now supports:
- Tier-based pipeline routing (Middle skips Phases 1-3)
- Container width enforcement (prevents #1 failure mode)
- Fractal coherence gate (binary enforcement replaces advisory check)
- Tier deployment level framing (individual → combination → multi-pattern)

**The Middle-tier experiment can now proceed with the modified skill.** Wave 2 and Wave 3 are DEFERRED until after the experiment, per the experiment-first methodology.
```

**REVISED TEXT (with G4+G9):**
```markdown
### CHECKPOINT: Middle-Tier Experiment

**THIS IS WHERE SKILL MODIFICATION EXECUTION STOPS.** Deliver the modified skill files and documentation changes to the user. The Middle-tier experiment is a SEPARATE effort — it is NOT part of this prompt's execution scope. The user will build the experiment separately after reviewing and approving the skill modifications.

**What the experiment validates (4 criteria):**

1. **Container width compliance (BINARY):** 940-960px at 1440px viewport. 100% compliance expected. If violated, M3 needs enforcement strengthening.

2. **Fractal coherence (BINARY for Middle):** Page scale + Component scale demonstrate same density pattern. Scale coverage table with CSS evidence required. If missing, M2 gate needs revision.

3. **Engagement threshold (SUBJECTIVE):** Does the Middle page feel "designed" (intentional spatial meaning) not just "formatted" (components arranged on page)? Compare side-by-side with Variant B — Middle should feel RICHER. Compare with Floor-tier equivalent — gap should be visible.

4. **Novelty check (THE CRITICAL QUESTION):** Does the page feel like a NEW composition using familiar tools, or does it feel DERIVATIVE of showcase pages (OD-004, DD-006) despite different content? This is the vocabulary-vs-library practical test.

**Decision matrix after experiment:**

| Engagement | Novelty | Decision |
|-----------|---------|----------|
| Designed | Novel | PROCEED to Wave 2 as planned |
| Designed | Derivative | REVISE M1: add combination divergence requirement. Consult user before Wave 2 |
| Under-designed | Novel | Tier boundary may be wrong. Middle may need 10-12 mechanisms. Consult user |
| Under-designed | Derivative | Current skill insufficient. Wave 1 modifications VALIDATED. Proceed |

**When experiment contradicts predictions (G9):**

- **Modify the SKILL** when a concrete instruction consistently produces a measurable failure (e.g., "sample 2-4" → low mechanism count)
- **Modify the METHODOLOGY** when the process structure prevents discovery (e.g., single-pass misses audit-fix opportunities)
- **Modify the TIER MODEL** when results contradict tier boundary predictions (e.g., Middle achieves "place" feeling → Ceiling ambition shifts)
- **Do NOT modify** when results match predictions within acceptable variance
```

---

### REVISION 5.7: Add Section 4.5 (Interaction Rigidity Checks) — NEW SECTION

**INSERT AFTER Section 4 (Wave 3), BEFORE Section 5 (Documentation Modifications):**
```markdown
### Section 4.5: Interaction Rigidity Checks (G5)

**Source:** Enriched master prompt lines 974-993

Before finalizing modifications, check for compound effects:

**Type 5A (Contradictory):** Do two modifications CONFLICT?
- Test: Can you satisfy BOTH simultaneously?
- Resolved: M2 (fractal via width compression) + M3 (940px minimum) — use spacing compression instead of width
- Resolved: PRE-1 (category labels) must precede M1 (per-category selection)

**Type 5B (Multiplicative):** Do two modifications create exponential overhead?
- Test: Modification A × Modification B = how many decision points?
- Mitigated: M1 (8 mechanisms) × M2 (4 scales) = 32 combinations — REDUCED by tier-gating (Middle only 2 scales = 16 max)
- Watch: If Middle-tier overhead exceeds 25 minutes of documentation, simplify M6

**Type 5C (Goodhart's Law):** Do two modifications change each other's purpose?
- Test: Does combining them make one become a TARGET instead of MEASURE?
- Avoided: M1 uses per-category PRESENCE (binary), not mechanism COUNT (gameable)
- Avoided: Technique count metric REJECTED for this reason
```

---

## SECTION 6: FINAL SUMMARY

### Total Gaps Found: 18

**CRITICAL (Blocking Execution):**
1. G4 (Experiment decision matrix) — plan references OLD checkpoint structure ✗
2. G5 (Section 4.5 Interaction Rigidity) — entire section missing from plan ✗
3. G7 (Step 4.2B numbering collision) — will cause duplicate step numbers ✗

**HIGH (Missing Enrichment Context):**
4. G1 (Count-as-proxy caveat) — prevents Goodhart's Law ✗
5. G3 (Semantic CSS examples) — M6 is abstract without these ✗
6. G6 (Why per-category beats raw count) — M1 rationale missing ✗
7. G8 (Container width escape hatch) — M3 prevents legitimate narrow metaphors ✗
8. G10 (Combination explanations) — M7 lacks perceptual alignment principle ✗

**MEDIUM (Nuance/Detail):**
9. G2 (Middle = hypothesis) — already covered implicitly ✓ (but should be explicit)
10. G9 (Decision criteria for contradictions) — no framework for unexpected results ✗
11. G11 (DOC-5 expansion) — fresh-eyes confusions unaddressed ✗
12. Line number corrections — all refs are to pre-enrichment prompt ✗
13. 9-agent team (not 6-agent) — plan preamble inaccurate ✗
14. Category name evolution — plan notes inconsistency but doesn't resolve ✗
15. 31 missed modifications — plan covers 11/42 (26%) ✗
16. PRE-2 temporal contradiction — plan says "no action" but audit-01 says BLOCKING ⚠️
17. Middle-tier quickstart reference — M5 should link to 12-middle-tier-quickstart.md ✗
18. Section 4.2 sparse detail — M5, M6 sections need expansion ✗

---

### Recommendations:

**IMMEDIATE (Apply Before Handoff):**
- Apply Revisions 5.1 through 5.7 (all G1-G11 enrichments)
- Correct line number references in Sections 1.4, 4.5, 6
- Add Section 4.5 (Interaction Rigidity Checks)

**DISCUSS WITH TEAM-LEAD:**
- PRE-2 resolution (plan's implicit vs audit-01's explicit split)
- Scope clarification (plan covers 11/42 modifications — is this acceptable?)
- G11 implementation (DOC-5 expansion — should this be in the plan?)

**DEFER (Low Impact):**
- 9-agent team correction (cosmetic)
- Category name table (helpful but not blocking)

---

**END AUDIT REPORT**

**Status:** COMPLETE — ready for team-lead review + plan revision
