# DELTA-11-channel: Gap Report

**Auditor:** delta-check agent
**Date:** 2026-02-17
**FILE 1 (audit):** `ephemeral/prompt-fix-enrich/11-channel-deep-crossref.md`
**FILE 2 (prompt):** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**Scope:** CRITICAL and IMPORTANT items only. NICE-TO-HAVE items excluded.

---

## STILL MISSING (5 items)

### CRITICAL: 2 items unresolved

---

**CRITICAL-1: "3 channels per transition" rule**
- FILE 1 section: 6.1 (Channel Dominance Threshold / Anti-Pattern 2 prevention)
- FILE 1 stated: SC-09 (insertable) -- "Minimum 3 channels shift at every section transition. Channels: chromatic, typographic, spatial, structural, density, rhythmic. Count >= 3 = PASS."
- Status in FILE 2: SC rules end at SC-08. No SC-09 exists. No "3 channels per transition" rule exists anywhere in the prompt.
- Impact: Without this rule, builders satisfy SC-02 (>= 5/7 channels active somewhere) while using spacing-only transitions at every section boundary. This is Anti-Pattern 2 (Channel Monotony) from Report 15. FILE 1 called this "THE operational expression of 'add channels not levels.'"

**Insertable text (from FILE 1, Section 6.1):**
```
SC-09. Minimum 3 channels shift at every section transition.
       Channels: chromatic (background/color), typographic (size/weight/family), spatial (spacing),
       structural (borders), density (content-per-viewport), rhythmic (element pattern).
       Count channels that change at each section boundary. Count >= 3 = PASS.
       Intentional channel (Ch7) excluded from count (Opus-agent domain, not CSS).
```
**Insert location:** B5 Scale-Channel section, after SC-08.

---

**CRITICAL-2: Metaphor-to-channel mapping message (CP-F)**
- FILE 1 section: 10.1 (Channel Communication Protocol, Checkpoint A)
- FILE 1 stated: CP-F -- "Metaphor Agent -> Planner. REQUIRED before plan creation. CHANNEL MAP: [for each of 7 channels, how the metaphor manifests in that channel]. Without CP-F, Planner MUST NOT begin build plan. BLOCKING."
- Status in FILE 2: C2 communication protocol lists CP-A, CP-B, CP-C, CP-D, CP-E only. No CP-F exists. No checkpoint requires the metaphor agent to send channel mapping to the planner before plan creation.
- Impact: The planner (Pass 0.5) creates the build plan without knowing how the metaphor maps to channels. Mechanism deployment is driven by content analysis alone, severing the metaphor-to-channel connection. FILE 1: "This severs the metaphor-channel connection that is the entire purpose of the channel architecture."

**Insertable text (from FILE 1, Section 10.1):**
```
CP-F (post-metaphor): Metaphor Agent -> Planner. REQUIRED before plan creation.
      "CHANNEL MAP: Ch1=[metaphor color expression]. Ch2=[type expression].
      Ch3=[spacing expression]. Ch4=[border expression]. Ch5=[density expression].
      Ch6=[rhythm expression]. Ch7=[argument arc + cognitive journey]."
      Without CP-F, Planner MUST NOT begin build plan. BLOCKING.
```
**Insert location:** C2 Communication Protocol, before CP-A (as it occurs before the plan-read checkpoint).

---

### IMPORTANT: 3 items unresolved

---

**IMPORTANT-1: C-01 category names don't match mechanism catalog**
- FILE 1 section: 5.1
- FILE 1 stated: C-01 uses "Chromatic" and "Density" which are CHANNEL names (SC-02), not mechanism catalog categories. The mechanism catalog uses S/H/C/D/N (Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Navigation). A builder consulting the catalog to find "Chromatic" category mechanisms would find nothing.
- Status in FILE 2: C-01 (line 166) still reads: "Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+" -- unchanged from what FILE 1 flagged. Fix was NOT applied. The integration log entry for "CHAN" (Channel enrichment from file 11) only shows SC-02 channel definitions were added; C-01 correction was not made.
- Impact: Builder conflates channel names with mechanism categories. Searching mechanism-catalog.md for "Chromatic" category returns nothing. The catalog has Component(C) and Depth/Emphasis(D), not Chromatic or Density.

**Insertable text (from FILE 1, Section 5.1):**
```
C-01. Per-category minimums (mechanism catalog families):
      Spatial(S):1+  Hierarchy(H):1+  Component(C):1+  Depth/Emphasis(D):1+  Structure/Nav(N):1+
      Cross-reference: mechanism-catalog.md "Mechanism Categories" table for mechanism-to-category mapping.
```
**Insert location:** B3 Compositional section, replace existing C-01.

---

**IMPORTANT-2: Cell priority ordering MISSING**
- FILE 1 section: 3.3 (Priority Ordering, "80/20 of Channel-Scale Coverage")
- FILE 1 stated: Under time pressure (staged downgrade at 240 min, C4), the builder has no triage guidance on which channel-scale cells to fill first. The priority order (1. Page-Spatial, 2. Component-Structural, 3. Section-Density, 4. Page-Chromatic...) directly supports graceful degradation.
- Status in FILE 2: SC rules go SC-01 through SC-08. No cell priority ordering exists anywhere in the prompt.
- Impact: A builder under time pressure may fill lower-impact cells (Character-Chromatic via syntax highlighting) while leaving higher-impact cells empty (Section-Density via content pacing). The staged downgrade protocol (C4) needs this to degrade gracefully.

**Insertable text (from FILE 1, Section 3.3):**
```
SC-09 (or SC-10 if SC-09 taken by CRITICAL-1). Cell priority under time pressure (fill HIGH-IMPACT first):
       1. Page-Spatial  2. Component-Structural  3. Section-Density  4. Page-Chromatic
       5. Section-Spatial  6. Component-Typographic  7. Page-Rhythmic  8. Section-Chromatic
       Character-scale cells: LAST (emerge from vocabulary, don't target directly).
```
**Insert location:** B5 Scale-Channel section, after SC-09 (the CRITICAL-1 insertion).

---

**IMPORTANT-3: Channel counts MISSING from CP-B and CP-D**
- FILE 1 sections: 10.2 (CP-B / Transition Spec Message) and 10.3 (CP-D / Builder Channel Self-Count)
- FILE 1 stated:
  - CP-B should include channel count per transition: "Channel count at T1=__, T2=__, T3=__."
  - CP-D should include: channel count at 3 transitions + chromatic-density aligned Y/N + border weight tracks importance Y/N.
- Status in FILE 2:
  - CP-B (line 421-422): "Page height: ___px. Content ratio: __%. Sections: __. Deviations from plan: ___." No channel count fields.
  - CP-D (line 424): "Pass 2 Builder -> Team-Lead. Mechanism count + spatial re-check result." No channel count fields.
  - Neither was updated. The integration log entry for "CHAN" only covers SC-02 channel definitions.
- Impact: No lightweight channel verification occurs before the full Mode 4 PA audit. The most common failure mode (single-channel transitions = Channel Monotony) goes undetected until Gate 5.

**Insertable text (from FILE 1, Sections 10.2 and 10.3):**
```
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Channel count at T1=__, T2=__, T3=__. Deviations from plan: ___."

CP-D (post-elaboration): Pass 2 Builder -> Team-Lead.
     "Mechanisms: __. Spatial re-check: S-01 PASS/FAIL, S-02 PASS/FAIL.
     Channel count at 3 transitions: T1=__, T2=__, T3=__.
     Chromatic-density aligned: Y/N. Border weight tracks importance: Y/N."
```
**Insert location:** C2 Communication Protocol, replacing existing CP-B and CP-D text.

---

## ALREADY FIXED (4 items)

**FIXED-1: Channel definitions not in prompt (FILE 1 section 1.1, classified IMPORTANT)**
SC-02 in FILE 2 (lines 222-227) now includes a full compact CHANNEL DEFINITIONS block: Ch1 CHROMATIC through Ch7 INTENTIONAL, with CSS-property descriptions for each. Integration log confirms: "CHAN | Channel definitions | 11-channel-deep-crossref.md | SC-02: 7 channel definitions + axis distinction."

**FIXED-2: Channels vs mechanisms distinction not explicit (FILE 1 section 1.2, classified IMPORTANT)**
Same SC-02 expansion in FILE 2 (lines 226-227) explicitly states: "Channels are NOT mechanisms. They are AXES along which mechanisms operate. 5 spatial mechanisms = 1 channel (Spatial) with 5 tools, NOT 5 channels." This directly addresses Anti-Pattern 6 (Channel-Mechanism Confusion) from Report 15.

**FIXED-3: Transition type names inconsistent (FILE 1 section 8.2, classified IMPORTANT)**
C-05 in FILE 2 (line 173) now includes: "Catalog mapping: SMOOTH = catalog 'SPACING SHIFT', BRIDGE = catalog 'CHECKPOINT', BREATHING = catalog 'HARD CUT'." Integration log confirms: "HP-02 | Transition map | 02-high-fix-spec.md | C-05: Added catalog mapping." The name mismatch between prompt and mechanism catalog is now bridged.

**FIXED-4: RDT / Reinforcing pairs at transitions (FILE 1 section 6.2, classified IMPORTANT)**
FILE 1's MC-09 insertion (reinforcing pairs at transitions: >= 2 transitions with >= 2 reinforcing channel pairs) was not added as a standalone rule, but FILE 2 already had MC-02 at page level and C-08 as a gate minimum. This partial coverage was noted in FILE 1 itself ("MC-02 combined with C-04 provides partial distribution"). However, the explicit MC-09 rule was not added. Re-examining FILE 1: this item WAS classified IMPORTANT with insertable text. Verdict: PARTIALLY FIXED (concept present, transition-level granularity absent). Noted above under STILL MISSING as part of IMPORTANT-3 context, but since FILE 1 presented this as a separate item from CP-B/CP-D, recording here for completeness -- the MC-09 rule itself was not added to FILE 2's MC section.

**Correction note:** MC-09 (reinforcing pairs at transitions) is a distinct IMPORTANT item that was NOT added. It belongs in the STILL MISSING list. However because it was the lowest-severity IMPORTANT item and FILE 1 itself noted "MC-02 combined with C-04 provides partial distribution," it is flagged here as a borderline case rather than grouped with the clear gaps above.

---

## SUMMARY TABLE

| # | Classification | Item | Status |
|---|---------------|------|--------|
| 1 | CRITICAL | 3 channels per transition (SC-09) | STILL MISSING |
| 2 | CRITICAL | CP-F metaphor-to-channel map message | STILL MISSING |
| 3 | IMPORTANT | C-01 category names (Chromatic/Density vs catalog S/H/C/D/N) | STILL MISSING |
| 4 | IMPORTANT | Cell priority ordering under time pressure | STILL MISSING |
| 5 | IMPORTANT | Channel counts in CP-B and CP-D | STILL MISSING |
| 6 | IMPORTANT | Channel definitions (SC-02 expansion) | ALREADY FIXED |
| 7 | IMPORTANT | Channels vs mechanisms distinction (SC-02) | ALREADY FIXED |
| 8 | IMPORTANT | Transition type name alignment (C-05 catalog mapping) | ALREADY FIXED |
| 9 | IMPORTANT | MC-09 reinforcing pairs at transitions (borderline) | NOT ADDED (partial coverage via MC-02 + C-04) |

**CRITICAL still missing: 2/2**
**IMPORTANT still missing: 3/6 (plus 1 borderline)**
**IMPORTANT already fixed: 3/6**

---

**END DELTA-11-channel**
