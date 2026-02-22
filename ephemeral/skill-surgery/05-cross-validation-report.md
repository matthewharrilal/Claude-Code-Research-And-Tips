# Cross-Validation Report -- Pipeline File Consistency

**Agent:** cross-validator
**Date:** 2026-02-20
**Files audited:** 5 (TC SKILL, PA SKILL, build-page SKILL, conventions-brief, gate-runner)

---

## 1. PER-CHECK RESULTS

### CHECK 1: Perception Threshold Values

**Status: FAIL -- 2 inconsistencies found**

| Threshold | TC SKILL (Phase 4.0 + R-MC-03) | PA SKILL (threshold table) | Gate-runner (SC-13, SC-14) | Conventions-brief (Section 2) | Verdict |
|-----------|------|---------|------------|-----------------|---------|
| background >= 15 RGB | >= 15 RGB (line 869) | >= 15 RGB (line 623) | >= 15 RGB (SC-09 line 340, SC-14 line 582) | >= 15 RGB (line 57) | **PASS** -- consistent |
| warm palette bg >= 20 RGB | >= 20 RGB (line 869) | >= 20 RGB (line 632) | Not mentioned | Not mentioned | **PASS** -- consistent where stated |
| font-size >= 2px | >= 2px (line 870) | >= 2px (line 624) | >= 2px (SC-13 line 516) | >= 2px (line 59) | **PASS** -- consistent |
| letter-spacing >= 0.03em | >= 0.03em (line 871) | >= 0.5px / 0.03em at 16px (line 625) | Floor 0.025em (SC-14 line 580) | >= 0.03em delta, floor 0.025em (line 113) | **PASS** -- consistent (0.03em delta threshold, 0.025em absolute floor) |
| line-height >= 0.15 | >= 0.15 (line 872) | >= 0.15 (line 626) | Not measured by gate | Not explicitly in table | **PASS** -- consistent where stated |
| padding/spatial >= 24px | >= 24px (line 873) | >= 24px (line 627) | >= 24px (SC-13 line 521) | >= 24px (line 114) | **PASS** -- consistent |
| border >= 1px | >= 1px (line 875) | >= 1px (line 628) | Configuration change (SC-15) | Weight change (line 115) | **PASS** -- consistent |
| **font-weight** | **>= 200** (line 874, line 1383) | **>= 100** (line 629) | **>= 100** (SC-13 line 516) | **Not stated** | **FAIL -- INCONSISTENT** |
| stacked gap <= 120px | <= 120px (line 876) | <= 120px (line 387-388) | <= 120px (SC-10 line 361) | <= 120px (line 61) | **PASS** -- consistent |

**INCONSISTENCY 1 -- font-weight threshold:**
- TC SKILL says `>= 200` at BOTH locations (Phase 4.0 line 874: ">=200 delta" and R-MC-03 line 1383: "font-weight delta >=200")
- PA SKILL says `>= 100 units` (line 629)
- Gate-runner SC-13 says `>= 100` (line 516: `Math.abs(fw1 - fw2) >= 100`)
- Conventions-brief: no explicit font-weight threshold stated

**Impact:** MEDIUM. TC analysts will derive composition with >= 200 threshold (missing subtle 400->500 shifts), while gate-runner counts >= 100 shifts as channel activation (accepting those same shifts). This means: a composition where TC says "font-weight did NOT shift" could pass SC-13 because gate-runner says "font-weight DID shift." The discrepancy inflates programmatic multi-coherence counts vs TC-planned multi-coherence.

**INCONSISTENCY 2 -- TC transition table template uses WRONG thresholds:**
- TC SKILL line 1372 (transition table template): `font-size delta (>=1px)`, `padding delta (>=8px)`
- Should be: `font-size delta (>=2px)`, `padding delta (>=24px)`
- These are the PRE-ENRICHMENT values that were NOT updated in the transition table template row.

**Impact:** LOW-MEDIUM. The template row is illustrative, and the actual thresholds are correctly stated at lines 864-876 (Phase 4.0) and lines 1377-1386 (R-MC-03). But a TC agent filling out the template could use the wrong thresholds from the template example.

---

### CHECK 2: PA Question Count

**Status: FAIL -- inconsistency between PA SKILL (65) and build-page (63)**

| File | Stated Count | Actual Count | Verdict |
|------|-------------|-------------|---------|
| PA SKILL header (line 7) | 65 | -- | Reference |
| PA SKILL Mode 4 (line 357) | 65 (54 standard + 2 sub-perceptual + 9 Tier 5) | -- | Reference |
| PA SKILL Mode 4 (line 644) | all 65 questions | -- | Reference |
| build-page Section 6.2 auditor table | not stated | 63 (counted from assignments) | **MISMATCH** |
| build-page Section 7.4 cycle table (line 412) | All 63 | -- | **Says 63** |
| build-page Section 6.3 weaver (line 334) | 63 questions x 9 auditors | -- | **Says 63** |

**Root cause:** PA-55 (Sub-Perceptual CSS Detection) and PA-56 (Micro-Typography Detection) are defined in PA SKILL (lines 347-357) and assigned to Auditor C and Auditor B respectively in PA SKILL (line 357). But they are NOT listed in the build-page auditor assignment table (Section 6.2, lines 286-296). Build-page assigns 63 questions; PA SKILL defines 65.

**Missing from build-page assignments:**
- PA-55 should be assigned to Auditor C (as PA SKILL line 357 states)
- PA-56 should be assigned to Auditor B (as PA SKILL line 357 states)

**Impact:** HIGH. PA-55 and PA-56 specifically detect the #1 Flagship failure mode (sub-perceptual CSS). Omitting them from the build-page auditor table means the orchestrator will not paste these questions into auditor prompts, and they will never be asked during Mode 4 PA.

---

### CHECK 3: Tier 5 Scoring

**Status: PASS**

| File | Tier 5 Score Basis | Verdict |
|------|-------------------|---------|
| PA SKILL (lines 496-514) | PA-60 through PA-68 = 9 questions, scored /9 | /9 |
| build-page Section 0 (line 16) | Tier 5 >= 7/9 | /9 |
| build-page Section 6.3 weaver (line 322) | Count YES from PA-60 through PA-68 | /9 |
| build-page Section 8 (line 427) | Tier 5 >= 7/9 | /9 |

**Verdict: PASS** -- consistently /9 across all files.

---

### CHECK 4: PA-68 Inclusion

**Status: PASS**

| Check | Location | Finding |
|-------|----------|---------|
| PA-68 in Tier 5 | PA SKILL line 485-491 | YES -- PA-68 defined as "Metaphor Spatial Coverage" |
| PA-68 assigned to Auditor G | PA SKILL line 525 | YES -- `G | Metaphor+Ideology | PA-68` |
| PA-68 in build-page auditor table | build-page line 294 | YES -- `G | Metaphor+Ideology | PA-25, 42, 43, 44, **68**` |
| PA-68 in Tier 5 range | PA SKILL line 497 | YES -- "PA-60 through PA-68" |

**Verdict: PASS** -- PA-68 is consistently in Tier 5, assigned to Auditor G, across all files.

---

### CHECK 5: Gate Count

**Status: PASS (with documentation note)**

| Source | Count | Breakdown |
|--------|-------|-----------|
| gate-runner.md summary (lines 1143-1144) | 22 | 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral |
| gate-runner.md summary table (lines 1118-1142) | 22 rows | SC-00 through SC-16, DG-1 through DG-4, BG-1, BG-2 |
| build-page Section 4 (line 160) | "16 composition-critical gates" | Refers to the inline SC table only |
| build-page Section 4 (line 162) | "22 gates" | References gate-runner.md as authoritative |
| build-page Section 4.3 (line 185) | "16 gates (plus advisory SC-13B, SC-16, deliverable DG-1 through DG-4, behavioral BG-1 + BG-2)" | Adds up to 16 + 2 + 4 + 2 = 24 |

**Note:** build-page line 185 says "16 gates plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 + BG-2" which totals 24 items. But gate-runner.md says 22. The discrepancy: build-page counts SC-13B and SC-16 as separate from the "16," but the gate-runner already includes them in its 22. The "16" in build-page refers to the inline summary table (SC-00 through SC-15), not the total.

**Impact:** LOW. The authoritative source (gate-runner.md = 22) is correctly referenced. The inline build-page table is a summary. No functional impact since gate-runner.md is what's actually executed.

---

### CHECK 6: TC Brief Format

**Status: PASS**

| Check | TC SKILL | build-page | Verdict |
|-------|----------|-----------|---------|
| Section count | 8 sections (line 1497) | 5 sections listed in TC spawn prompt (line 57-60) | **NOTE** |
| Length target | 80-120 lines (lines 1495, 1575, 1579) | "~50 lines" (line 60) | **MISMATCH** |

**INCONSISTENCY NOTED:** TC SKILL Phase 4.5 says 8 sections, 80-120 lines. Build-page TC spawn prompt says "Keep the brief to ~50 lines. This is a DESIGN BRIEF, not an essay" (line 60) and lists only 5 sections. However, the TC SKILL is the authoritative source for TC brief format (the TC agent reads TC SKILL, not build-page). The build-page spawn prompt is override-able by the TC SKILL that the agent reads first.

**Impact:** LOW-MEDIUM. The TC agent will follow TC SKILL (8 sections, 80-120 lines) since it reads TC SKILL first and completely. Build-page's "~50 lines" is leftover from a pre-enrichment version. The builder downstream receives whatever the TC agent actually produces.

---

### CHECK 7: Fix Cycle Types

**Status: PASS -- consistent**

| Classification | TC SKILL | PA SKILL | build-page | Verdict |
|---------------|----------|---------|-----------|---------|
| TYPE A / MECHANICAL | "CSS value is wrong... Builder fixes CSS directly" (line 1587) | "CSS value wrong... Builder fixes directly" (line 674) | "Gate Failures... specific CSS fix" (Section 7.1) | Consistent |
| TYPE B / STRUCTURAL | "Layout or zone structure doesn't match TC brief... Builder re-reads TC brief Section 2+4" (line 1589) | "Zone organization or boundary design issue. Builder re-reads TC brief Sections 2+4" (line 675) | "Re-read conventions-brief.md Section [N]" (line 378) | Consistent |
| TYPE C / COMPOSITIONAL | "Metaphor fundamentally doesn't work... Full TC re-invocation" (line 1591) | "Metaphor not expressed visually. Requires TC re-invocation" (line 676) | "re-spawn TC agent" (line 418) | Consistent |
| Escalation path | A -> B -> C (line 1593) | "Route to matching fix cycle type. Default to IMPLEMENTATION" (line 747) | "3 fix cycles exhausted -> ESCALATE" (line 416) | Consistent |

**Verdict: PASS** -- fix cycle types are consistently defined across all three files with matching semantics.

---

### CHECK 8: Channel Activation -- DEPLOYED vs ACTIVE

**Status: PASS (with coverage gap)**

| File | Defines DEPLOYED vs ACTIVE? | Details |
|------|---------------------------|---------|
| PA SKILL | YES (lines 840-857) | Full definition: "DEPLOYED when CSS properties exist; ACTIVE when CSS values EXCEED perception thresholds. Count only ACTIVE channels." |
| Conventions-brief | NO | Not explicitly defined. States thresholds but doesn't use DEPLOYED/ACTIVE terminology. |
| Gate-runner | NO | SC-13 measures channels but uses threshold-based counting (effectively ACTIVE counting). Does not define terminology. |

**Impact:** LOW. The DEPLOYED vs ACTIVE distinction is primarily an auditor concept (PA SKILL). Gate-runner SC-13 already checks against thresholds (effectively measuring ACTIVE channels). Conventions-brief states thresholds. The terminology gap doesn't cause functional inconsistency.

---

### CHECK 9: File References in build-page

**Status: PASS (with 1 naming note)**

| Referenced Path | Exists? | Verdict |
|----------------|---------|---------|
| `design-system/compositional-core/identity/prohibitions.md` | YES | PASS |
| `design-system/compositional-core/vocabulary/tokens.css` | YES | PASS |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | YES | PASS |
| `design-system/compositional-core/components/components.css` (line 92) | YES | PASS |
| `design-system/pipeline/conventions-brief.md` | YES | PASS |
| `design-system/pipeline/gate-runner.md` (line 162) | YES | PASS |
| `~/.claude/skills/tension-composition/SKILL.md` | YES | PASS |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | YES | PASS |

**Note:** build-page references `components.css` (line 92). The actual file is `components.css` at the expected path. Memory says `merged-components.css` but that file does NOT exist -- `components.css` is the actual filename. PASS.

---

### CHECK 10: Dangling References

**Status: PASS -- no dangling references found**

| Reference | TC SKILL | PA SKILL | build-page | Verdict |
|-----------|----------|---------|-----------|---------|
| "Phase 5" | Redirects to STANDALONE-APPENDIX.md (lines 38, 1487, 1493, 1597) | Not present | Not present | PASS -- Phase 5 only appears as standalone redirect |
| "Phase 4.7B" | Not found | Not found | Not found | PASS -- removed |
| "Phase 4.8" | Not found | Not found | Not found | PASS -- removed |
| "Phase 4.9" | Not found | Not found | Not found | PASS -- removed |
| Mode 1/2/3 in PA | Not applicable | Not found (only Mode 4 remains) | Not referenced | PASS -- collapsed |

---

## 2. INCONSISTENCIES FOUND

### CRITICAL (must fix before /build-page validation)

1. **PA-55 and PA-56 missing from build-page auditor assignments** (Check 2)
   - PA SKILL defines 65 questions; build-page assigns only 63
   - The 2 missing questions are PA-55 and PA-56 (sub-perceptual CSS detection)
   - These catch the #1 Flagship failure mode
   - **Fix:** Add PA-55 to Auditor C's list, PA-56 to Auditor B's list in build-page Section 6.2. Update all "63" references to "65."

### SIGNIFICANT (should fix)

2. **font-weight threshold: TC says >= 200, PA + gate-runner say >= 100** (Check 1)
   - TC SKILL lines 874 and 1383: `>=200`
   - PA SKILL line 629: `>= 100 units`
   - Gate-runner SC-13 line 516: `>= 100`
   - **Fix:** Align to >= 200 everywhere (consistent with TC which is the most carefully enriched) OR align to >= 100 everywhere (consistent with font-weight scale: 400->500 IS perceptible). Recommend >= 200 since the design system uses 400/500/600/700 steps of 100 or 200. A 100 delta (e.g., 400->500) is perceptible but subtle; 200 (e.g., 400->600) is clearly perceptible. Decision needed.

3. **TC brief length: TC SKILL says 80-120 lines, build-page says ~50 lines** (Check 6)
   - TC SKILL Phase 4.5: 8 sections, 80-120 lines
   - Build-page TC spawn prompt: 5 sections, ~50 lines
   - **Fix:** Update build-page TC spawn prompt to say "8 sections, 80-120 lines" and list all 8 sections.

### LOW (nice to fix)

4. **TC transition table template uses pre-enrichment thresholds** (Check 1, inconsistency 2)
   - Line 1372: `font-size delta (>=1px)`, `padding delta (>=8px)`
   - Should be: `font-size delta (>=2px)`, `padding delta (>=24px)`
   - **Fix:** Update the template row.

5. **Build-page gate count arithmetic is confusing** (Check 5)
   - "16 gates" + "plus advisory + deliverable + behavioral" suggests 24 but gate-runner says 22
   - **Fix:** Clarify in build-page that gate-runner.md defines 22 total gates, and remove the misleading "16 composition-critical" inline count or align it with gate-runner.

---

## 3. FINAL LINE COUNT TABLE

| File | Actual Lines | Previously Stated |
|------|-------------|-------------------|
| TC SKILL.md | **1,612** | ~1,616 (close) |
| PA SKILL.md | **993** | ~993 (exact) |
| build-page SKILL.md | **483** | ~486 (close) |
| conventions-brief.md | **565** | ~566 (close) |
| gate-runner.md | **1,159** | 1,159 (exact) |
| **Total** | **4,812** | -- |

---

## 4. RECOMMENDED FIXES

### Fix 1 (CRITICAL): Add PA-55 and PA-56 to build-page auditor table

In `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md`, Section 6.2:

**Current:**
```
| B | Readability+Typography | PA-02, 06, 07, 08, 29, 70 |
...
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **64**, **66** |
```

**Proposed:**
```
| B | Readability+Typography | PA-02, 06, 07, 08, 29, 56, 70 |
...
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, 55, **64**, **66** |
```

Also update:
- Line 334: "63 questions" -> "65 questions"
- Line 412: "All 63" -> "All 65"

### Fix 2 (SIGNIFICANT): Align font-weight threshold

**Option A (recommended):** Change PA SKILL line 629 and gate-runner SC-13 line 516 from >= 100 to >= 200.

**Option B:** Change TC SKILL lines 874 and 1383 from >= 200 to >= 100.

Decision required from team lead.

### Fix 3 (SIGNIFICANT): Update build-page TC spawn prompt

In `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md`, lines 53-61:

Update the TC spawn prompt to list all 8 sections (matching TC SKILL Phase 4.5) and change "~50 lines" to "80-120 lines."

### Fix 4 (LOW): Fix TC transition table template thresholds

In `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md`, line 1372:

**Current:** `| Z1->Z2 | bg delta (>=15 RGB) | font-size delta (>=1px) | padding delta (>=8px) | border delta (>=1px) |`

**Proposed:** `| Z1->Z2 | bg delta (>=15 RGB) | font-size delta (>=2px) | padding delta (>=24px) | border delta (>=1px) |`

### Fix 5 (LOW): Clarify gate count in build-page

In build-page Section 4 (line 160), change "16 composition-critical gates" to reference gate-runner.md's authoritative count of 22 total gates, or remove the inline count and rely on the gate-runner reference at line 162.

---

## 5. OVERALL VERDICT

### **SHIP WITH FIXES** (1 CRITICAL, 2 SIGNIFICANT, 2 LOW)

The pipeline files are largely consistent. The perception threshold table -- the most important cross-file contract -- is consistent across all 5 files for 7 of 8 properties. The font-weight discrepancy (200 vs 100) is significant but does not break the pipeline.

The CRITICAL finding is the missing PA-55/PA-56 assignments in build-page. These are the sub-perceptual detection questions -- exactly the questions designed to catch the Flagship's #1 failure mode. Without them in the auditor assignment table, no orchestrator will paste them into auditor prompts, and the sub-perceptual detection that the entire PA enrichment was designed to add will be silently dropped.

**Fix priority:**
1. PA-55/PA-56 in build-page (CRITICAL -- 5 min)
2. font-weight threshold alignment (SIGNIFICANT -- 5 min, needs decision)
3. TC spawn prompt alignment (SIGNIFICANT -- 10 min)
4. TC template thresholds (LOW -- 2 min)
5. Gate count clarification (LOW -- 2 min)
