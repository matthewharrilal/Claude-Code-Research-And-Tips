# Lock Sheet: Gas Town -- Steve Yegge (009)

Generated from `_build-log.md` and `_gate-results.json` (re-run on correct page gas-town-steve-yegge/output.html).

---

## LOCKED (Soul) -- Cannot change

| Element | Gate | Measured | Why Locked |
|---------|------|----------|------------|
| Container 960px | SC-01 PASS | 960px | Identity prohibition. 940-960px. |
| border-radius: 0 | SC-02 PASS | 0 on all | Identity prohibition. Sharp edges. |
| box-shadow: none | SC-02 PASS | none on all | Identity prohibition. Flat surfaces. |
| Font trinity | SC-03 PASS | Inter, Instrument Serif, JetBrains Mono only | Identity prohibition. |
| Warm palette R>=G>=B | SC-04 PASS | all warm | Identity prohibition. |
| No pure #000/#FFF | SC-05 PASS | none found | Identity prohibition. |

## LOCKED (Research) -- Changing risks regression

| Element | Gate | Measured | Why Locked |
|---------|------|----------|------------|
| Zone bg deltas >= 15 RGB | SC-09 PASS | Z1->Z2: 18, Z2->Z3: 15, Z3->Z4: 20 | Z2->Z3 at exactly 15 -- FRAGILE. |
| Stacked gaps <= 120px | SC-10 PASS | 0/0/40px at boundaries | Well under threshold. |
| Typography hierarchy | SC-11 PASS | 32px display-body delta, 6 clusters | Well above floor (>=10px, >=3). |
| Multi-coherence avg 4.00 | SC-13 PASS | 4ch/4ch/4ch, avg 4.00 | At EXACT Flagship floor -- FRAGILE. |
| Coherence direction 100% | SC-13B PASS | DEEPENING/DEEPENING/RESOLVING | All boundaries aligned. |
| No sub-perceptual letter-spacing | SC-14 PASS | 0 violations | Builder fixed Z3 heading inheritance. |
| Border configs 12 distinct | SC-15 PASS | 12 configs | Well above floor (>=3). |
| 4 content zones | SC-12 PASS | 4 zones | Within 3-5 target. |
| 20 ARIA landmarks | SC-06 PASS | 20 | Well above floor (>=5). |
| Skip link | SC-07 PASS | present | Accessibility requirement. |
| 18 component types | SC-08 PASS | 18 types | Well above floor (>=8). |
| Channel deltas match TC brief | SC-17 PASS | overrides documented | All with compositional reasoning. |
| Fractal echo 5 scales | DG-1 PASS | 5 rows, evidence, direction | All scales with CSS evidence. |
| Cascade value table | DG-2 PASS | 123 lines, all boundaries | Complete. |
| Landmark structure | DG-3 PASS | header+main+footer | Present. |
| Quality floor 5 sub-checks | DG-4 PASS | 15 mechanisms, 3 transition types, 2 grids | All pass. |
| Metaphor independence | BG-1 PASS | TC Phases 0-4 executed | Derived before library. |
| Metaphor structural | BG-2 PASS | COMMAND POST / FIELD DISPATCH | CSS-implying: border-weight=rank, bg=clearance, spacing=urgency. |

## CHALLENGEABLE (Builder) -- Open to improvement

| Element | Current State | Why Challengeable |
|---------|--------------|-------------------|
| Dark header/footer bookend styling | 3px red borders, stats bar, tags | Builder creative choice. |
| Drop cap in Z1 | Singular serif emphasis | Builder single-use mechanism. |
| Bento grid layout in Z2 | 7 roles, Mayor span-2 | Only multi-column layout. |
| Confidence color assignments | coral/amber/green/purple/blue mapping | Color-semantic mapping is builder choice. |
| Callout component styling | 4px border-left, cream bg, mono labels | 2-zone DNA implementation. Adjustable. |
| Code block dark styling in Z4 | Dark bg deployment orders | Builder metaphor expression. |
| Checkpoint bar Z3->Z4 | 3px border, mono label, 40px total gap | Builder checkpoint mechanism. |
| Z3 paragraph font-weight 600 | DEEPENING urgency encoding | Fix cycle 1 choice. Adjustable if readability flagged. |
| SC-16 monotonic progression | ADVISORY (not achieved) | No monotonic arc. Non-blocking. |
| Spacing compression arc | 64/40/32/32 vertical padding | Builder dispatch-compression. |
| Mental model component Z4 | 3px border + amber label | Builder designed moment. |

---

## Summary

- **24/25 gates PASS** (1 ADVISORY: SC-16)
- **0 FAIL**
- **SC-13 avg at exactly 4.00** -- Flagship floor. Fragile.
- **SC-09 Z2->Z3 at exactly 15 RGB** -- Minimum threshold. Fragile.
- **Key strengths:** Rich border vocabulary (12 configs), dense components (18 types), strong accessibility (20 landmarks), documented overrides, structural metaphor, zero stacking issues.
- **Key risks:** SC-13 and SC-09 at exact minimums. Any regression drops below threshold.
