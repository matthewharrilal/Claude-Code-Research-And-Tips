# Conviction Items Verification Matrix

**Agent:** conviction-verifier (Opus 4.6)
**Date:** 2026-02-17
**Scope:** Verify all 12 conviction items from checklist Section 5A appear in execution prompt Layer 1

---

## Source Files

- **Checklist conviction items:** `_pre-flight/13-MASTER-PRE-FLIGHT-CHECKLIST.md` lines 577-594
- **Execution prompt Layer 1:** `_checkpoint/master-execution-prompt.md` lines 5-40
- **Assembly journal:** `_checkpoint/prompt-assembly-journal.md` (classification decisions)

---

## Verification Matrix

| ID | Checklist Content | Verdict | Evidence | Notes |
|----|-------------------|---------|----------|-------|
| **CV-01** | Beauty brief: "Feel like opening a well-made book." 3-word personality: Warm. Authoritative. Unhurried. | **COMPRESSED** | Line 7: "confident, unhurried editorial authority." Line 15: "Warm without being soft. Austere without being cold. Authoritative without being aggressive. Restrained without being empty." | The 3 personality words (Warm, Authoritative, Unhurried) are present but distributed across two paragraphs rather than stated as a 3-word brief. "Unhurried" appears in line 7, "Warm" and "Authoritative" in line 15. The exact phrase "Feel like opening a well-made book" is **ABSENT**. The book metaphor is missing entirely. |
| **CV-02** | 4 resolved tensions: Temperature (warm not soft), Weight (heavy not oppressive), Density (rich not cluttered), Decoration (intentional not decorative) | **COMPRESSED** | Line 15: "Warm without being soft. Austere without being cold. Authoritative without being aggressive. Restrained without being empty." | Only 2 of 4 tensions are faithfully represented. Temperature ("Warm without being soft") matches exactly. The other three are REWRITTEN: "heavy not oppressive" became "austere without being cold" (different concept); "rich not cluttered" became "restrained without being empty" (inverted framing); "intentional not decorative" is absent entirely. The NAMES of the tensions (Temperature, Weight, Density, Decoration) are missing. |
| **CV-03** | Perceptual sequence: 0-1s Arrival, 1-2s Orientation, 2-3s First delight, 3-5s Pattern detection | **ABSENT** | Not found anywhere in Layer 1 (lines 5-40) or in any other layer. | The 4-phase perceptual sequence is completely missing. The assembly journal does not list it as a discarded item either, suggesting it was inadvertently dropped during compression. |
| **CV-04** | Flagship = max intentionality, NOT most mechanisms, NOT most CSS. Most careful, most deliberate, most precise. | **PRESENT** | Line 15: "Every mechanism you deploy must serve the CONTENT'S needs, not demonstrate vocabulary breadth." Line 23: "Restraint is a richness driver: richness follows a concave curve -- it increases with complexity up to a point, then DECREASES." Layer 2 line 45: "Your mission is beauty, not compliance." Also journal item C12. | The CONCEPT is faithfully represented across multiple locations, though the exact phrasing "max intentionality, NOT most mechanisms" is absent. The idea is encoded structurally through the restraint creed, the mechanism hard cap (14), and the repeated "content's needs" framing. Arguably STRONGER in effect than a single statement. |
| **CV-05** | 5 scales = mathematical ceiling. Beyond 5, add CHANNELS not LEVELS. NEVER target 6+. | **ABSENT** | Not found in Layer 1 or elsewhere in the prompt. | The scale ceiling concept is missing entirely. The assembly journal does not list it as discarded. This is a significant omission because it provides critical guidance on spatial complexity. |
| **CV-06** | PA-05 > scale count. Middle at 2 scales scored 4/4. Ceiling at 4 scored 1.5/4. PA-05 has ABSOLUTE PRIORITY over scale depth. | **ABSENT** | Not found in Layer 1 or elsewhere in the prompt. | Missing. The journal maps this as part of item C12 ("Every mechanism serves CONTENT, not demonstrates vocabulary") but the SPECIFIC empirical evidence (2 scales > 4 scales) and the priority hierarchy (PA-05 > scale count) are lost. This is not the same as saying "serve content" -- it provides a concrete decision rule. |
| **CV-07** | Dual richness sources. Source 1 (constraint pressure) = automatic via soul. Source 2 (design intelligence) requires Opus. BOTH necessary. Source 1 alone = "professionally stiff." | **COMPRESSED** | Lines 18-19: "Designed has two dimensions: vocabulary fluency (knowing mechanisms) and compositional fluency (choosing mechanisms that EXPRESS a coherent concept). Both are necessary. Neither is sufficient alone." | The STRUCTURE is faithfully represented (two sources, both necessary, neither sufficient). But the CONTENT has shifted: the checklist says "constraint pressure" + "design intelligence"; the prompt says "vocabulary fluency" + "compositional fluency." These are related but different framings. "Professionally stiff" warning is absent. The dual-source concept survives; the constraint-pressure framing does not. |
| **CV-08** | Guard against technique-as-demonstration. For each mechanism: "What does READER gain?" If answer is "demonstrates the mechanism" -> fail. | **PRESENT** | Line 15: "Every mechanism you deploy must serve the CONTENT'S needs, not demonstrate vocabulary breadth. If you cannot articulate why a mechanism belongs in a specific location, it does not belong there." Also Pass 3 (line 99): "Would removing this make the page worse?" | Faithfully represented. The exact test ("What does READER gain?") becomes "why a mechanism belongs in a specific location" -- same diagnostic, different wording. The "demonstrates the mechanism -> fail" logic is captured by "not demonstrate vocabulary breadth." |
| **CV-09** | Intentional vs abandoned whitespace. Space between composed elements = intentional. Space after content trails off = abandonment. | **COMPRESSED** | K2 (line 32): "Content-to-void >= 70%." K3 (line 33): "no 2+ consecutive viewport-height positions below 30% content." | The DIAGNOSTIC (how to detect abandoned whitespace) is encoded as kill rules K2 and K3. But the CONCEPT (intentional vs abandoned) is absent. The builder gets the measurement without the understanding. The assembly journal notes (Observation 5, line 242) that prohibition #21 is the "actual enforcement mechanism" -- but this prohibition is in the reference layer, not conviction. The conceptual framing that helps a builder THINK about whitespace is lost. |
| **NR-14** | "12/12 concept + faithful execution = 1.5/4 product." Concept quality does NOT predict product quality. | **ABSENT** | Not found in Layer 1 or elsewhere in the prompt. | This is a critical warning against overconfidence. The ceiling experiment scored 12/12 on concept and 9/9 on novelty but produced a 1.5/4 product. This cautionary data point is completely missing. The assembly journal does not list it as discarded. |
| **NR-15** | "Richness comes from signal-to-silence ratio, not signal volume." | **COMPRESSED** | Line 23: "Restraint is a richness driver: richness follows a concave curve -- it increases with complexity up to a point, then DECREASES as complexity overwhelms spatial confidence." | The underlying principle (more signal does not mean more richness) is present but expressed differently. "Signal-to-silence ratio" is a more memorable and actionable phrasing than "concave curve." The concave curve is a mathematical metaphor; signal-to-silence is a design metaphor. Both encode the same truth. The prompt version is arguably more precise but less quotable. |
| **NR-16** | "Content-driven decisions create more perceptual impact than structural ones." The border-weight gradient was the ONLY mechanism the novelty evaluator highlighted. | **COMPRESSED** | Line 15: "Every mechanism you deploy must serve the CONTENT'S needs." Lines 9-11: Self-referential concept frames content as driver. | The principle is present in spirit ("content's needs" framing) but the SPECIFIC evidence (border-weight gradient = only highlighted mechanism) is missing. Without the evidence, the principle is another generic "serve the content" statement. The evidence is what gives it teeth: it shows that CONTENT-DRIVEN mechanisms are more NOTICED than structural ones. |

---

## Summary

| Verdict | Count | IDs |
|---------|-------|-----|
| **PRESENT** | 2 | CV-04, CV-08 |
| **COMPRESSED** | 6 | CV-01, CV-02, CV-07, CV-09, NR-15, NR-16 |
| **ABSENT** | 4 | CV-03, CV-05, CV-06, NR-14 |

**Overall: 2/12 PRESENT, 6/12 COMPRESSED (with varying fidelity), 4/12 ABSENT.**

---

## Risk Assessment

### ABSENT Items -- Should They Be Added?

| ID | Should Add? | Priority | Reasoning |
|----|-------------|----------|-----------|
| **CV-03** | YES | HIGH | The perceptual sequence (0-1s Arrival, etc.) is a concrete design tool. It tells the builder what the reader should experience at each moment. No other conviction item provides this temporal framing. ~2 lines to add. |
| **CV-05** | YES | MEDIUM | "5 scales max, add CHANNELS not LEVELS" is a binary decision rule -- exactly the kind agents follow at 100%. Without it, a builder could chase 6-7 hierarchical levels. ~1 line to add. |
| **CV-06** | YES | HIGH | The PA-05 priority hierarchy is THE key lesson from the ceiling experiment. Without it, a builder optimizing for "richness" may add scales instead of improving composition quality. This is the most dangerous omission. ~1 line to add. |
| **NR-14** | YES | HIGH | "12/12 concept = 1.5/4 product" is the single most powerful cautionary data point in the entire research history. Without it, builders can feel confident because their concept is strong. This is exactly the mistake the ceiling experiment made. ~1 line to add. |

### COMPRESSED Items -- Fidelity Concerns

| ID | Fidelity | Risk | Action Needed? |
|----|----------|------|----------------|
| **CV-01** | MEDIUM | LOW | "Well-made book" metaphor lost but 3 personality words survive. Acceptable compression. No action needed. |
| **CV-02** | LOW | MEDIUM | Only 1 of 4 tensions (Temperature) is faithful. Weight, Density, Decoration are rewritten into different concepts. The 4-tension framework was designed as a complete system. **Consider restoring the original 4 tension names as a sub-list.** ~2 lines. |
| **CV-07** | MEDIUM | LOW | Dual-source concept survives with different framing. "Professionally stiff" warning adds color but the core message lands. No action needed. |
| **CV-09** | LOW | MEDIUM | Kill rules K2/K3 encode the measurement but lose the conceptual framing. A builder who understands "intentional vs abandoned" whitespace makes better design decisions than one checking ">= 70%." **Consider adding 1 sentence of conceptual framing before K2.** |
| **NR-15** | MEDIUM | LOW | "Concave curve" captures the principle. Acceptable compression. No action needed. |
| **NR-16** | LOW | MEDIUM | Without the border-weight evidence, this is indistinguishable from generic "serve content" advice. **Consider adding the evidence as a parenthetical.** ~15 words. |

---

## Recommended Additions (Estimated +8 lines)

If the prompt assembly team decides to address the gaps, here are minimal additions:

**For CV-03** (after line 15, inside "What Beauty Means Here"):
> Perceptual sequence: 0-1s Arrival (orientation), 1-2s Recognition (navigation), 2-3s First delight (unexpected density moment), 3-5s Pattern detection (mechanisms become visible system).

**For CV-05 + CV-06** (after line 23, inside "The Builder's Creed"):
> 5 scales is the mathematical ceiling. Beyond 5, add channels (color, border, type), not levels. PA-05 has absolute priority over scale depth: 2 scales at 4/4 outperforms 4 scales at 1.5/4.

**For NR-14** (after line 23, inside "The Builder's Creed"):
> Concept quality does not predict product quality. The ceiling experiment scored 12/12 concept, 9/9 novelty, and produced a 1.5/4 product. Execution discipline matters more than creative ambition.

**For CV-02 fix** (replace line 15 content):
> Walking four resolved tensions simultaneously: Temperature (warm not soft), Weight (heavy not oppressive), Density (rich not cluttered), Decoration (intentional not decorative).

---

## Verdict

The execution prompt captures the SPIRIT of most conviction items but loses critical SPECIFICS -- particularly the empirical evidence (CV-06, NR-14) and concrete decision tools (CV-03, CV-05) that distinguish conviction from generic good advice. The 4 ABSENT items are all HIGH or MEDIUM priority and can be restored in ~8 lines total (well within the 15-line headroom the assembly journal reports: 230/240 lines used).

**Recommendation: Add the 4 ABSENT items and fix the 3 low-fidelity compressions. Total cost: ~10 lines. This brings conviction coverage to 12/12 with no items below MEDIUM fidelity.**
