# OD Provenance Benchmark Checklist

**Author:** OD Benchmark Analyst
**Date:** 2026-02-11
**Purpose:** Define what "complete provenance" looks like using OD as the gold standard, then assess AD's current status against each criterion.

---

## A. What OD Has: The Gold Standard

OD's provenance chain at handoff was the product of **6 enrichment cycles** executed by **~149 agents** over multiple sessions. It represents the most complete provenance chain in the pipeline. The following checklist distills OD's completeness into measurable criteria.

---

## B. Provenance Chain Completeness Criteria

### Category 1: Formal Chain Documents (stage-X-*/ directory)

These are the authoritative narrative documents that live in the formal provenance directory and constitute the traversable chain.

| # | Criterion | Description |
|---|-----------|-------------|
| 1.1 | **STAGE-HEADER.md** exists with 8 structured sections | Story, consumed, produced, quality, decisions, causal relationships, accumulated research weight, files. YAML frontmatter with predecessor/successor links. |
| 1.2 | **SYNTHESIS.md** exists with 12+ sections | Story, consumed/produced, pattern analysis table, dialect analysis, key decisions, negative space, emergence tracking, scoring, research consumption, cross-exploration lessons, file consumption matrix, enrichment delta. |
| 1.3 | **outbound-findings.md** exists with per-finding registry | Each finding has: ID, title, source exploration, severity, classification (Class A/B/C), description, evidence. "Chain Impact" subsections guide downstream consumption. |
| 1.4 | **AUDIT-SYNTHESIS.md** exists with audit record | Total findings by severity, fixes applied, soul violations found/resolved, verification results. |
| 1.5 | **RESEARCH-GATE.md** exists with finding-by-finding mapping | Pre-build mapping (which findings will be applied where), post-build verification (which were actually applied), per-exploration scores, per-wave verification sections. |
| 1.6 | **CONVENTION-SPEC.md** exists IN provenance directory | Unified convention standard across all explorations. Soul test per standard. Copy-paste-ready :root block. |
| 1.7 | **HANDOFF.md** exists with acknowledgment protocol | Checklist protocol, pattern summary table, mandatory consumption list, transitive chain diagram, quality bar, mistakes to avoid, topology evaluation. |
| 1.8 | **CLAUDE.md** exists with 5-section navigation | Identity, reading order, file inventory, connection map, mindset. |

**OD Score: 8/8** -- All 8 files present, all populated with substantial content (3,851 total lines).

---

### Category 2: Finding Quality and Threading

| # | Criterion | Description |
|---|-----------|-------------|
| 2.1 | **Formal findings produced (>=10)** | OD produced 17 findings (13 core + 4 categorical: meta-pattern, process, forward-looking, anti-pattern). |
| 2.2 | **Finding threading density (>=50 refs/finding)** | OD achieved ~80 references per finding across 171 files (174 total OD-F-* mentions across provenance). |
| 2.3 | **Per-finding "Chain Impact" subsections** | Each OD-F finding in outbound-findings.md explicitly states how it constrains downstream stages (AD, CD, Migration). |
| 2.4 | **Finding categories include meta-patterns** | Beyond core findings, OD produced OD-F-MP-001 (meta-pattern), OD-F-PR-001 (process), OD-F-FL-001 (forward-looking), OD-F-AP-001 (anti-pattern). |
| 2.5 | **Crown jewel finding properly elevated** | OD-F-005 "Organization IS Density" has full emergence tracking narrative (4 sections: observation, hypothesis, evidence, conclusion) in SYNTHESIS.md. |
| 2.6 | **Negative findings documented** | "What OD Did NOT Find" section in SYNTHESIS: no cognitive soul piece, R-2 at 0%, ANTI-PHYSICAL pattern (20/20 SOUL FAILs). |

**OD Score: 6/6** -- All criteria met with high quality.

---

### Category 3: Research Consumption Documentation

| # | Criterion | Description |
|---|-----------|-------------|
| 3.1 | **Primary research gate documented** | R-1 at ~79% (22/28 applied), finding-by-finding mapping in RESEARCH-GATE.md with per-OD evidence. |
| 3.2 | **Bespoke research fully registered** | 94 EXT-* findings registered in EXT-RESEARCH-REGISTRY.md, 100% application rate documented. |
| 3.3 | **Research consumption summary table** | Summary in RESEARCH-GATE.md Section 5 and STAGE-HEADER.md Section 7 with per-stream breakdown. |
| 3.4 | **Deferred research explicitly flagged** | R-2 at 0% flagged as "AD WARNING" in handoff, STAGE-HEADER, and RESEARCH-GATE. |
| 3.5 | **RESEARCH-ACTIVE.md updated** | Both copies (checkpoints + provenance) reflect OD completion data. |
| 3.6 | **Per-exploration citation counts** | File consumption matrix in SYNTHESIS.md Section 11 shows which sources each OD consumed. |

**OD Score: 6/6** -- All criteria met.

---

### Category 4: Identity Evolution

| # | Criterion | Description |
|---|-----------|-------------|
| 4.1 | **ACCUMULATED-IDENTITY updated** | OD created v1 (541 lines) from scratch during its execution. |
| 4.2 | **Identity deltas tracked per build wave** | 3 identity deltas (wave1, wave2, wave3) ~120 lines each, documenting identity refinements. |
| 4.3 | **Identity refinements enumerated** | 3 named refinements: (1) solid offsets binary rule, (2) zone token naming, (3) GEOLOGICAL = border weight. |
| 4.4 | **ANTI-PHYSICAL pattern documented** | 20/20 SOUL FAILs systematically documented with 6 rejection categories. |
| 4.5 | **SOUL-DISCOVERIES.md updated** | Stage determination paragraph added (no 6th soul piece). |

**OD Score: 5/5** -- All criteria met.

---

### Category 5: Quality Verification

| # | Criterion | Description |
|---|-----------|-------------|
| 5.1 | **Multi-agent adversarial audit** | 17-agent granular adversarial audit (89 findings, 10 cross-references). |
| 5.2 | **Fix execution with verification** | 16/16 fixes applied, 187 programmatic DOM tests PASS, 12 visual screenshots PASS. |
| 5.3 | **Re-enrichment cycle** | 43-agent gate-based re-enrichment across 3 waves, Mode C provenance, convention spec applied. |
| 5.4 | **Post-enrichment re-audit** | Comprehensive hierarchical audit (~58 agents, 4 pillars), confirming 0/~13,000 soul violations across 3 independent verification processes. |
| 5.5 | **Before/after score measurements** | Pre: ~33.8/40 avg. Post: ~35.5/40 avg. Delta documented per exploration. |
| 5.6 | **Dedicated provenance chain remediation** | 18-agent team, 5 waves, formal chain documents created and verified. 94/104 chain verification tests pass. |
| 5.7 | **Convention unification applied** | OD-CONVENTION-SPEC.md (468 lines) created in Wave 0, applied across all 6 ODs, 3 quality dialects resolved. |

**OD Score: 7/7** -- All criteria met.

---

### Category 6: Pipeline Infrastructure Updates

| # | Criterion | Description |
|---|-----------|-------------|
| 6.1 | **PIPELINE-MANIFEST.md updated** | Per-finding entries for all OD-F findings, lifecycle counts, stage status. |
| 6.2 | **BACKBONE.md updated** | Stage 3 entry in past tense with summary. |
| 6.3 | **PATTERN-INDEX.md updated** | 6 organizational patterns added with VALIDATED status. |
| 6.4 | **FINDINGS-INDEX.md updated** | All OD-F entries present. |
| 6.5 | **EXT-RESEARCH-REGISTRY.md updated** | 94 EXT-* findings registered with per-OD breakdown. |
| 6.6 | **RESEARCH-ACTIVE.md updated** | Both copies reflect OD completion. |
| 6.7 | **SOUL-DISCOVERIES.md updated** | Stage 3 determination paragraph. |
| 6.8 | **explorations/ CLAUDE.md updated** | OD status shows COMPLETE. |
| 6.9 | **Successor stage unblocked** | stage-4 directory reflects OD COMPLETE, AD can start. |

**OD Score: 9/9** -- All pipeline infrastructure files updated at handoff. Zero stale files.

---

### Category 7: Provenance Architecture Layers

| # | Criterion | Description |
|---|-----------|-------------|
| 7.1 | **Layer 1: Inline threading headers** | All 6 exploration HTML files have inline threading headers (BUILT ON, CONSUMED BY). |
| 7.2 | **Layer 2: Light provenance sections** | Source files carry light metadata linking to parent phase and T1 synthesis. |
| 7.3 | **Layer 3: Formal chain documents** | Complete set (8 files) in stage-3-organization-od/ directory. |
| 7.4 | **Cross-layer consistency** | Inline headers reference formal chain documents; formal chain references inline headers. |

**OD Score: 4/4** -- All 3 layers present and consistent.

---

## C. AD Status Against Each Criterion

### Category 1: Formal Chain Documents

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 1.1 | STAGE-HEADER.md (8 sections) | COMPLETE (305 lines, 8 sections) | PARTIAL (140 lines, 5 sections) | Missing: causal relationships, accumulated research weight, detailed quality subsections. 2.2x thinner. | 1 hour, 1 agent |
| 1.2 | SYNTHESIS.md (12+ sections) | COMPLETE (672 lines, 12 sections) | COMPLETE (298 lines, 13 sections) | All sections present but compressed. 2.3x thinner. No emergence tracking narrative depth. No file consumption matrix. | 2 hours, 1 agent to expand |
| 1.3 | outbound-findings.md | COMPLETE (935 lines, 17 findings + Chain Impact per finding) | COMPLETE (506 lines, 28 findings) | More findings (28 vs 17) but no per-finding "Chain Impact" subsections guiding CD. 1.8x thinner by line count. | 1 hour, 1 agent |
| 1.4 | AUDIT-SYNTHESIS.md | COMPLETE (522 lines) | COMPLETE (~357 lines) | Exists, less detailed. 1.5x thinner. PA fix execution results not cross-referenced. | 30 min, 1 agent |
| 1.5 | RESEARCH-GATE.md (in provenance) | COMPLETE (440 lines, IN provenance dir) | PARTIAL (96 lines thin gate + 429-line R-4 eval, both in _ad-execution/) | NOT in formal provenance directory. OD equivalent is 440 lines in provenance; AD is 96+429 lines outside provenance. | 30 min, 1 agent to promote composite |
| 1.6 | CONVENTION-SPEC.md (in provenance) | COMPLETE (468 lines, IN provenance dir) | EXISTS BUT MISPLACED (822 lines, in _ad-execution/) | Larger than OD (822 vs 468) but NOT in formal provenance directory. | 5 min, 1 agent to copy |
| 1.7 | HANDOFF.md | COMPLETE (351 lines, 11 sections) | COMPLETE (233 lines, 9 sections) | Exists and is well-structured. Slightly thinner (1.5x). Quality rated comparable to OD by multiple reports. | Adequate as-is |
| 1.8 | CLAUDE.md | COMPLETE (158 lines, 5 sections) | COMPLETE (110 lines, 5 sections) | Exists, adequate. 1.4x thinner. | Adequate as-is |

**AD Category 1 Score: 5/8 COMPLETE, 2/8 PARTIAL, 1/8 EXISTS BUT MISPLACED**
**Primary gaps:** CONVENTION-SPEC and RESEARCH-GATE not in provenance directory. STAGE-HEADER thin.

---

### Category 2: Finding Quality and Threading

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 2.1 | Formal findings (>=10) | 17 findings | 28 findings | **AD STRONGER** (1.6x more findings) | None |
| 2.2 | Threading density (>=50 refs/finding) | ~80 refs/finding (174 mentions, 171 files) | ~22 refs/finding (128 mentions, 65 files) | **3.6x thinner threading.** Major gap. Caused by no dedicated provenance remediation pass. | 2+ hours, 2-3 agents |
| 2.3 | Per-finding Chain Impact subsections | YES (every OD-F finding has Chain Impact) | NO (findings have tables but no Chain Impact) | **STRUCTURAL GAP.** CD won't know how each finding constrains them. | 1 hour, 1 agent |
| 2.4 | Finding categories include meta-patterns | YES (4 categorical: MP, PR, FL, AP) | PARTIAL (Class A/B classification exists but no explicit meta-pattern/process/forward-looking categories) | Minor gap -- AD uses a different classification system (Class A confirming / Class B extending / Class C overwriting). Functional equivalent exists. | Low priority |
| 2.5 | Crown jewel properly elevated | YES (OD-F-005 has 4-section emergence tracking) | YES (AD-F-023 ATTENTION TOPOLOGY properly elevated in synthesis, handoff, identity) | **Adequate.** | None |
| 2.6 | Negative findings documented | YES (3 negative findings in synthesis) | YES (4 negative findings in synthesis Section 8) | **Adequate.** No 6th soul piece, no 6th fractal scale, no axis that fights density, no Class C findings. | None |

**AD Category 2 Score: 3/6 COMPLETE, 2/6 PARTIAL, 1/6 MAJOR GAP**
**Primary gaps:** Threading density 3.6x thinner, no per-finding Chain Impact subsections.

---

### Category 3: Research Consumption Documentation

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 3.1 | Primary research gate documented | R-1 at ~79% (440-line gate in provenance) | R-4 at ~88% (96-line thin gate + 429-line eval, both outside provenance) | Gate exists but NOT in provenance. Functional content adequate. | 30 min to promote |
| 3.2 | Bespoke research registered | 94 EXT-* (100% in EXT-RESEARCH-REGISTRY) | 33 EXT-AXIS-* (0% in registry, 100% cited in chain docs) | **CRITICAL GAP.** Findings are threaded through AD chain but NOT registered in cross-stage registry. | 1 hour, 1 agent |
| 3.3 | Research consumption summary table | YES (in RESEARCH-GATE + STAGE-HEADER) | YES (in AD-SYNTHESIS Section 10) | Adequate. | None |
| 3.4 | Deferred research flagged | R-2 flagged as "AD WARNING" | R-2 deferred findings (~7) not listed by specific ID in handoff | MINOR GAP. Deferred IDs not enumerated. | 15 min |
| 3.5 | RESEARCH-ACTIVE.md updated | Both copies reflect OD data | Neither copy updated for AD (still shows AD as "pending") | **HIGH GAP.** | 45 min, 1 agent |
| 3.6 | Per-exploration citation counts | File consumption matrix in SYNTHESIS Section 11 | Citation totals table in AD-SYNTHESIS Section 10 (295 total) | Format differs but functional equivalent exists. AD has per-exploration citation totals (56-74 per exploration). | Adequate |

**AD Category 3 Score: 2/6 COMPLETE, 2/6 ADEQUATE, 2/6 SIGNIFICANT GAP**
**Primary gaps:** EXT-AXIS-* not registered in cross-stage registry, RESEARCH-ACTIVE.md stale.

---

### Category 4: Identity Evolution

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 4.1 | ACCUMULATED-IDENTITY updated | Created v1 (541 lines) | Consumed v1.1 (576 lines), produced v2 (518 lines) | **Chain intact.** v2 is shorter than v1.1 (deserves scrutiny but functionally adequate). | None |
| 4.2 | Identity deltas per build wave | 3 deltas (~120 lines each) | 3 deltas (wave1A, wave1B, wave1C) + 1 cumulative checkpoint | **Adequate.** | None |
| 4.3 | Identity refinements enumerated | 3 named refinements | 3-way unification, ATTENTION TOPOLOGY, 5 equivalence mechanisms, no Soul Piece #6, no 6th fractal scale | **AD STRONGER** -- more discoveries, properly documented. | None |
| 4.4 | ANTI-PHYSICAL documented | 20/20 SOUL FAILs with 6 categories | 20 CONDITIONAL PASS findings in AD-005 (reinterpretation documented) | **Adequate.** Different framing but same principle confirmed. | None |
| 4.5 | SOUL-DISCOVERIES.md updated | Stage 3 determination paragraph | NOT updated (still says "AD is the next opportunity") | **GAP.** | 10 min, 1 agent |

**AD Category 4 Score: 4/5 COMPLETE, 1/5 MISSING**
**Primary gap:** SOUL-DISCOVERIES.md not updated for AD.

---

### Category 5: Quality Verification

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 5.1 | Multi-agent adversarial audit | 17-agent audit (89 findings) | 24+-agent audit (~47 de-duplicated findings, ~250 raw) | **Adequate.** Similar scale. | None |
| 5.2 | Fix execution with verification | 16/16 fixes, 187 DOM tests, 12 screenshots | Fixes applied + programmatic + visual verification | **Adequate.** | None |
| 5.3 | Re-enrichment cycle | 43 agents, 3 waves, Mode C | **NONE** | **CRITICAL GAP.** AD has no re-enrichment. Scores are builder self-reported, not independently verified through enrichment iteration. | Would require full re-enrichment pass (~4+ hours, 20+ agents) |
| 5.4 | Post-enrichment re-audit | ~58-agent comprehensive audit (4 pillars) | **NONE** (perceptual audit is partial equivalent) | **SIGNIFICANT GAP.** PA audit covers 6 files but is not equivalent to OD's comprehensive 58-agent, 4-pillar audit. | Would require dedicated audit pass |
| 5.5 | Before/after score measurements | Pre: ~33.8, Post: ~35.5, delta documented | Single-pass scores (35-38/40, avg ~36.2). No before/after. | **SIGNIFICANT GAP.** AD scores are higher but not independently verified. | Requires re-enrichment to create before/after |
| 5.6 | Dedicated provenance remediation | 18-agent team, 5 waves, 5,423 lines | **NONE** (provenance folded into build mega-commit) | **SIGNIFICANT GAP.** AD's chain was written as part of synthesis, not a dedicated pass. | ~3-4 hours, 6-8 agents |
| 5.7 | Convention unification applied | OD-CONVENTION-SPEC.md created in Wave 0, applied post-hoc | AD-CONVENTION-SPEC.md created PRE-build, zero dialect drift | **AD STRONGER** -- convention applied before building, not after. Zero dialect divergence. | None |

**AD Category 5 Score: 2/7 COMPLETE, 1/7 AD STRONGER, 4/7 SIGNIFICANT/CRITICAL GAP**
**Primary gaps:** No re-enrichment, no comprehensive post-audit, no dedicated provenance remediation.

---

### Category 6: Pipeline Infrastructure Updates

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 6.1 | PIPELINE-MANIFEST.md updated | Per-finding OD-F entries | Summary-only (3 lines) | **GAP.** | 30 min |
| 6.2 | BACKBONE.md updated | Stage 3 past-tense entry | Unclear/stale | **GAP.** | 10 min |
| 6.3 | PATTERN-INDEX.md updated | 6 org patterns added | Says "AD explorations not yet started" | **BLOCKING GAP.** | 30 min |
| 6.4 | FINDINGS-INDEX.md updated | OD-F entries present | No AD-F entries | **GAP.** | 45 min |
| 6.5 | EXT-RESEARCH-REGISTRY.md updated | 94 EXT-* registered | 0 EXT-AXIS-* registered | **HIGH GAP.** | 1 hour |
| 6.6 | RESEARCH-ACTIVE.md updated | OD data reflected | Still shows AD as "pending" | **HIGH GAP.** | 45 min |
| 6.7 | SOUL-DISCOVERIES.md updated | Stage 3 paragraph | Not updated | **GAP.** | 10 min |
| 6.8 | explorations/ CLAUDE.md updated | OD COMPLETE | Says axis/ is "PENDING" | **GAP.** | 5 min |
| 6.9 | Successor stage unblocked | stage-4 reflects OD COMPLETE | stage-5 says AD is PENDING, CD blocked | **BLOCKING GAP.** | 15 min |

**AD Category 6 Score: 0/9 COMPLETE** -- All 9 infrastructure files are stale or missing AD data.
**Primary gaps:** EVERY pipeline infrastructure file needs updating.

---

### Category 7: Provenance Architecture Layers

| # | Criterion | OD Status | AD Status | Gap | Effort |
|---|-----------|-----------|-----------|-----|--------|
| 7.1 | Layer 1: Inline threading headers | 6/6 HTML files (100%) | 4/6 HTML files (67%) -- AD-003 and AD-004 missing | **GAP.** | 20 min |
| 7.2 | Layer 2: Light provenance sections | Applied to all source files | N/A (AD source files are HTML explorations, not a codebase) | Not directly applicable | N/A |
| 7.3 | Layer 3: Formal chain documents | 8 files in provenance dir | 6 files in provenance dir (CONVENTION-SPEC and RESEARCH-GATE outside) | **GAP.** Effectively 8 files exist, 2 are misplaced. | 35 min |
| 7.4 | Cross-layer consistency | Headers reference chain, chain references headers | Partial -- chain docs exist, 2 HTML files lack headers | **MINOR GAP.** | Covered by 7.1 and 7.3 fixes |

**AD Category 7 Score: 1/4 COMPLETE, 2/4 GAP, 1/4 N/A**

---

## D. Composite Completeness Matrix

| Category | Criteria Count | OD Score | AD Score | AD % | Gap Severity |
|----------|---------------|----------|----------|------|-------------|
| 1. Formal Chain Documents | 8 | 8/8 | 5/8 | 63% | HIGH |
| 2. Finding Quality & Threading | 6 | 6/6 | 3/6 | 50% | HIGH |
| 3. Research Consumption | 6 | 6/6 | 2/6 | 33% | HIGH |
| 4. Identity Evolution | 5 | 5/5 | 4/5 | 80% | LOW |
| 5. Quality Verification | 7 | 7/7 | 3/7 | 43% | CRITICAL |
| 6. Pipeline Infrastructure | 9 | 9/9 | 0/9 | 0% | CRITICAL |
| 7. Provenance Layers | 4 | 4/4 | 1/4 | 25% | MEDIUM |
| **TOTAL** | **45** | **45/45** | **18/45** | **40%** | |

**AD overall provenance completeness: 40% of OD's gold standard.**

However, this raw number is misleading. AD's CORE KNOWLEDGE is strong (findings, identity, synthesis, handoff are all well-written). The gaps are concentrated in:

1. **Pipeline infrastructure** (0/9) -- all stale, all fixable with mechanical file updates
2. **Quality verification depth** (3/7) -- re-enrichment and comprehensive audit are the expensive missing passes
3. **Research registration** (2/6) -- data exists, just not registered in the right files

---

## E. What Makes OD's Chain "Complete Enough" for the Next Stage

From OD's example, the 5 criteria that actually matter for the next stage to start successfully:

### The 5 Essential Criteria

1. **Can a fresh agent answer 5 J-03 questions from provenance alone?**
   - What did this stage discover?
   - What constraints are inherited?
   - What constraints are passed forward?
   - Research consumed at what rate?
   - Quality bar achieved?

   **OD: 5/5 answerable. AD: 4.5/5 answerable** (research rate requires consulting _ad-execution/ files outside provenance).

2. **Does the successor stage directory say "you can start"?**

   **OD: YES (stage-4 correctly reflects OD COMPLETE). AD: NO (stage-5 says AD is PENDING, CD blocked).**

3. **Are all formal findings registered in every relevant index?**

   **OD: YES (OD-F in outbound-findings, FINDINGS-INDEX, PIPELINE-MANIFEST, PATTERN-INDEX). AD: PARTIAL (AD-F in outbound-findings only, missing from FINDINGS-INDEX, PIPELINE-MANIFEST, PATTERN-INDEX).**

4. **Can a fresh agent find the convention spec in the provenance directory?**

   **OD: YES (OD-CONVENTION-SPEC.md in stage-3-organization-od/). AD: NO (AD-CONVENTION-SPEC.md in _ad-execution/, not in stage-4-axis-ad/).**

5. **Are bespoke research findings registered in the cross-stage registry?**

   **OD: YES (94 EXT-* in EXT-RESEARCH-REGISTRY.md). AD: NO (33 EXT-AXIS-* not registered).**

### AD's Current Score on Essential Criteria: 1.5/5

This is the actual functional gap. The 23 identified gaps (from the provenance assessment synthesis) map directly to these 5 essential criteria.

---

## F. Remediation Priority (Effort-to-Impact Ranking)

### Tier 1: Unblock CD (must-fix, ~1 hour)

| Gap | Fix | Impact |
|-----|-----|--------|
| stage-5 STAGE-HEADER/CLAUDE says PENDING | Update to reflect AD COMPLETE | Unblocks CD from starting |
| PATTERN-INDEX says "not yet started" | Add 6 axis patterns | CD can see validated patterns |

### Tier 2: Fix Provenance Discovery (should-fix, ~2 hours)

| Gap | Fix | Impact |
|-----|-----|--------|
| CONVENTION-SPEC not in provenance | Copy to stage-4-axis-ad/ | CD agents find it |
| RESEARCH-GATE not in provenance | Promote composite to stage-4-axis-ad/ | Research gate discoverable |
| EXT-RESEARCH-REGISTRY empty for AD | Register 33 EXT-AXIS-* | Cross-stage registry complete |
| RESEARCH-ACTIVE.md stale | Update both copies | Research tracking accurate |
| AD-003/AD-004 missing inline headers | Add headers | Layer 1 complete |

### Tier 3: Deepen Chain Quality (nice-to-have, ~3 hours)

| Gap | Fix | Impact |
|-----|-----|--------|
| Per-finding Chain Impact subsections | Add to AD-outbound-findings.md | CD knows how each finding constrains them |
| FINDINGS-INDEX missing AD-F entries | Add 28 entries | Cross-stage finding index complete |
| PIPELINE-MANIFEST summary-only | Add per-finding entries | Master registry complete |
| SOUL-DISCOVERIES.md stale | Add AD paragraph | Soul tracking complete |
| explorations/CLAUDE.md stale | Update status | Navigation accurate |

### Tier 4: Achieve OD Parity (aspirational, ~8+ hours)

| Gap | Fix | Impact |
|-----|-----|--------|
| No re-enrichment cycle | 20+ agent re-enrichment | Independent score verification |
| No comprehensive post-audit | ~15+ agent comprehensive audit | Deeper quality assurance |
| No dedicated provenance remediation | 6-8 agent remediation | Threading density 3.6x -> ~40x |
| STAGE-HEADER thin (140 vs 305 lines) | Expand sections 6-7 | Richer causal chain |
| SYNTHESIS thin (298 vs 672 lines) | Expand emergence tracking + enrichment delta | Richer cross-exploration analysis |

---

## G. Key Insight: What OD Teaches Us About Provenance

OD's gold standard was not built in one pass. It was the result of **6 iterative cycles**, each adding a layer:

1. **Build** (created explorations)
2. **Adversarial audit** (found problems)
3. **Fix execution** (resolved problems)
4. **Re-enrichment** (elevated quality with bespoke research + convention unification)
5. **Comprehensive audit** (verified everything end-to-end)
6. **Provenance remediation** (formalized the chain)

AD completed cycles 1-3 but skipped cycles 4-6. The missing cycles account for **most of the gap**:
- Re-enrichment (cycle 4) = the quality floor raiser
- Comprehensive audit (cycle 5) = the confidence builder
- Provenance remediation (cycle 6) = the threading density multiplier

The practical question is not "should AD match OD?" but "what's the minimum viable provenance for CD to start successfully?" Based on OD's example, the answer is: **fix Tiers 1-2 (unblock + discovery), then assess whether Tier 3 is needed before CD starts or can be folded into CD Phase 0.**

---

## Source Files Consulted

| File | Path | Lines Read |
|------|------|-----------|
| OD-vs-AD Comparison | `_provenance-assessment/od-vs-ad-comparison.md` | 309 lines |
| HANDOFF-OD-TO-AD | `provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | 352 lines |
| OD-SYNTHESIS | `provenance/stage-3-organization-od/OD-SYNTHESIS.md` | 673 lines |
| OD-CONVENTION-SPEC | `provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` | 469 lines |
| OD STAGE-HEADER | `provenance/stage-3-organization-od/STAGE-HEADER.md` | 306 lines |
| OD-RESEARCH-GATE | `provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | 441 lines |
| AD STAGE-HEADER | `provenance/stage-4-axis-ad/STAGE-HEADER.md` | 141 lines |
| AD-SYNTHESIS | `provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | 299 lines |
| AD-outbound-findings | `provenance/stage-4-axis-ad/AD-outbound-findings.md` | 100+ lines |
| HANDOFF-AD-TO-CD | `provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | 100+ lines |
| Provenance Assessment Synthesis | `_provenance-assessment/PROVENANCE-ASSESSMENT-SYNTHESIS.md` | 267 lines |
| OD CLAUDE.md | `provenance/stage-3-organization-od/CLAUDE.md` | 158 lines |
| AD CLAUDE.md | `provenance/stage-4-axis-ad/CLAUDE.md` | 110 lines |
| Provenance CLAUDE.md | `provenance/CLAUDE.md` | ~100 lines |

---

*Compiled 2026-02-11 by OD Benchmark Analyst agent.*
