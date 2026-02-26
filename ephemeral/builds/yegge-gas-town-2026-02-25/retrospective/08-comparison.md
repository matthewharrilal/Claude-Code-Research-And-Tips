# Cross-Run Comparison Analysis

**Current:** yegge-gas-town-2026-02-25 (Pipeline v3, hierarchical tracker)
**Previous A:** V3-Yegge-Gas-Town (2026-02-24, Pipeline v3 wave 3, flat tracker)
**Previous B:** gas-town-va-pipeline (2026-02-23, Pipeline v3 pre-wave-3)
**Previous C:** gas-town-steve-yegge (2026-02-20, Pipeline v2-era)

All four runs use the same source content (`yegge-gas-town-extraction.md`, ~5,270 words) and the same builder model (Opus).

---

## 1. PA-05 Progression

| Run | Date | PA-05 (Initial) | PA-05 (Final) | REFINE Delta | Tier 5 | Verdict |
|-----|------|-----------------|---------------|-------------|--------|---------|
| C (v2-era) | 02-20 | -- | 3.5/4 | N/A (no REFINE) | 6.5/9 | YES WITH RESERVATIONS |
| B (v3 pre-wave3) | 02-23 | -- | 3/4 | N/A (no REFINE) | N/A (different PA scale) | YES WITH FIXES |
| A (v3 wave3) | 02-24 | ~2.0/4 (screenshot corrupted) | 3/4 | ~+1.0 (uncertain) | 9/9 | SHIP WITH FIXES |
| Current | 02-25 | 2.0/4 | 3.5/4 | **+1.5** | 9/9 | SHIP WITH FIXES |

**Key finding:** The current run achieves the highest PA-05 score (3.5/4) of any Pipeline v3 run. It matches run C's score but with a far more rigorous evaluation protocol (9 auditors, cross-validation, experiential passes, Tier 5 scoring). The +1.5 REFINE delta is the largest single-cycle improvement recorded.

**Regression concern:** Run B scored 174/200 (87.0%) on a 5-point-per-question scale across 40 questions. This granular scoring is lost in the current 4-point PA-05 scale. The 4-point scale is more reliable (designed to reduce score inflation) but provides less diagnostic resolution.

---

## 2. Gate Results Side-by-Side

| Gate Category | Run C (v2) | Run B (v3-pre) | Run A (v3-wave3) | Current (initial) | Current (REFINE) |
|---------------|-----------|-----------------|-------------------|-------------------|------------------|
| Identity | 24/25 PASS | 10/10 PASS | 6/10 | 7/9 | (not re-run) |
| Perception | all PASS | 5/6 (GR-14 FP) | 4/6 | 4/6 | 3/4 run |
| Anti-Pattern | N/A | 3/6 | N/A (reclassified) | 5/6 | (not re-run) |
| Wave 2 | N/A | 6/6 | N/A | 4/6 | 5/7 |
| Total PASS | 24/25 | 23/31 | 23/31 | 22/30 | 19/25 |
| Total FAIL | 0 | 8 | 8 | 7 | 6 |

**Improved gates (current vs A):**
- GR-51 heading hierarchy: FAIL -> PASS (REFINE fixed h2->h4 skip)
- GR-05 font trinity: reduced from "times/sf mono/georgia" to "monospace generic" (borderline)
- GR-07 pure black: eliminated (no longer failing)
- GR-22 semantic HTML: added `nav` element via REFINE

**Regressed gates (current vs A):**
- GR-11 background delta: PASS -> FAIL (non-adjacent pair Z2/Z4 delta=6; gate now checks all pairs, not just adjacent -- this is a gate implementation change, not a design regression)
- GR-52 link accessibility: new FAIL (14 nav rail dots lack aria-labels -- new HTML element introduced by REFINE)

**Persistent failures across runs:**
- GR-08/GR-09 border widths: non-integer borders (0.67/2.67px in A, 3.75/3/0.75px in current). Builders consistently produce fractional borders.
- GR-60 WCAG contrast: header metadata text fails in current run (48 violations). Not tested in A.
- GR-14/GR-15 margin false positives: both runs have gate false positives from CSS auto centering or nested section measurement.

---

## 3. Content Map and Brief Quality

| Dimension | Run A (v3-wave3) | Current |
|-----------|-------------------|---------|
| Content Map lines | 62 | 71 |
| Zones recommended | 6 | 5 |
| Metaphor choice | Settlement/Outpost (Mad Max) | Factory/Refinery |
| Brief lines | 289 | 272 |
| BV revision cycles | 1 | 0 |
| D-09 background hex lock | N/A (not yet in pipeline) | YES (all 5 zone backgrounds fixed in brief) |

**Key finding:** The current run chose a DIFFERENT metaphor than run A despite identical source content. Run A selected "Settlement/Outpost" (emphasizing the Mad Max naming); current run selected "Factory/Refinery" (emphasizing the industrial process language). Both are content-native; the Factory metaphor produced more CSS-actionable zone names (Loading Dock, Dispatch Floor, Factory Floor, Assembly Line, Shipping Bay).

**Zone count reduction (6 -> 5):** Current run uses 5 zones vs A's 6. This concentrated the design energy and produced a more dramatic Z2->Z3 dark inversion (delta 214) instead of distributing across more similar zones. The Z4-Z5 weak boundary that plagued run B (flagged by 7/9 auditors) was avoided entirely.

**D-09 hex lock:** The current run's brief includes pre-computed hex values for all zone backgrounds (e.g., Z3 = `#1E1E1E`). This is a Pipeline v3 wave 3 enhancement that was NOT present in run A's brief. Result: zero background delta failures on adjacent zones.

---

## 4. Build Time and Agent Count

| Metric | Run C | Run B | Run A | Current |
|--------|-------|-------|-------|---------|
| Total duration | ~2h | ~4h | ~6h (3 sessions) | ~3h 20m |
| Agents spawned | ~15 | ~15 | 14 | 15 initial + 15 REFINE = 30 |
| REFINE cycles | 0 | 0 | 1 (screenshot-corrupted) | 1 (clean) |
| Screenshots | 34 | 69 | 69 + 8 corrected | 53 + 15 REFINE = 68 |

**Key finding:** Current run is the fastest v3 run (~3h 20m vs ~6h for A) despite running a full REFINE cycle. The time savings come from: (1) no context recovery sessions needed, (2) DPR workaround identified early (preventing screenshot corruption), (3) hierarchical tracker reducing orchestrator cognitive overhead.

**Agent count increase:** Current run spawned 30 agents total (15 initial + 15 REFINE) vs A's 14. The REFINE cycle doubled the agent count but produced a +1.5 PA-05 improvement.

---

## 5. REFINE Cycle Effectiveness

| Aspect | Run A REFINE | Current REFINE |
|--------|-------------|----------------|
| PA-05 delta | ~+1.0 (uncertain due to screenshot corruption) | **+1.5** (clean) |
| Fix focus | Screenshot correction + mechanical CSS | Dark zone contrast, transitions, nav, heading hierarchy |
| Gates fixed | Unknown (re-run unclear) | GR-51 (heading hierarchy) |
| New gates failed | Unknown | GR-52 (nav rail a11y from new nav element) |
| Artistic impression quality | Written pre-REFINE only | Written pre-REFINE, diagnostic post-REFINE |

**Key finding:** Run A's REFINE was primarily damage control (recovering from corrupted screenshots). Current run's REFINE was genuinely generative: it added navigation, fixed the dark zone readability, strengthened transitions, and repaired heading hierarchy. The +1.5 delta is the largest clean REFINE improvement in pipeline history.

**REFINE introduced a new failure:** The nav rail added by REFINE created 14 inaccessible links (GR-52 FAIL). This is the "REFINE regression" pattern: generative improvements that introduce mechanical issues. Pipeline should add a post-REFINE mechanical sweep.

---

## 6. Screenshot and DPR History

| Run | DPR | Screenshots | Corruption? |
|-----|-----|-------------|-------------|
| C (v2) | unknown | 34 | No |
| B (v3-pre) | unknown | 69 | No |
| A (v3-wave3) | 0.75 | 69 + 8 corrected | YES -- scroll-05+ blank |
| Current | 0.667 | 53 + 15 REFINE | NO (DPR workaround applied early) |

**Key finding:** The DPR workaround (setting viewport to 960x600 physical to get 1440x900 CSS) was developed from run A's painful lesson. Current run applied it in Phase 3A-pre, preventing the catastrophic screenshot corruption that contaminated all 9 PA reports in run A.

**Missing viewport:** Current run could not capture 1024px screenshots (DPR workaround only works for one viewport mapping). Run A captured 1024px but with corruption. This is a persistent MCP Playwright limitation.

---

## 7. Pipeline v3 Changes Present in Current Run (Not in Previous)

| Enhancement | In Run A? | In Current? | Impact |
|-------------|-----------|-------------|--------|
| Hierarchical execution tracker (L0-L3) | NO (flat) | YES | Better structured tracking, 638 lines vs 283 |
| D-09 background hex lock in brief | NO | YES | Zero adjacent background delta failures |
| DPR pre-validation (GR-61) | NO | YES | Clean screenshots, no corruption |
| Post-REFINE gate runner | UNCLEAR | YES | 25 gates re-run post-REFINE |
| Post-REFINE PA audit (full Mode 4) | NO (weaver only) | YES | 9 fresh auditors on REFINE output |
| GR-64 usability priority gate | NO | YES | Orchestrator override when pattern-matching too strict |
| pa-guardrails-weaver.md | NO | YES (PF-1l2) | Weaver-specific guardrails |

**Key finding:** Six pipeline enhancements separate the current run from run A. The most impactful are D-09 hex lock (preventing background delta failures) and full post-REFINE PA (giving reliable post-REFINE PA-05 scores).

---

## 8. Regression Detection

Things BETTER in previous runs than current:

1. **Metaphor expressiveness (Run C):** Run C's weaver described "register collision" (elegant typography + irreverent voice working together), decorative red "8" as personality moment, and a "Settlement Map" innovation. Current run lacks equivalent individual moments of visual personality.

2. **Component count (Run C):** Run C had 18 component types. Current run has 5-6 types post-REFINE. Run B had 19-20 mechanisms. This suggests the current builder was more conservative with component variety.

3. **Granular scoring (Run B):** Run B's 40-question 5-point scale (174/200 = 87%) provided more diagnostic resolution than the current 4-point PA-05. The current protocol is more rigorous (cross-validation) but less granular.

4. **Gate false-positive rate:** Current run has GR-11 and GR-15 false positives. Run C had 0 false positives. Gate evolution is introducing new false-positive modes faster than they are fixed.

5. **Dark zone risk:** Current run's Z3 dark zone was flagged by 6/10 auditors for scroll fatigue. Run A's multiple warm zones avoided this. The dark inversion is dramatically effective but creates endurance risk at long scroll distances.

---

## 9. Key Takeaways

1. **PA-05 3.5/4 is the new high-water mark for Pipeline v3.** The combination of D-09 hex lock, clean DPR handling, and a generative REFINE cycle produced the best result from 4 runs on identical content.

2. **REFINE is the highest-ROI pipeline phase.** +1.5 PA-05 for one additional builder pass + one additional PA round. The investment doubles agent count but produces the lion's share of quality improvement.

3. **Metaphor selection matters more than pipeline version.** Factory/Refinery (5 zones, dark inversion) and Settlement/Outpost (6 zones, warm progression) produce substantially different designs from the same content. The pipeline should explore whether metaphor A/B testing yields insights.

4. **Gate false positives are accumulating.** GR-11 (non-adjacent pairs), GR-15 (centering margins), GR-14 (nested sections), GR-19 (intentional boundary divs) -- four gates now produce known false positives. Each requires orchestrator override, consuming attention budget.

5. **REFINE introduces regressions.** The nav rail (GR-52 FAIL) and non-adjacent background pairs (GR-11 FAIL) were created by REFINE improvements. Pipeline needs a post-REFINE mechanical sweep gate.

6. **Archive run outputs.** Previous runs' ephemeral files are only recoverable via `git show HEAD:path`. The project should archive final run artifacts (gate results, weaver diagnostic, execution summary) to a permanent location after each run.
