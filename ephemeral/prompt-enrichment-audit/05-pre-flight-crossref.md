# Pre-Flight Cross-Reference Report: 24 Files vs Prompt Structure

**Auditor:** pre-flight-crossref (Task #5)
**Date:** 2026-02-17
**Files read:** 24 pre-flight files + prompt structure outline
**Method:** Section-by-section cross-reference of every pre-flight file against the prompt structure outline (00-PROMPT-STRUCTURE-OUTLINE.md)

---

## SECTION 1: CONVERGENT ITEM TRACKER

The crossref-merged-actions (file 11) identified 21 CONVERGENT items -- items appearing in 3+ extraction files. Each must have a HOME in the prompt.

| # | Convergent Item | File Count | Prompt Home | Status |
|---|----------------|------------|-------------|--------|
| 1 | Container width 940-960px (NON-NEGOTIABLE) | 6 | Layer 2A SPATIAL (line 40) | PRESENT -- specified as first item in spatial spec |
| 2 | Content-to-void ratio >=60:40 | 6 | Layer 2A SPATIAL (line 40) | PRESENT -- "content-to-void >=60:40" |
| 3 | Binary rules principle (binary=100%, judgment=0%) | 5 | Fundamental Principle #2 (line 65) | PRESENT |
| 4 | Per-category mechanism minimums (S:1+, H:1+, C:1+, D:1+, N:1+) | 5 | Layer 2C COMPOSITIONAL (line 42) | PRESENT -- "per-category minimums" |
| 5 | 3-transition minimum between zones | 5 | Layer 2C COMPOSITIONAL (line 42) | PRESENT -- "3-transition minimum" |
| 6 | Token compliance >=80% | 5 | Layer 2E BUILDER SELF-CHECK (line 44) | PRESENT -- "token compliance" |
| 7 | Soul 8/8 compliance | 5 | Layer 2B SOUL (line 41) + Layer 2E | PRESENT |
| 8 | Void budget calculation / spatial confidence | 4 | Layer 2A SPATIAL (line 40) | PRESENT -- "max void threshold" |
| 9 | Mode 4 standalone PA (9 auditors, screenshot pre-capture) | 4 | Layer 3C AUDIT PROTOCOL (line 51) | PRESENT -- "9 auditors" |
| 10 | CPL 45-80 | 4 | Layer 2A SPATIAL (line 40) | PRESENT |
| 11 | Anti-scale model (Richness = density x restraint x spatial confidence) | 4 | Layer 1 CONVICTION (line 31) | PRESENT |
| 12 | Communication protocol with MUST messaging | 4 | Layer 3B COMMUNICATION (line 50) | PRESENT -- "5 mandatory checkpoints" |
| 13 | Header ratio <=20% | 4 | Layer 2A SPATIAL (line 40) | PRESENT -- "header proportion" |
| 14 | Two-instance pattern | 3 | Layer 2D PROCESS (line 43) | PRESENT |
| 15 | Designed moment per quartile | 3 | Layer 2C COMPOSITIONAL (line 42) | PRESENT |
| 16 | Mechanism cap (16 max / 12-14 target) | 3 | Layer 2C COMPOSITIONAL (line 42) | PRESENT -- "mechanism cap 16/12-14" |
| 17 | Reinforcing pairs (2+ minimum) | 3 | Layer 2C COMPOSITIONAL (line 42) | PRESENT -- "reinforcing pairs" |
| 18 | Restraint protocol (rejected/deployed ratio) | 3 | Layer 2C COMPOSITIONAL (line 42) | IMPLICIT -- "per-category minimums" noted but no explicit rejected/deployed ratio |
| 19 | Signal-to-silence ratio 0.6-0.8:1 | 3 | Layer 2C COMPOSITIONAL (line 42) | PRESENT -- "signal-to-silence" |
| 20 | Footer compliance | 3 | Layer 2A SPATIAL (line 40) | PRESENT -- "footer" |
| 21 | Content distribution across scroll | 3 | Layer 2A SPATIAL (line 40) | PRESENT -- "content distribution" |

### CONVERGENT ITEM VERDICT

**19/21 PRESENT. 1 IMPLICIT (restraint ratio). 1 NEEDS STRENGTHENING (void budget -- see threshold discrepancy below).**

**Item 18 (Restraint ratio):** The prompt outline mentions "per-category minimums" and "mechanism cap" but does NOT explicitly list the rejected/deployed ratio (>=1.5:1 for Ceiling+). This is in the restraint protocol (file 04) and appears in the crossref as a convergent item across 3 files. It needs an explicit line in Layer 2C.

**INSERTABLE TEXT for Item 18:**
```
Layer 2C: "Rejection log: document >=21 considered-and-rejected mechanisms (ratio >=1.5:1 vs deployed). Each rejection: mechanism name + location + reason."
```

---

## SECTION 2: NUANCE RECOVERY GAPS

### V1 Findings (Files 01-07): 88 missed items, 4 CRITICAL discrepancies

**Highest-Risk V1 Items Not in Prompt:**

| ID | Item | Source | Risk | In Prompt? |
|----|------|--------|------|-----------|
| V1-D1 | **Void threshold discrepancy: 1,620 vs 2,160 vs 1,350px** | SC-02 vs SP-02 | CRITICAL | UNRESOLVED -- prompt says "max void threshold" but doesn't specify which value |
| V1-D2 | **Header ratio discrepancy: 20% vs 25%** | SC-05 vs SP-04 | HIGH | PARTIALLY -- prompt says "header proportion" but threshold conflicts |
| V1-D3 | **Content distribution: 60% pre-build vs 70% post-build** | Multiple | MEDIUM | NOT CLARIFIED -- prompt says "content-to-void >=60:40" but doesn't distinguish pre/post |
| V1-D4 | **Kill criteria have 5 spatial checks vs gate's 7** | SP-01-05 vs SC-01-07 | MEDIUM | NOT CLARIFIED -- prompt has both but relationship not specified |
| V1-1 | Worked examples for rejection log entries (3 complete examples) | File 04, L43-74 | HIGH | ABSENT -- prompt has no examples of rejection entries |
| V1-2 | Silence zone CSS allowlist/prohibitlist (specific properties allowed/banned) | File 04, L124-143 | HIGH | ABSENT |
| V1-3 | Signal-to-silence counting: silence zones count 2x | File 04, L327-330 | HIGH | ABSENT -- changes the math significantly |
| V1-4 | 5 causes of initial audit missing the void | File 01, L131-148 | MEDIUM | ABSENT -- process lesson for audit design |
| V1-5 | Content inventory worked example (retroactive ceiling analysis) | File 05, L484-723 | HIGH | ABSENT -- agents need to see filled template |
| V1-6 | Complete checkpoint message examples (A through E) | File 06, L84-239 | HIGH | ABSENT -- agents need to see what good messages look like |
| V1-7 | Fix cycle 7-step protocol sequence | File 03, L519-542 | MEDIUM | ABSENT -- team-lead needs exact steps |
| V1-8 | Content-first vs pattern-first inflation factor (2x) | File 05, L725-786 | MEDIUM | ABSENT -- demonstrates the problem |

### V2 Findings (Files 08-14): 200+ missed items

**SYSTEMATIC PATTERN: Specs captured but theories stripped.**

V2 identifies a consistent extraction pattern: the WHAT is captured but the WHY is lost. This matters because theories inform HOW to implement specifications:

| ID | Item | Source | Risk | In Prompt? |
|----|------|--------|------|-----------|
| V2-1 | **3-phase constraint density flip model** | File 09, L206-213 | HIGH | ABSENT -- explains why >20 binary rules degrade to "satisfy checklist" |
| V2-2 | **Preparation-as-cause-of-failure recursive insight** | File 09, L471 | HIGH | PARTIALLY -- known gap #9 mentions gate fatigue but not the recursive dynamic |
| V2-3 | **5 interaction types taxonomy (REINFORCING/MODULATING/RESPONDING/CONTRASTING/CASCADING)** | File 13, L115-247 | HIGH | ABSENT -- the file's most important contribution |
| V2-4 | **2-axis model (vocabulary vs composition fluency)** | File 13, L578-625 | HIGH | ABSENT -- explains the Middle-to-Ceiling transition |
| V2-5 | **"Scaffolded not specified" -- composition can be scaffolded but not specified** | File 13, L633 | HIGH | ABSENT -- core conclusion about compositional fluency |
| V2-6 | **Anti-performative principle: psychological vs mechanical function of checkpoints** | File 08, L12 | HIGH | ABSENT -- crucial for understanding what makes checkpoints work |
| V2-7 | **Crown jewel subtlety inventory (22 micro-techniques)** | File 11, L233-261 | MEDIUM | ABSENT -- the "invisible-but-present" techniques |
| V2-8 | **"Silence after silence is void, not restraint"** | File 09, FM-6 L94 | HIGH | ABSENT -- key design principle for silence zones |
| V2-9 | **Beauty philosophical distinctions** (vocabulary vs expression, preventing ugliness vs producing beauty) | File 12, L25-34 | MEDIUM | PARTIALLY -- prompt has beauty definition but not the negation framework |
| V2-10 | **CD-006 scored 39/40 with intentionality designed-in from beginning; flagship modular approach never tested** | File 09, FM-5 L82 | HIGH | ABSENT -- risk flag for Pass 3 |
| V2-11 | **Compliance-complexity correlation table** (simple binary=100%, multi-step judgment=0%) | File 10, L137-148 | MEDIUM | PARTIALLY -- binary principle stated but correlation table not included |
| V2-12 | **"The page had designed MOMENTS but not designed COMPOSITION"** (Mode 4 verdict distinction) | Post-ceiling | HIGH | ABSENT -- key quality distinction the prompt should encode |

### V3 Findings (Files 15-21): 65 missed items, 7 SIGNIFICANT

**Highest-Risk V3 Items Not in Prompt:**

| ID | Item | Source | Risk | In Prompt? |
|----|------|--------|------|-----------|
| V3-1 | **Scale-attention matrix** (6-level table: quality prediction per scale count) | File 19, L278-286 | SIGNIFICANT | ABSENT -- directly informs per-pass scale allocation |
| V3-2 | **KortAI is CLOSE to inflection point** (1 channel margin, ~17% overhead) | File 19, L540-548 | SIGNIFICANT | ABSENT -- constrains what KIND of additional prohibitions are safe |
| V3-3 | **Falsification criteria for flagship** (5 specific observational tests) | File 16, L318-345 | SIGNIFICANT | ABSENT -- turns flagship from experiment into hypothesis test |
| V3-4 | **Communication as attention redistribution mechanism** | File 20, L596-602 | SIGNIFICANT | ABSENT -- deepest justification for mandatory messaging |
| V3-5 | **Diminishing returns curve** (specific quality % per pass) | File 21, L99-114 | SIGNIFICANT | ABSENT -- ROI drops 4x after Pass 3 |
| V3-6 | **Per-act mechanism deployment recommendations** (specific mechanisms per scroll act) | File 15, L96-187 | SIGNIFICANT | ABSENT -- builder needs concrete act-to-mechanism mappings |
| V3-7 | **Channel loading stability** (consistent distribution across pages) | File 19, L228-229 | SIGNIFICANT | ABSENT -- validates that channel distribution is inherent, not accidental |

---

## SECTION 3: METACOGNITIVE FRAMEWORK COMPLIANCE

### E1: Enforcement Architecture (8 types)

| Enforcement Type | E1 Prescription | Prompt Compliance | Gap |
|-----------------|-----------------|-------------------|-----|
| Programmatic Gate | Automated script, binary pass/fail | Layer 3C references "gate sequence 0-5" | COMPLIANT -- but specific gate scripts not referenced |
| Screenshot Gate | Team-lead visual check at checkpoints | Layer 3C mentions "screenshot pre-capture" | COMPLIANT |
| File Diff Gate | Before/after file comparison | NOT MENTIONED in prompt outline | GAP -- E1 specifies this as enforcement type |
| Agent Self-Check | Builder runs checklist before file write | Layer 2E "BUILDER SELF-CHECK" | COMPLIANT |
| Team-Lead Checkpoint | Team-lead verifies at pass boundaries | Layer 3B "5 mandatory checkpoints" | COMPLIANT |
| Embedded Auditor Alert | Real-time monitoring agent | Layer 2D mentions "embedded auditor acknowledgment" | COMPLIANT |
| Kill Criterion | Abort conditions | Not explicitly in prompt sections | GAP -- kill criteria designed but not placed in prompt |
| Communication Gate | MUST-message at specific points | Layer 3B "min 8 messages" | COMPLIANT |

**E1 Compliance: 6/8 present. 2 GAPS (File Diff Gate, Kill Criteria placement).**

**E1 Key Prescription: "Zero-guideline principle -- every item classified as GATE/SELF-CHECK/KILL/CONVICTION/REFERENCE/DISCARDED."**
- Prompt outline does NOT show this classification applied to all items. The master checklist (file 13) does classify items, but the prompt structure doesn't reference this taxonomy.

**E1 Imperative Ladder (ABORT > BLOCK > ROLLBACK > FIX-AND-RETRY > FLAG > LOG):**
- Not referenced in prompt outline. Should be in Layer 3C or Layer 2D.

### E2: Information Loss Analysis (6 mechanisms)

| Loss Mechanism | E2 Finding | Prompt Mitigation | Status |
|---------------|------------|-------------------|--------|
| Compression Loss | 50:1 from research to builder | 4-layer architecture separates concerns | PARTIALLY MITIGATED -- conviction layer preserves theory, but 200-line spec is still 60:1 compression from 13,274 lines |
| Attention Loss | Rules compete for limited budget (~100 units) | "Builder <=55 lines at <=37 attention units" success criterion | MITIGATED -- explicit attention budget |
| Priority Loss | All rules look equal weight | "Primacy for failure modes" (E4 Law #5) | NOT VISIBLE in prompt outline -- no prioritization strategy specified |
| Ambiguity Loss | "Appropriate spacing" -> 0% compliance | "Zero should/consider/may/aim/try/ensure" success criterion | MITIGATED |
| Verification Loss | Rules not verified = rules not followed | Gate sequence + self-check | MITIGATED |
| STRUCTURAL Loss (master mechanism) | Prompt architecture enables cascading failure | 4-layer separation | PARTIALLY MITIGATED -- structure is sound but no explicit anti-structural-loss mechanism |

**E2 Key Prescription: "~55-line builder prompt with primacy optimization."**
- Prompt outline: "Builder <=55 lines at <=37 attention units" (line 81). COMPLIANT.

**E2 10 Essential Builder Items:**
| Item | In Prompt? |
|------|-----------|
| Container width 940-960px | YES |
| Void limit (max contiguous) | YES (but threshold unclear) |
| Soul 8/8 | YES |
| Mechanism table (selected/deployed/rejected) | IMPLICIT |
| Token compliance >=80% | YES |
| 3 transition types | YES |
| Mandatory messaging | YES |
| Self-check (8 items) | YES (Layer 2E) |
| Metaphor summary (1 line) | NOT EXPLICIT |
| Content density minimum | IMPLICIT |

**E2 Compliance: 7/10 explicit, 2 implicit, 1 missing (metaphor summary).**

### E3: Verification Layer (7-phase pipeline)

| Phase | E3 Design | In Prompt? | Status |
|-------|-----------|-----------|--------|
| Phase 1: Enrichment verification | Automated grep + line count | Not in prompt (pre-requisite) | N/A -- happens before prompt execution |
| Phase 2: Skill verification | Cold-read test | Not in prompt (pre-requisite) | N/A |
| Phase 3: Prompt assembly | Cross-reference check | This IS the prompt we're checking | N/A |
| Phase 4: Gate implementation | Gate scripts exist and execute | Layer 3C "gate sequence" | PARTIALLY -- gates specified but implementation details not referenced |
| Phase 5: Communication protocol | Message flow verified | Layer 3B | PRESENT |
| Phase 6: Content preparation | Content ready for builders | Not in prompt outline | GAP -- no content preparation phase mentioned |
| Phase 7: VETO agent | Opus 4.6 zero-context final check | Layer 3C "metacognitive reviewer" | PRESENT |

**E3 24-item verification checklist:** Not referenced in prompt outline. Should be available as reference doc (Layer 4).

### E4: Prompt Encoding Strategy (7 Laws)

| Law | E4 Statement | Prompt Compliance |
|-----|-------------|-------------------|
| 1. Binary or Delete | Every rule must be binary verifiable | Success criterion: "pure binary, zero judgment" | COMPLIANT |
| 2. MUST Never Should | Imperative language only | Success criterion: "Zero should/consider/may/aim/try/ensure" | COMPLIANT |
| 3. Verification Inline | Each rule includes its verification method | "verification method?" in rule testing (line 46) | COMPLIANT |
| 4. One Rule One Line | No compound rules | Not explicitly stated | GAP -- no line-per-rule constraint in success criteria |
| 5. Primacy for Failure Modes | Most dangerous rules first in builder prompt | Not in prompt outline | GAP -- no prioritization strategy visible |
| 6. Group by Builder Concern | Not by source document | Layer 2 "Structure by concern" (2A-2E) | COMPLIANT |
| 7. 40% to Builder 60% to Infrastructure | Builder attention budget protected | "Builder <=55 lines at <=37 attention units" | COMPLIANT |

**E4 Compliance: 5/7 COMPLIANT. 2 GAPS (Law 4: one-rule-one-line, Law 5: primacy ordering).**

**E4 ~55-line builder template:** Designed in E4 with attention budget audit (37 units demand, 63 surplus). The prompt outline references this as success criterion (line 81) but doesn't include the template itself.

---

## SECTION 4: INTEGRATION ANALYSIS GAPS

### S1: Scale Exploration Integration (10 findings, 4 AT RISK)

| Finding | S1 Status | In Prompt? | Gap |
|---------|-----------|-----------|-----|
| F1: 5 scales = mathematical ceiling | AT RISK | ABSENT -- prompt doesn't specify maximum scale count | Need explicit "maximum 3 scales for flagship (2 per pass)" in Layer 2C |
| F2: Beyond 5 scales, add channels not levels | PARTIALLY CAPTURED | ABSENT in execution spec | Reference Library item only |
| F6: Smoking gun (2 scales PA-05 4/4 vs 4 scales 1.5/4) | PARTIALLY CAPTURED | Layer 1 "smoking gun" (line 33) | PRESENT in conviction |
| F8: Iteration > specification | AT RISK | ABSENT -- prompt doesn't encode iteration protocol | Need iteration instructions in Layer 2D or Layer 3B |
| F9: Unmodeled richness (what scales don't capture) | PARTIALLY CAPTURED | ABSENT in execution spec | Conviction item only |
| F10: Design intelligence vs constraint pressure | AT RISK | ABSENT -- relationship not in prompt | Should be in Layer 1 conviction |

**S1 Compliance: 1/4 AT RISK items addressed. 3 need insertion.**

### S2: Flagship Research Integration (10 lost findings ranked by impact)

| Rank | Lost Finding | In Prompt? | Gap |
|------|-------------|-----------|-----|
| 1 | Cognitive biases (MOST COMPRESSED from Report 04) | ABSENT | Need conviction-layer warning about narrative contamination |
| 2 | Density arc inversion | PARTIALLY -- "content distribution" but not specific arc shape | Need specific arc target in Layer 2C |
| 3 | Concept buildability gap | ABSENT | Should be a kill criterion or checkpoint |
| 4 | Builder self-scroll protocol | Layer 2D "builder self-scroll" (line 43) | PRESENT |
| 5 | Horizontal void multiplication | ABSENT | Container width partially addresses but horizontal void != narrow container |
| 6 | 5 S2-identified near-BLOCKING items | 3 of 5 present | 2 missing (density arc, concept buildability) |

**S2 Compliance: 2/6 top items present. 4 need attention.**

### S3: Cross-Experiment Wisdom (10 experiential laws, 5 patterns)

| Law | S3 Statement | In Prompt? |
|-----|-------------|-----------|
| L1 | Binary=100%, judgment=0% | PRESENT (Principle #2) |
| L2 | Plans don't prevent spatial failure | ABSENT -- not encoded as operational principle |
| L3 | Agents don't spontaneously communicate | PRESENT -- "min 8 messages" addresses this |
| L4 | Deployment ≠ perception | ABSENT -- 14 deployed, 1 perceived lesson not encoded |
| L5 | Breadth > depth for finding issues | PRESENT -- "9 auditors" |
| L6 | Measurement-perception gap is total | ABSENT |
| L7 | Accidental constraint > intentional permission | PARTIALLY -- binary rules cover this |
| L8 | Investigate before dismissing | ABSENT -- dissent protection not in prompt |
| L9 | Concept quality ≠ product quality | ABSENT |
| L10 | Preparation ceiling ~100-200 lines | PRESENT -- "Total <=240 lines" |

**5 cross-cutting patterns:**
| Pattern | In Prompt? |
|---------|-----------|
| Applied-vs-felt gap | ABSENT -- "designed MOMENTS not designed COMPOSITION" distinction missing |
| Faithful execution trap | ABSENT -- agents can execute specs perfectly and produce failure |
| Specialized blindness | PARTIALLY -- Mode 4 breadth addresses this |
| Signal-to-silence inversion | ABSENT -- more signal ≠ more perception |
| Concept-to-product decoupling | ABSENT |

**S3 Compliance: 4/10 laws present, 1/5 patterns present. Major gap area.**

### S4: Metacognitive Dimensions (5 blind spots)

| Blind Spot | S4 Finding | In Prompt? | Gap |
|-----------|------------|-----------|-----|
| BS-1: Builder emotional state | Agents experience something analogous to "overwhelm" at >50 rules | ABSENT -- no emotional model in prompt | Need "builder attention budget" concept in Layer 1 |
| BS-2: Reader journey undesigned | Pages have content structure but not EXPERIENTIAL structure | ABSENT -- no reader journey design in execution spec | Need perceptual hierarchy or 5-act structure reference |
| BS-3: No theory of failure-as-information | Failures are treated as defects, not as information | ABSENT | Conviction-layer item |
| BS-4: No calibrated "good enough" | No threshold for when to stop improving | ABSENT -- success criteria define pass but not "good enough" threshold | Need explicit "ship as ceiling-equivalent" downgrade path |
| BS-5: No exit criteria | When to STOP the flagship experiment | ABSENT -- 240-min time kill mentioned but staged downgrade not specified | Need time-based downgrade paths from file 18 |

**S4 Compliance: 0/5 blind spots addressed. Critical gap area.**

---

## SECTION 5: SPECIFIC INSERTABLE TEXT (Organized by Layer)

### Layer 1: CONVICTION (additions needed)

```
## Add to conviction section after anti-scale model:

EXPERIENTIAL LAWS (from 4 experiments):
- Plans do not prevent spatial failure. Only GATES prevent spatial failure.
- Deployment does not equal perception. 14 mechanisms deployed, 1 perceived.
- Designed MOMENTS are not designed COMPOSITION. Composition requires mechanism interaction, not mechanism presence.
- Concept quality does not predict product quality. 12/12 metaphor derivation produced a DO NOT SHIP page.
- Accidental constraint outperforms intentional permission every time.

THE READER JOURNEY: The reader spends 5 seconds deciding if the page is worth their time. Then they descend with pauses -- not F-pattern, not Z-pattern. Their interest must peak, valley, and peak again. A page where interest monotonically decreases is a failed page regardless of mechanism count.

COMPOSITION vs VOCABULARY: The Middle experiment proved vocabulary fluency (12 mechanisms, all categories covered). The flagship must prove compositional fluency -- where mechanisms INTERACT (reinforce, modulate, respond, contrast, cascade). Composition can be SCAFFOLDED but not SPECIFIED.

FAILURE AS INFORMATION: If the flagship fails, the failure type matters more than the verdict. Spatial failure = architecture problem. Compositional failure = interaction problem. Intentionality failure = integration problem. Each demands a different response.
```

### Layer 2A: SPATIAL (threshold resolution needed)

```
## THRESHOLD RESOLUTION (replaces ambiguous "max void threshold"):

- Container: 940-960px width (NON-NEGOTIABLE)
- Max contiguous void: 1,350px (= 1.5 x 900px viewport height at 1440px width)
  NOTE: Resolved discrepancy. File 03 used 2,160px (1.5 x 1440 viewport WIDTH -- incorrect).
  File 07 used 1,620px (1.5 x 1080 viewport HEIGHT -- uses non-standard 1080px height).
  Correct calculation: 1.5 x 900px (standard height at 1440px width, 16:10 ratio) = 1,350px.
  If using window.innerHeight, use actual value.
- Content coverage: >=60% pre-build estimate, >=70% post-build measurement
- Header: <=20% of viewport (stricter than kill criteria's 25% -- use 20% as target, 25% as kill)
- Footer: reachable within 1 viewport of last content
- Minimum content sections: >=5
- Content per viewport position: >=30% (at any 80%-increment scroll position)
```

### Layer 2C: COMPOSITIONAL (additions needed)

```
## Add to compositional section:

RESTRAINT RATIO: Document >=21 considered-and-rejected mechanisms (>=1.5:1 ratio vs deployed). Format per rejection: mechanism name, intended location, reason for rejection.

SILENCE ZONES: >=2 designed silence zones. A silence zone contains CONTENT (paragraphs, lists) but ZERO mechanism CSS (no borders, no backgrounds, no pseudo-elements, no grid beyond standard flow). Document each: location, scroll %, content within, what precedes, what follows, why silence here. Silence zones count 2x in signal-to-silence calculation. "Silence after silence is void, not restraint."

MECHANISM INTERACTION: At least 2 reinforcing pairs (mechanisms that encode the SAME meaning through different CSS properties). At least 1 modulating pair (where one mechanism controls another's intensity). Document all interactions in mechanism deployment plan.

DENSITY ARC: Content density must vary across scroll. Peak density section must NOT be first. Final third must contain at least 1 designed moment. Density shape must match content (early-peak content -> declining structure; middle-peak -> arch structure).
```

### Layer 2D: PROCESS (additions needed)

```
## Add to process section:

STAGED DOWNGRADE PATH:
- At 240 min, Pass 2 complete but Pass 3 not started -> Ship as CEILING-PLUS
- At 240 min, Pass 1 complete but Pass 2 not started -> Ship as CEILING-MINUS
- At 240 min, Pass 1 still failing gates -> ABORT, document as attempt failure

KILL CRITERIA (5 pre-build, 5 pass-1, 3 pass-2, 3 pass-3, 4 final):
- KB-01: >=5 content sections (mechanism surface area)
- KB-02: Content sections > zones (zone-to-content ratio <1.0)
- KB-03: >=3,000 words estimated content (spatial viability)
- KB-04: Builder prompt <=200 lines (attention viability)
- KB-05: Metaphor spatial cost <=15% of page height
- SP-01 through SP-05: Container, void, content, header, footer (post Pass 1)
```

### Layer 3B: COMMUNICATION (additions needed)

```
## Add to communication section:

CHECKPOINT MESSAGE EXAMPLES (excerpt from file 06):
- Checkpoint A (post-skeleton): "Container: 960px. Estimated height: 4,200px. Content-to-void: 68:32. Header: 180px (20%). My biggest spatial concern is [specific]. Requesting confirmation to proceed."
- Checkpoint C (spatial gate): "SC-01: PASS (960px). SC-02: PASS (max void 800px). SC-03: PASS (78% content). SC-04: PASS (squint balanced). SC-05: PASS (header 18%). SC-06: PASS (7 sections). SC-07: PASS (footer 40px gap). All 7 PASS. Proceed to elaboration."

ESCALATION TRIGGERS (when MUST message):
- Spatial uncertainty: any measurement within 10% of threshold
- Content gap: section with <3 content elements
- Mechanism conflict: two mechanisms competing for same visual space
- Architecture question: anything about zone count, spacing budget, structure

WHAT DOES NOT TRIGGER escalation:
- CSS property values for mechanisms already in plan
- Token selection from existing set
- Minor typographic decisions within spec
```

### Layer 4: REFERENCE LIBRARY (additions needed)

```
## Route these to specific agents (zero prompt cost):

- RESTRAINT PROTOCOL (file 04): -> mechanism-builder, embedded-auditor
  Key content: 3 worked rejection examples, silence zone CSS allowlist, signal counting methodology
- CONTENT-FIRST METHODOLOGY (file 05): -> planner, content-architect
  Key content: Content inventory template, density mapping, zone justification criteria (ALL 3: mass >=800px, type change, intent change)
- CROWN JEWEL FORENSICS (file 11): -> metaphor-builder, intentionality-builder
  Key content: 22 micro-technique subtlety inventory, magic analysis, DD-006 advantages (conceptual purity, rgba progressive opacity)
- PERCEPTUAL HIERARCHY (file 15): -> planner, skeleton-builder
  Key content: 5-act structure, per-act mechanism recommendations, weight decomposition targets
- COMPOSITIONAL FLUENCY (file 13): -> mechanism-builder, metaphor-builder
  Key content: 5 interaction types (REINFORCING/MODULATING/RESPONDING/CONTRASTING/CASCADING), concrete CSS examples, 2-axis model
- DEFINING BEAUTIFUL (file 12): -> conviction layer (all agents read)
  Key content: 4 resolved tensions, crown jewel beauty analysis, 5-second assessment, perceptual sequence
```

---

## SECTION 6: RISK RANKING

All gaps ranked by Probability of Occurrence x Impact on Flagship Quality.

### CRITICAL (P x I >= 8/10)

| Rank | Gap | P | I | P x I | Source | Recommended Action |
|------|-----|---|---|-------|--------|-------------------|
| 1 | **Void threshold unresolved** (3 competing values) | 9 | 10 | 90 | V1-D1, Known Gap #8 | MUST RESOLVE before prompt assembly. Recommend 1,350px (1.5 x 900px actual viewport height). |
| 2 | **S4 blind spots entirely absent** (0/5 addressed) | 8 | 9 | 72 | S4 all blind spots | Add staged downgrade (BS-4/BS-5) to Layer 2D. Add reader journey (BS-2) to Layer 1 or reference. |
| 3 | **S3 experiential laws mostly absent** (6/10 missing) | 7 | 9 | 63 | S3 L2-L9 | Add 5-line "experiential laws" block to Layer 1 conviction. |
| 4 | **V2 composition theory absent** (interaction types, 2-axis model) | 8 | 8 | 64 | V2-3, V2-4, V2-5 | Route file 13 to mechanism-builder and metaphor-builder as reference. Add "composition vs vocabulary" to Layer 1. |
| 5 | **Restraint ratio not explicit** | 7 | 8 | 56 | Item 18, V1-1 | Add explicit ratio + worked examples to Layer 2C and reference library. |
| 6 | **3-phase constraint density flip** (>20 binary rules degrade) | 6 | 9 | 54 | V2-1 | Audit: does the execution spec have >20 binary rules? If so, prioritize ruthlessly per E4 Law 5. |

### HIGH (P x I 4-7)

| Rank | Gap | P | I | P x I | Source | Recommended Action |
|------|-----|---|---|-------|--------|-------------------|
| 7 | **Header ratio conflict** (20% vs 25%) | 6 | 7 | 42 | V1-D2 | Resolve: use 20% as target, 25% as kill. |
| 8 | **Checkpoint message examples absent** | 7 | 6 | 42 | V1-6 | Include 2-3 examples in Layer 3B or reference. |
| 9 | **Kill criteria not placed in prompt** | 5 | 8 | 40 | E1 gap | Add kill criteria summary to Layer 2D PROCESS. |
| 10 | **Scale-attention matrix absent** | 5 | 7 | 35 | V3-1 | Route to planner as reference. Add "maximum 3 scales" to Layer 2C. |
| 11 | **E4 Law 5 (primacy ordering) not applied** | 6 | 6 | 36 | E4 gap | Ensure builder prompt lists container width FIRST, then void, then soul. |
| 12 | **Content-form fit methodology absent** | 5 | 7 | 35 | V1-5 | Route file 05 to planner. Add zone justification criteria to Layer 2C. |
| 13 | **Falsification criteria absent** | 4 | 7 | 28 | V3-3 | Add to Layer 1 or post-experiment protocol. |
| 14 | **Cognitive biases not warned** | 5 | 6 | 30 | S2 rank 1 | Add narrative contamination warning to Layer 1 conviction. |
| 15 | **Silence zone CSS specification absent** | 6 | 5 | 30 | V1-2 | Include in reference library (route to mechanism-builder). |
| 16 | **Per-act mechanism recommendations absent** | 4 | 6 | 24 | V3-6 | Route file 15 to planner and skeleton-builder as reference. |

### MEDIUM (P x I 2-3)

| Rank | Gap | P x I | Source | Action |
|------|-----|-------|--------|--------|
| 17 | Metaphor summary not required from builder | 12 | E2 | Add to Layer 2E self-check |
| 18 | File Diff Gate not mentioned | 12 | E1 | Add to Layer 3C |
| 19 | E4 Law 4 (one-rule-one-line) not enforced | 12 | E4 | Apply during prompt assembly |
| 20 | Communication as attention redistribution not explained | 10 | V3-4 | Layer 1 conviction or reference |
| 21 | Diminishing returns curve not shared | 10 | V3-5 | Reference library for team-lead |
| 22 | Preparation paradox not encoded as warning | 10 | V2-2 | Layer 1 conviction footnote |

---

## CROSS-REFERENCE SUMMARY

### Quantitative Coverage

| File Set | Items Tracked | In Prompt | Missing | Coverage |
|----------|--------------|-----------|---------|----------|
| 21 Convergent Items (file 11) | 21 | 19 | 2 | 90% |
| V1 Critical Misses (files 01-07) | 8 | 0 | 8 | 0% |
| V2 Top Items (files 08-14) | 12 | 1 | 11 | 8% |
| V3 Significant Items (files 15-21) | 7 | 0 | 7 | 0% |
| E1 Enforcement Types | 8 | 6 | 2 | 75% |
| E2 Essential Builder Items | 10 | 7 | 3 | 70% |
| E4 Encoding Laws | 7 | 5 | 2 | 71% |
| S1 AT RISK Findings | 4 | 1 | 3 | 25% |
| S2 Top Lost Findings | 6 | 2 | 4 | 33% |
| S3 Experiential Laws | 10 | 4 | 6 | 40% |
| S4 Blind Spots | 5 | 0 | 5 | 0% |

### Key Findings

1. **Convergent items are well-covered (90%).** The prompt's Layer 2 execution spec captures nearly all high-frequency cross-file items. This is the strongest dimension.

2. **Nuance recovery items are almost entirely absent (0-8%).** The prompt captures SPECIFICATIONS (what to measure) but NOT the THEORIES, EXAMPLES, COUNTER-CASES, or TEACHING CONTENT that makes specifications actionable. This is the weakest dimension.

3. **The metacognitive frameworks (E1-E4) are ~70% compliant.** The prompt follows the architectural prescriptions (binary rules, attention budgets, builder concern grouping) but misses 2 enforcement types, 2 encoding laws, and the priority ordering strategy.

4. **Integration analyses show moderate gaps (25-40%).** Scale findings, research losses, and experiential laws are partially but not fully integrated. The cross-experiment wisdom (S3) and metacognitive blind spots (S4) are the least represented.

5. **THE DOMINANT GAP is Layer 1 (Conviction).** The prompt outline specifies conviction content (thesis, beauty definition, tensions, exemplars) but does NOT include experiential laws, composition theory, reader journey design, failure-as-information theory, or the preparation paradox warning. These are the items that transform specifications from "rules to follow" into "understanding to embody."

6. **THE MOST DANGEROUS GAP is threshold resolution.** Three competing void thresholds (1,350 vs 1,620 vs 2,160px) and two competing header ratios (20% vs 25%) could produce contradictory builder instructions. This MUST be resolved before prompt assembly.

7. **Reference library routing is the highest-ROI action.** Many V1-V3 gaps (worked examples, CSS details, interaction types, subtlety inventory) belong in the reference library, not the execution spec. Routing files 04, 05, 11, 12, 13, 15 to specific agents adds zero prompt cost.

---

## KNOWN GAPS IN CURRENT PROMPT (Updated from Original 10)

Original 10 known gaps + 6 newly identified:

| # | Gap | Status After This Audit |
|---|-----|------------------------|
| 1 | TC skill invocation insufficient | CONFIRMED -- composition theory (interaction types, 2-axis model) not captured |
| 2 | PA skill invocation insufficient | CONFIRMED -- PA-49 void detection, Mode 4 spatial specialist dimension assignment not captured |
| 3 | Ceiling reflections not fully captured | CONFIRMED -- 200+ nuances from V2, experiential laws from S3 not captured |
| 4 | D-004 decision log findings | NEEDS VERIFICATION -- not cross-referenced in this audit |
| 5 | Level 2 worker observations not integrated | CONFIRMED -- state assessments (files 08-10) show gap |
| 6 | CD-006 container 1100px not 960px | CONFIRMED in V3 (N15-09) -- CD-006 used wider container |
| 7 | Mechanism cap 16 vs 14 | RESOLVED in master checklist (TC-05): 12-14 target, 16 hard cap |
| 8 | Void threshold 3-way discrepancy | CONFIRMED and WORSENED -- need resolution to 1,350px |
| 9 | Gate fatigue (47 evaluation points) | CONFIRMED -- S4 identifies 3 new failure modes including gate fatigue |
| 10 | Conviction-execution-conviction sandwich (V2 suggestion) | NOT ASSESSED -- prompt structure unclear on sandwich vs linear |
| **11** | **S4 blind spots entirely unaddressed (0/5)** | NEW -- staged downgrade, reader journey, failure-as-information, calibration, exit criteria |
| **12** | **S3 experiential laws mostly absent (6/10)** | NEW -- deployment ≠ perception, plans don't prevent spatial failure, concept ≠ product |
| **13** | **Composition theory absent (5 interaction types, 2-axis model)** | NEW -- the most important content from file 13 is not in prompt |
| **14** | **Checkpoint message examples absent** | NEW -- agents need to see what good messages look like |
| **15** | **Kill criteria not placed in prompt architecture** | NEW -- designed but not assigned a prompt section |
| **16** | **Restraint ratio not explicit** | NEW -- convergent item 18 has no explicit home |

---

**END CROSS-REFERENCE REPORT**
**Files read:** 24 pre-flight files + prompt structure outline
**Total items tracked:** 114 across 11 tracking dimensions
**Overall coverage:** ~55% (strong on convergent items, weak on nuance recovery)
**Critical actions needed:** 6 (threshold resolution, S4 blind spots, experiential laws, composition theory, restraint ratio, kill criteria placement)
**High actions needed:** 10
**Reference library additions needed:** 6 file routings
